import { useDispatch } from 'react-redux';
import { useHttp } from '../hooks/http.hook';

import imageUrlChecker from '../utils/imageUrlChecker';

export interface IArtInfo {
  id: number | null;
  title: string | null;
  artist_title: string | null;
  is_public_domain: boolean | null;
  image_id: string | null;
}

export interface IDetailedArtInfo extends IArtInfo {
  date_display: string | null;
  artist_display: string | null;
  dimensions: string | null;
  credit_line: string | null;
}

export interface IHandledArtInfo {
  id: number | null;
  title: string | null;
  artistName: string | null;
  isPublicDomain: boolean | null;
  imageUrl: string | null | unknown;
}

export interface IHandledDetailedArtInfo extends IHandledArtInfo {
  date: string | null;
  artistNationality: string | null;
  artDimensions: string | null;
  creditLine: string | null;
}

const emtyArtInfo: IHandledArtInfo = {
  id: null,
  title: null,
  artistName: null,
  isPublicDomain: null,
  imageUrl: null,
};

const emtyDetailedArtInfo: IHandledDetailedArtInfo = {
  id: null,
  title: null,
  artistName: null,
  isPublicDomain: null,
  imageUrl: null,
  date: null,
  artistNationality: null,
  artDimensions: null,
  creditLine: null,
};

const useArtService = () => {
  const { request } = useHttp();
  const dispatch = useDispatch();

  const _apiBase = 'https://api.artic.edu/api/v1/artworks';

  const getArtTitlesByQuery = async (query: string) => {
    try {
      const result = await request(`${_apiBase}/search?q=${query}&size=3&fields=title`);
      return result.data.length ? result.data.map((artItem: IArtInfo) => artItem.title) : [];
    } catch {
      return [];
    }
  };

  const getGalleryArts = async (page: number, search: string, sortOption: string) => {
    try {
      const neededFields = ['id', 'title', 'artist_title', 'is_public_domain', 'image_id'];
      let requestUrl = '';
      if (search) {
        switch (sortOption) {
          case 'modern':
            requestUrl = `${_apiBase}/search?q=${search}&page=${page ? page : 1}&limit=3&fields=${neededFields}&sort[date_start][order]=desc`;
            break;
          case 'ancient':
            requestUrl = `${_apiBase}/search?q=${search}&page=${page ? page : 1}&limit=3&fields=${neededFields}&sort[date_start][order]=asc`;
            break;
          default:
            requestUrl = `${_apiBase}/search?q=${search}&page=${page ? page : 1}&limit=3&fields=${neededFields}`;
            break;
        }
      } else {
        switch (sortOption) {
          case 'modern':
            requestUrl = `${_apiBase}/search?page=${page ? page : 1}&limit=3&fields=${neededFields}&sort[date_start][order]=desc`;
            break;
          case 'ancient':
            requestUrl = `${_apiBase}/search?page=${page ? page : 1}&limit=3&fields=${neededFields}&sort[date_start][order]=asc`;
            break;
          default:
            requestUrl = `${_apiBase}?page=${page ? page : 1}&limit=3&fields=${neededFields}`;
            break;
        }
      }
      const result = await request(requestUrl);
      if (!page) {
        if (sortOption !== 'default' && result.pagination.total_pages > 333)
          result.pagination.total_pages = 333;
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: result.pagination.current_page });
        dispatch({ type: 'SET_ARTS_GALLERY_ALL_PAGES', payload: result.pagination.total_pages });
      }
      return Promise.all(result.data.map((artItem: IArtInfo) => _transformArt(artItem)));
    } catch {
      dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'error' });

      return Array(3).fill(emtyArtInfo);
    }
  };

  const getCollectionArts = async () => {
    try {
      const neededFields = ['id', 'title', 'artist_title', 'is_public_domain', 'image_id'];
      const result = await request(`${_apiBase}/search?size=9&fields=${neededFields}`);
      return Promise.all(result.data.map((artItem: IArtInfo) => _transformArt(artItem)));
    } catch {
      dispatch({ type: 'SET_ARTS_COLLECTION_LIST_PROCESS', payload: 'error' });
      return Array(9).fill(emtyArtInfo);
    }
  };

  const getArtById = async (id: string | undefined) => {
    try {
      const neededFields = [
        'id',
        'title',
        'artist_title',
        'is_public_domain',
        'image_id',
        'date_display',
        'artist_display',
        'dimensions',
        'credit_line',
      ];
      const result = await request(`${_apiBase}/${id}?fields=${neededFields}`);

      return _DetailTransformArt(result.data);
    } catch {
      dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'error' });

      return emtyDetailedArtInfo;
    }
  };

  const getArtsByIdArray = async (idArray: number[]) => {
    try {
      if (!idArray.length) return [];
      const neededFields = ['id', 'title', 'artist_title', 'is_public_domain', 'image_id'];
      const result = await request(`${_apiBase}/?ids=${idArray}&fields=${neededFields}`);
      return Promise.all(result.data.map((artItem: IArtInfo) => _transformArt(artItem)));
    } catch {
      dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST_PROCESS', payload: 'error' });

      return Array(18).fill(emtyArtInfo);
    }
  };

  const _transformArt = async (art: IArtInfo) => {
    if (art.image_id) {
      try {
        const validUrl = await imageUrlChecker(
          `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`
        );
        return {
          id: art.id,
          title: art.title,
          artistName: art.artist_title,
          isPublicDomain: art.is_public_domain,

          imageUrl: validUrl,
        };
      } catch (error) {
        console.log('Image loading error:', error, ' it was replaced with placeholder');
        return {
          id: art.id,
          title: art.title,
          artistName: art.artist_title,
          isPublicDomain: art.is_public_domain,
          imageUrl: '',
        };
      }
    } else {
      return {
        id: art.id,
        title: art.title,
        artistName: art.artist_title,
        isPublicDomain: art.is_public_domain,
        imageUrl: '',
      };
    }
  };

  const _DetailTransformArt = async (art: IDetailedArtInfo) => {
    if (art.image_id) {
      try {
        const validUrl = await imageUrlChecker(
          `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`
        );
        return {
          id: art.id,
          title: art.title,
          artistName: art.artist_title,
          isPublicDomain: art.is_public_domain,
          imageUrl: validUrl,
          date: art.date_display,
          artistNationality: _NationalityIdentifier(art.artist_display),
          artDimensions: art.dimensions,
          creditLine: art.credit_line,
        };
      } catch (error) {
        console.log('Image loading error:', error, ' it was replaced with placeholder');
        return {
          id: art.id,
          title: art.title,
          artistName: art.artist_title,
          isPublicDomain: art.is_public_domain,
          imageUrl: '',
          date: art.date_display,
          artistNationality: _NationalityIdentifier(art.artist_display),
          artDimensions: art.dimensions,
          creditLine: art.credit_line,
        };
      }
    } else {
      return {
        id: art.id,
        title: art.title,
        artistName: art.artist_title,
        isPublicDomain: art.is_public_domain,
        imageUrl: '',
        date: art.date_display,
        artistNationality: _NationalityIdentifier(art.artist_display),
        artDimensions: art.dimensions,
        creditLine: art.credit_line,
      };
    }
  };

  const _NationalityIdentifier = (str: string | null) => {
    const nationalitiesDictionary = [
      `French`,
      `American`,
      `Norwegian`,
      `Guatemala`,
      `Japanese`,
      `English`,
      `Italian`,
    ];

    if (!str) return '';
    for (const nationality of nationalitiesDictionary) {
      if (str.includes(nationality)) {
        return nationality;
      }
    }
    let result = str.replace(/\n/g, '');

    return result;
  };

  return {
    getArtTitlesByQuery,
    getGalleryArts,
    getCollectionArts,
    getArtById,
    getArtsByIdArray,
  };
};

export default useArtService;

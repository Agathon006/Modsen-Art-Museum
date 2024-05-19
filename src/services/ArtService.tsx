import { useDispatch } from 'react-redux';
import { useHttp } from '../hooks/http.hook';
import { date } from 'yup';

interface IResponseArtInfo {
  id: number;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  image_id: string;
}

interface IResponseDetailedArtInfo {
  id: number;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  image_id: string;
  date_display: string;
  artist_display: string;
  dimensions: string;
  credit_line: string;
}

interface IResponseArtsBody {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
  };
  data: IResponseArtInfo[];
}

interface IResponseDetailedArtBody {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
  };
  data: IResponseDetailedArtInfo[];
}

export interface IArtInfo {
  id: number;
  title: string;
  artistName: string;
  isPublicDomain: boolean;
  imageUrl: string | Promise<string>;
}

export interface IDetaildArtInfo {
  id: number;
  title: string;
  artistName: string;
  isPublicDomain: boolean;
  imageUrl: string | Promise<string>;
  date: string;
  artistNationality: string | null;
  artDimensions: string;
  creditLine: string;
}

const emtyArtInfo = {
  id: null,
  title: null,
  artistName: null,
  isPublicDomain: null,
  imageUrl: null,
};

const emtyDetailedArtInfo = {
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

  const getGalleryArts = async (page: number, search: string): Promise<IArtInfo[]> => {
    try {
      const result: IResponseArtsBody = await request(
        search
          ? `${_apiBase}/search?q=${search}&page=${page ? page : 1}&limit=3`
          : `${_apiBase}?page=${page ? page : 1}&limit=3&has_image=true`
      );
      if (!page) {
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: result.pagination.current_page });
        dispatch({ type: 'SET_ARTS_GALLERY_ALL_PAGES', payload: result.pagination.total_pages });
      }
      return result.data.map(_transformArt);
    } catch {
      dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'error' });
      // @ts-ignore
      return [emtyArtInfo, emtyArtInfo, emtyArtInfo];
    }
  };

  // @ts-ignore
  const getCollectionArts = async (): Promise<IArtInfo[]> => {
    try {
      const result: IResponseArtsBody = await request(`${_apiBase}?page=1&limit=9&has_image=true`);
      return result.data.map(_transformArt);
    } catch {
      dispatch({ type: 'SET_ARTS_COLLECTION_LIST_PROCESS', payload: 'error' });
      return [
        // @ts-ignore
        emtyArtInfo,
        // @ts-ignore
        emtyArtInfo,
        // @ts-ignore
        emtyArtInfo,
        // @ts-ignore
        emtyArtInfo,
        // @ts-ignore
        emtyArtInfo,
        // @ts-ignore
        emtyArtInfo,
        // @ts-ignore
        emtyArtInfo,
        // @ts-ignore
        emtyArtInfo,
        // @ts-ignore
        emtyArtInfo,
      ];
    }
  };

  const getArtById = async (id: number): Promise<IDetaildArtInfo> => {
    try {
      const result: IResponseDetailedArtBody = await request(`${_apiBase}/${id}`);
      // @ts-ignore
      return _DetailTransformArt(result.data);
    } catch {
      dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'error' });
      // @ts-ignore
      return [emtyDetailedArtInfo];
    }
  };

  const _transformArt = (art: IResponseArtInfo): IArtInfo => {
    return {
      id: art.id,
      title: art.title,
      artistName: art.artist_title,
      isPublicDomain: art.is_public_domain,
      imageUrl: art.image_id
        ? `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`
        : '',
    };
  };

  const _DetailTransformArt = (art: IResponseDetailedArtInfo): IDetaildArtInfo => {
    return {
      id: art.id,
      title: art.title,
      artistName: art.artist_title,
      isPublicDomain: art.is_public_domain,
      imageUrl: art.image_id
        ? `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`
        : '',
      date: art.date_display,
      artistNationality: _NationalityIdentifier(art.artist_display),
      artDimensions: art.dimensions,
      creditLine: art.credit_line,
    };
  };

  const _NationalityIdentifier = (str: string) => {
    const nationalitiesDictionary = [
      `French`,
      `American`,
      `Norwegian`,
      `Guatemala`,
      `Japanese`,
      `English`,
      `Italian`,
    ];

    for (const nationality of nationalitiesDictionary) {
      if (str.includes(nationality)) {
        return nationality;
      }
    }
    let result = str.replace(/\n/g, '');

    return result;
  };

  return {
    getGalleryArts,
    getCollectionArts,
    getArtById,
  };
};

export default useArtService;

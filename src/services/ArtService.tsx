import { useDispatch } from 'react-redux';
import { useHttp } from '../hooks/http.hook';

interface IResponseArtInfo {
  id: number;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  image_id: string;
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

export interface IArtInfo {
  id: number;
  title: string;
  artistName: string;
  isPublicDomain: boolean;
  imageUrl: string | Promise<string>;
}

const emtyArtInfo = {
  id: null,
  title: null,
  artistName: null,
  isPublicDomain: null,
  imageUrl: null,
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

  return {
    getGalleryArts,
    getCollectionArts,
  };
};

export default useArtService;

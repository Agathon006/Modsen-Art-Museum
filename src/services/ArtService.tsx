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

const useArtService = () => {
  const { request } = useHttp();
  const dispatch = useDispatch();

  const _apiBase = 'https://api.artic.edu/api/v1/artworks';

  const getGalleryArts = async (page: number): Promise<IArtInfo[]> => {
    const result: IResponseArtsBody = await request(
      `${_apiBase}?page=${page ? page : 1}&limit=3&has_image=true`
    );
    if (!page) {
      dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: result.pagination.current_page });
      dispatch({ type: 'SET_ARTS_GALLERY_ALL_PAGES', payload: result.pagination.total_pages });
    }
    return result.data.map(_transformArt);
  };

  const getCollectionArts = async (): Promise<IArtInfo[]> => {
    const result: IResponseArtsBody = await request(`${_apiBase}?page=1&limit=9&has_image=true`);
    return result.data.map(_transformArt);
  };

  // const getArtByTitle = async (title: string): Promise<ICharInfo[]> => {
  // 	const result: IResponseCharsBody = await request(
  // 		`${_apiBase}?name=${title}`
  // 	);
  // 	return result.data.map(_transformArt);
  // };

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
    // getArtByTitle
  };
};

export default useArtService;

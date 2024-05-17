import { useHttp } from '../hooks/http.hook';

interface IResponseArtInfo {
  id: number;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  image_id: string;
}

interface IResponseArtsBody {
  data: IResponseArtInfo[];
}

export interface IArtInfo {
  id: number;
  title: string;
  artistName: string;
  isPublicDomain: boolean;
  imageUrl: string;
}

const useArtService = () => {
  const { request } = useHttp();

  const _apiBase = 'https://api.artic.edu/api/v1/artworks';

  const getAllArts = async (): Promise<IArtInfo[]> => {
    const result: IResponseArtsBody = await request(`${_apiBase}`);
    return result.data.map(_transformArt);
  };

  const getArt = async (id: string): Promise<IArtInfo> => {
    const result: IResponseArtsBody = await request(`${_apiBase}/${id}?`);
    return _transformArt(result.data[0]);
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
    getAllArts,
    getArt,
    // getArtByTitle
  };
};

export default useArtService;

import { useHttp } from '../hooks/http.hook';

interface ICharComicDetails {
  resourceURI: string;
  name: string;
}

interface IResponseCharInfo {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
  urls: { url: string }[];
  comics: { items: ICharComicDetails[] };
}

interface IResponseCharsBody {
  data: IResponseCharInfo[];
}

export interface ICharInfo {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: ICharComicDetails[];
}

export interface IComic {
  id: number;
  title: string;
  description: string;
  pageCount: string;
  thumbnail: string;
  language: string;
  price: string;
}

const useArtService = () => {
  const { request, clearError, process, setProcess } = useHttp();

  const _apiBase = 'https://api.artic.edu/api/v1/artworks';

  const getAllArts = async (): Promise<ICharInfo[]> => {
    const result: IResponseCharsBody = await request(`${_apiBase}`);
    return result.data.map(_transformArt);
  };

  const getArt = async (id: string): Promise<ICharInfo> => {
    const result: IResponseCharsBody = await request(`${_apiBase}/${id}?`);
    return _transformArt(result.data[0]);
  };

  // const getArtByTitle = async (title: string): Promise<ICharInfo[]> => {
  // 	const result: IResponseCharsBody = await request(
  // 		`${_apiBase}?name=${title}`
  // 	);
  // 	return result.data.map(_transformArt);
  // };

  const _transformArt = (char: IResponseCharInfo): ICharInfo => {
    return {
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  return {
    clearError,
    process,
    setProcess,
    getAllArts,
    getArt,
    // getArtByTitle
  };
};

export default useArtService;

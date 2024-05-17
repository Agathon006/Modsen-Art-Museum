import Spinner from '../components/spinner/Spinner';

import { ICharInfo, IComic } from '../services/ArtService';

const setContent = <T extends ICharInfo | IComic>(
  process: string,
  Component: React.FC<{ data: T }>,
  data: T
) => {
  switch (process) {
    case 'waiting':
      return <span>Waiting...</span>;
    case 'loading':
      return <Spinner />;
    case 'confirmed':
      return <Component data={data} />;
    case 'error':
      return <span>Some error...</span>;
    default:
      throw new Error('Unexpected process state');
  }
};

export default setContent;

import Spinner from '../components/spinner/Spinner';

import { IArtInfo } from '../services/ArtService';

const setContent = <T extends IArtInfo>(
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

import Skeleton from '@components/skeleton/Skeleton';
import ErrorSkeleton from '@components/errorSkeleton/ErrorSkeleton';

const setContent = (process: string, Component: React.FC) => {
  switch (process) {
    case 'loading':
      return <Skeleton />;
    case 'confirmed':
      return <Component />;
    case 'error':
      return <ErrorSkeleton />;
    default:
      throw new Error('Unexpected process state');
  }
};

export default setContent;

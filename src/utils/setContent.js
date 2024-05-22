import { jsx as _jsx } from 'react/jsx-runtime';
import Skeleton from '@components/skeleton/Skeleton';
import ErrorSkeleton from '@components/errorSkeleton/ErrorSkeleton';
var setContent = function (process, Component) {
  switch (process) {
    case 'loading':
      return _jsx(Skeleton, {});
    case 'confirmed':
      return _jsx(Component, {});
    case 'error':
      return _jsx(ErrorSkeleton, {});
    default:
      throw new Error('Unexpected process state');
  }
};
export default setContent;

import { jsx as _jsx } from 'react/jsx-runtime';
import Spinner from '../components/spinner/Spinner';
var setContent = function (process, Component, data) {
  switch (process) {
    case 'waiting':
      return _jsx('span', { children: 'Waiting...' });
    case 'loading':
      return _jsx(Spinner, {});
    case 'confirmed':
      return _jsx(Component, { data: data });
    case 'error':
      return _jsx('span', { children: 'Some error...' });
    default:
      throw new Error('Unexpected process state');
  }
};
export default setContent;

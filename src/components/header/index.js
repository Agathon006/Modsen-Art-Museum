import { jsx as _jsx } from 'react/jsx-runtime';
import { useLocation } from 'react-router-dom';
// @ts-ignore
import StyledHeader from './styled.js';
var Header = function () {
  var location = useLocation();
  var pathname = location.pathname;
  return _jsx(StyledHeader, { pathname: pathname });
};
export default Header;

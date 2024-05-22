import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '@components/header/index.js';
import Footer from '@components/footer/index.js';
function AppLayout(_a) {
  var children = _a.children;
  var location = useLocation();
  var id = useParams().id;
  useEffect(
    function () {
      var title = 'Blank';
      if (location.pathname === '/') {
        title = 'Home';
      } else if (location.pathname === '/favorites') {
        title = 'Favorites';
      } else if (location.pathname.startsWith('/')) {
        title = 'Detail Info';
      }
      document.title = title;
    },
    [location, id]
  );
  return _jsxs(_Fragment, { children: [_jsx(Header, {}), children, _jsx(Footer, {})] });
}
export default AppLayout;

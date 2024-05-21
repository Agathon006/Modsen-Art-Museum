var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AppLayout from '../../components/appLayout/AppLayout.js';
import store from '../../store/store.js';
import MainPage from '../../pages/MainPage.js';
import SingleArtPage from '../../pages/singleArtPage/SingleArtPage.js';
import FavouriteArtsPage from '../../pages/favouriteArtsPage/FavouriteArtsPage.js';
var Wrapper = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 120px;\n',
      ],
      [
        '\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 120px;\n',
      ]
    ))
);
var App = function () {
  return _jsx(Provider, {
    store: store,
    children: _jsx(Router, {
      children: _jsx(Wrapper, {
        children: _jsx(AppLayout, {
          children: _jsxs(Routes, {
            children: [
              _jsx(Route, { path: '/', element: _jsx(MainPage, {}) }),
              _jsx(Route, { path: '/favorites', element: _jsx(FavouriteArtsPage, {}) }),
              _jsx(Route, { path: '/:id', element: _jsx(SingleArtPage, {}) }),
              _jsx(Route, { path: '*', element: _jsx(Navigate, { to: '/', replace: true }) }),
            ],
          }),
        }),
      }),
    }),
  });
};
export default App;
var templateObject_1;

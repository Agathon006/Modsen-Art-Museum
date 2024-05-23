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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from '@store/store.js';
import MainPage from '@pages/MainPage.js';
import SingleArtPage from '@pages/singleArtPage/SingleArtPage.js';
import FavouriteArtsPage from '@pages/favouriteArtsPage/FavouriteArtsPage.js';
import AppLayout from '@components/appLayout/AppLayout.js';
//@ts-ignore
import GlobalStyle from './GlobalStyle.js';
import styled from 'styled-components';
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
  return _jsxs(Provider, {
    store: store,
    children: [
      _jsx(GlobalStyle, {}),
      _jsx(Router, {
        children: _jsx(Wrapper, {
          children: _jsx(AppLayout, {
            children: _jsxs(Routes, {
              children: [
                _jsx(Route, { path: '/', element: _jsx(MainPage, {}) }),
                _jsx(Route, { path: '/favorites', element: _jsx(FavouriteArtsPage, {}) }),
                _jsx(Route, { path: '/:id', element: _jsx(SingleArtPage, {}) }),
              ],
            }),
          }),
        }),
      }),
    ],
  });
};
export default App;
var templateObject_1;

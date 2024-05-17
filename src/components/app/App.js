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
import store from '../../store/store.js';
import Header from '../header/index.js';
import Footer from '../footer/index.js';
import MainPage from '../../pages/MainPage.js';
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
    children: _jsxs(Wrapper, {
      children: [_jsx(Header, {}), _jsx(MainPage, {}), _jsx(Footer, {})],
    }),
  });
};
export default App;
var templateObject_1;

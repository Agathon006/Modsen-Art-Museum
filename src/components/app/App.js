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
import styled from 'styled-components';
import Header from '../header/index.js';
import Footer from '../footer/index.js';
var Wrapper = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\nmin-height: 100vh;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\n',
      ],
      [
        '\nmin-height: 100vh;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\n',
      ]
    ))
);
var App = function () {
  return _jsxs(Wrapper, { children: [_jsx(Header, {}), _jsx(Footer, {})] });
};
export default App;
var templateObject_1;

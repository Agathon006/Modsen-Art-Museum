import { jsx as _jsx } from 'react/jsx-runtime';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import StyledHeader from './styled.js';
var Header = function () {
  var wrapperRef = useRef(null);
  var location = useLocation();
  var pathname = location.pathname;
  var dispatch = useDispatch();
  // @ts-ignore
  var asideMode = useSelector(function (state) {
    return state.asideMode;
  });
  // @ts-ignore
  var handleClickOutside = function (event) {
    // @ts-ignore
    if (wrapperRef.current === event.target) {
      switchAsideMode(false);
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }
  };
  useEffect(
    function () {
      if (asideMode) {
        document.body.style.overflow = 'hidden';
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.body.style.overflow = 'auto';
        document.removeEventListener('mousedown', handleClickOutside);
      }
      return function () {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [asideMode]
  );
  var switchAsideMode = function (newAsideMode) {
    dispatch({ type: 'SET_ASIDE_MODE', payload: newAsideMode });
  };
  return _jsx(StyledHeader, {
    wrapperRef: wrapperRef,
    asideMode: asideMode,
    switchAsideMode: switchAsideMode,
    pathname: pathname,
  });
};
export default Header;

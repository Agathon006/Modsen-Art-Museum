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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useArtService from './../services/ArtService';
import styled from 'styled-components';
import {
  MainPageTitle,
  MainPageSearchBar,
  MainPageGallerySubTitle,
  MainPageGalleryTitle,
  MainPageSectionGallery,
  MainPageSectionGalleryNavigation,
  MainPageCollectionSubtitle,
  MainPageCollectionTitle,
  MainPageArtCollection,
  // @ts-ignore
} from './styled.js';
var Wrapper = styled.main(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n',
      ],
      [
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n',
      ]
    ))
);
var MainPage = function () {
  var getAllArts = useArtService().getAllArts;
  var dispatch = useDispatch();
  useEffect(function () {
    onRequest();
  }, []);
  var onRequest = function () {
    getAllArts()
      .then(onArtGalleryLoaded)
      .then(function () {
        return dispatch({ type: 'SET_PROCESS', payload: 'confirmed' });
      });
  };
  var onArtGalleryLoaded = function (ArtsList) {
    dispatch({ type: 'SET_ARTS_LIST', payload: ArtsList });
  };
  return _jsxs(Wrapper, {
    children: [
      _jsx(MainPageTitle, {}),
      _jsx(MainPageSearchBar, {}),
      _jsx(MainPageGallerySubTitle, {}),
      _jsx(MainPageGalleryTitle, {}),
      _jsx(MainPageSectionGallery, {}),
      _jsx(MainPageSectionGalleryNavigation, {}),
      _jsx(MainPageCollectionSubtitle, {}),
      _jsx(MainPageCollectionTitle, {}),
      _jsx(MainPageArtCollection, {}),
    ],
  });
};
export default MainPage;
var templateObject_1;

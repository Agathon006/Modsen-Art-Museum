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
import { useSelector, useDispatch } from 'react-redux';
import useArtService from '@services/ArtService';
import ArtCollection from '@components/artCollection/ArtCollection.js';
import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import styled from 'styled-components';
import {
  FavouriteArtsPageTitle,
  FavouriteArtsPageCollectionSubTitle,
  FavouriteArtsPageCollectionTitle,
  // @ts-ignore
} from './styled.js';
var Wrapper = styled.main(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 1400px) {\n    width: 100%;\n    padding: 0 10px;\n  }\n',
      ],
      [
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 1400px) {\n    width: 100%;\n    padding: 0 10px;\n  }\n',
      ]
    ))
);
var FavouriteArtsPage = function () {
  var getArtsByIdArray = useArtService().getArtsByIdArray;
  var dispatch = useDispatch();
  var artsFavoriteCollectionList = useSelector(function (state) {
    return state.favorite.artsFavoriteCollectionList;
  });
  var artsFavoriteCollectionListProcess = useSelector(function (state) {
    return state.favorite.artsFavoriteCollectionListProcess;
  });
  var favoriteArtsIdList = useSelector(function (state) {
    return state.favorite.favoriteArtsIdList;
  });
  useEffect(function () {
    dispatch({ type: 'SET_ASIDE_MODE', payload: false });
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST_PROCESS', payload: 'loading' });
    updateData();
  }, []);
  var updateData = function () {
    getArtsByIdArray(favoriteArtsIdList).then(onDataLoaded);
  };
  var onDataLoaded = function (data) {
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST', payload: data });
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST_PROCESS', payload: 'confirmed' });
  };
  return _jsxs(Wrapper, {
    children: [
      _jsx(FavouriteArtsPageTitle, {}),
      _jsx(FavouriteArtsPageCollectionSubTitle, {}),
      _jsx(FavouriteArtsPageCollectionTitle, {}),
      _jsx(ErrorBoundary, {
        children: _jsx(ArtCollection, {
          itemsNumber: 18,
          process: artsFavoriteCollectionListProcess,
          artsList: artsFavoriteCollectionList,
        }),
      }),
    ],
  });
};
export default FavouriteArtsPage;
var templateObject_1;

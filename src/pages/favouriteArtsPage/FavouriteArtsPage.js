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
import useArtService from '../../services/ArtService';
import ArtCollection from '../../components/artCollection/ArtCollection.js';
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
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n',
      ],
      [
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n',
      ]
    ))
);
var FavouriteArtsPage = function () {
  var getArtsByIdArray = useArtService().getArtsByIdArray;
  var dispatch = useDispatch();
  // @ts-ignore
  var artsFavoriteCollectionList = useSelector(function (state) {
    return state.artsFavoriteCollectionList;
  });
  var artsFavoriteCollectionListProcess = useSelector(
    // @ts-ignore
    function (state) {
      return state.artsFavoriteCollectionListProcess;
    }
  );
  // @ts-ignore
  var favoriteArtsIdList = useSelector(function (state) {
    return state.favoriteArtsIdList;
  });
  useEffect(function () {
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST_PROCESS', payload: 'loading' });
    updateData();
  }, []);
  var updateData = function () {
    // @ts-ignore
    getArtsByIdArray(favoriteArtsIdList).then(onDataLoaded);
  };
  // @ts-ignore
  var onDataLoaded = function (data) {
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST_PROCESS', payload: 'confirmed' });
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST', payload: data });
  };
  return _jsxs(Wrapper, {
    children: [
      _jsx(FavouriteArtsPageTitle, {}),
      _jsx(FavouriteArtsPageCollectionSubTitle, {}),
      _jsx(FavouriteArtsPageCollectionTitle, {}),
      _jsx(ArtCollection, {
        itemsNumber: 18,
        // @ts-ignore
        process: artsFavoriteCollectionListProcess,
        artsList: artsFavoriteCollectionList,
      }),
    ],
  });
};
export default FavouriteArtsPage;
var templateObject_1;

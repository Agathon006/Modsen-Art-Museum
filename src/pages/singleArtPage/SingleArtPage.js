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
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import setContent from '../../utils/setContent.js';
import useArtService from '../../services/ArtService';
import styled from 'styled-components';
import {
  StyledPicture,
  StyledDescription,
  // @ts-ignore
} from './styled.js';
var Wrapper = styled.main(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n',
      ],
      [
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n',
      ]
    ))
);
var PhotoSkeletonWrapper = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  width: 497px;\n  height: 570px;\n'],
      ['\n  width: 497px;\n  height: 570px;\n']
    ))
);
var DescriptionSkeletonWrapper = styled.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(['\n  width: 703px;\n'], ['\n  width: 703px;\n']))
);
var SingleArtPage = function () {
  var getArtById = useArtService().getArtById;
  var dispatch = useDispatch();
  var id = useParams().id;
  useEffect(
    function () {
      dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'loading' });
      updateData();
    },
    [id]
  );
  var updateData = function () {
    // @ts-ignore
    getArtById(id).then(onDataLoaded);
  };
  // @ts-ignore
  var onDataLoaded = function (data) {
    dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'confirmed' });
    dispatch({ type: 'SET_ART_BY_ID', payload: data });
  };
  // @ts-ignore
  var artByID = useSelector(function (state) {
    return state.artByID;
  });
  // @ts-ignore
  var artByIDProcess = useSelector(function (state) {
    return state.artByIDProcess;
  });
  // @ts-ignore
  var favoriteArtsIdList = useSelector(function (state) {
    return state.favoriteArtsIdList;
  });
  // @ts-ignore
  var isFavorite = favoriteArtsIdList.includes(artByID.id);
  var renderPicture = function () {
    return _jsx(StyledPicture, { dispatch: dispatch, isFavorite: isFavorite, artInfo: artByID });
  };
  var renderDescription = function () {
    return _jsx(StyledDescription, { artInfo: artByID });
  };
  return _jsxs(Wrapper, {
    children: [
      _jsx(PhotoSkeletonWrapper, {
        children: setContent(artByIDProcess, function () {
          return renderPicture();
        }),
      }),
      _jsx(DescriptionSkeletonWrapper, {
        children: setContent(artByIDProcess, function () {
          return renderDescription();
        }),
      }),
    ],
  });
};
export default SingleArtPage;
var templateObject_1, templateObject_2, templateObject_3;

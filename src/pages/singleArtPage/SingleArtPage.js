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
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';
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
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  gap: 80px;\n\n  @media (max-width: 1400px) {\n    width: 100%;\n    padding: 0 30px;\n    gap: 30px;\n  }\n\n  @media (max-width: 900px) {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  @media (max-width: 520px) {\n    padding: 0 10px;\n  }\n',
      ],
      [
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  gap: 80px;\n\n  @media (max-width: 1400px) {\n    width: 100%;\n    padding: 0 30px;\n    gap: 30px;\n  }\n\n  @media (max-width: 900px) {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  @media (max-width: 520px) {\n    padding: 0 10px;\n  }\n',
      ]
    ))
);
var PhotoSkeletonWrapper = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  width: 497px;\n  height: 570px;\n\n  @media (max-width: 900px) {\n    align-self: center;\n  }\n\n  @media (max-width: 520px) {\n    margin: 0 auto;\n    width: 370px;\n    height: 420px;\n  }\n',
      ],
      [
        '\n  width: 497px;\n  height: 570px;\n\n  @media (max-width: 900px) {\n    align-self: center;\n  }\n\n  @media (max-width: 520px) {\n    margin: 0 auto;\n    width: 370px;\n    height: 420px;\n  }\n',
      ]
    ))
);
var DescriptionSkeletonWrapper = styled.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  width: 703px;\n  margin: 0 auto;\n\n  @media (max-width: 900px) {\n    width: 100%;\n  }\n',
      ],
      [
        '\n  width: 703px;\n  margin: 0 auto;\n\n  @media (max-width: 900px) {\n    width: 100%;\n  }\n',
      ]
    ))
);
var SingleArtPage = function () {
  var getArtById = useArtService().getArtById;
  var dispatch = useDispatch();
  var id = useParams().id;
  useEffect(function () {
    dispatch({ type: 'SET_ASIDE_MODE', payload: false });
  }, []);
  useEffect(
    function () {
      dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'loading' });
      updateData();
    },
    [id]
  );
  var updateData = function () {
    getArtById(id).then(onDataLoaded);
  };
  var onDataLoaded = function (data) {
    console.log(data);
    dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'confirmed' });
    dispatch({ type: 'SET_ART_BY_ID', payload: data });
  };
  var artByID = useSelector(function (state) {
    return state.artById.artByID;
  });
  var artByIDProcess = useSelector(function (state) {
    return state.artById.artByIDProcess;
  });
  var favoriteArtsIdList = useSelector(function (state) {
    return state.favorite.favoriteArtsIdList;
  });
  var isFavorite = false;
  if (artByID.id) {
    isFavorite = favoriteArtsIdList.includes(artByID.id);
  }
  var renderPicture = function () {
    return _jsx(StyledPicture, { dispatch: dispatch, isFavorite: isFavorite, artInfo: artByID });
  };
  var renderDescription = function () {
    return _jsx(StyledDescription, { artInfo: artByID });
  };
  return _jsxs(Wrapper, {
    children: [
      _jsx(PhotoSkeletonWrapper, {
        children: _jsx(ErrorBoundary, {
          children: setContent(artByIDProcess, function () {
            return renderPicture();
          }),
        }),
      }),
      _jsx(DescriptionSkeletonWrapper, {
        children: _jsx(ErrorBoundary, {
          children: setContent(artByIDProcess, function () {
            return renderDescription();
          }),
        }),
      }),
    ],
  });
};
export default SingleArtPage;
var templateObject_1, templateObject_2, templateObject_3;

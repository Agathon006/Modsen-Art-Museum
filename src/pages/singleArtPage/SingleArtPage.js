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
    console.log(id);
    console.log(data);
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
  return _jsxs(Wrapper, {
    children: [
      _jsx(StyledPicture, { artInfo: artByID, process: artByIDProcess }),
      _jsx(StyledDescription, { artInfo: artByID, process: artByIDProcess }),
    ],
  });
};
export default SingleArtPage;
var templateObject_1;

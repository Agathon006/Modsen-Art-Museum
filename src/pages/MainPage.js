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
  var _a = useArtService(),
    getGalleryArts = _a.getGalleryArts,
    getCollectionArts = _a.getCollectionArts;
  var dispatch = useDispatch();
  // @ts-ignore
  var galleryArtsList = useSelector(function (state) {
    return state.artsGalleryList;
  });
  // @ts-ignore
  var artsGalleryPage = useSelector(function (state) {
    return state.artsGalleryPage;
  });
  // @ts-ignore
  var artsGalleryAllPages = useSelector(function (state) {
    return state.artsGalleryAllPages;
  });
  useEffect(function () {
    onCollectionArtsRequest();
  }, []);
  var onCollectionArtsRequest = function () {
    getCollectionArts()
      .then(onArtCollectionLoaded)
      .then(function () {
        return dispatch({ type: 'SET_PROCESS', payload: 'confirmed' });
      });
  };
  var onArtCollectionLoaded = function (ArtsCollectionList) {
    dispatch({ type: 'SET_ARTS_COLLECTION_LIST', payload: ArtsCollectionList });
  };
  useEffect(
    function () {
      onGalleryArtsRequest();
    },
    [artsGalleryPage]
  );
  var onGalleryArtsRequest = function () {
    getGalleryArts(artsGalleryPage)
      .then(onArtGalleryLoaded)
      .then(function () {
        return dispatch({ type: 'SET_PROCESS', payload: 'confirmed' });
      });
  };
  var onArtGalleryLoaded = function (ArtsGalleryList) {
    dispatch({ type: 'SET_ARTS_GALLERY_LIST', payload: ArtsGalleryList });
  };
  var compileNewPaginationNavigation = function (artsGalleryPage, artsGalleryAllPages) {
    if (!artsGalleryAllPages) return [];
    if (artsGalleryAllPages === 1) return [[1, true]];
    var paginationArray = [];
    if (artsGalleryAllPages < 8) {
      switch (artsGalleryAllPages) {
        case 2:
          paginationArray.push([1, 1 === artsGalleryPage]);
          paginationArray.push([2, 2 === artsGalleryPage]);
          break;
        case 3:
          for (var i = 1; i <= 3; i++) {
            paginationArray.push([i, i === artsGalleryPage]);
          }
          break;
        case 4:
          for (var i = 1; i <= 4; i++) {
            paginationArray.push([i, i === artsGalleryPage]);
          }
          break;
        case 5:
          for (var i = 1; i <= 5; i++) {
            paginationArray.push([i, i === artsGalleryPage]);
          }
          break;
        case 6:
          for (var i = 1; i <= 6; i++) {
            paginationArray.push([i, i === artsGalleryPage]);
          }
          break;
        case 7:
          for (var i = 1; i <= 7; i++) {
            paginationArray.push([i, i === artsGalleryPage]);
          }
          break;
        default:
          break;
      }
    } else {
      if (artsGalleryPage < 5) {
        paginationArray.push([1, 1 === artsGalleryPage]);
        paginationArray.push([2, 2 === artsGalleryPage]);
        paginationArray.push([3, 3 === artsGalleryPage]);
        paginationArray.push([4, 4 === artsGalleryPage]);
        paginationArray.push([5, false]);
        paginationArray.push(['...', false]);
        paginationArray.push([artsGalleryAllPages, false]);
      } else if (artsGalleryPage > artsGalleryAllPages - 4) {
        paginationArray.push([1, false]);
        paginationArray.push(['...', false]);
        paginationArray.push([artsGalleryAllPages - 4, false]);
        paginationArray.push([
          artsGalleryAllPages - 3,
          artsGalleryAllPages - 3 === artsGalleryPage,
        ]);
        paginationArray.push([
          artsGalleryAllPages - 2,
          artsGalleryAllPages - 2 === artsGalleryPage,
        ]);
        paginationArray.push([
          artsGalleryAllPages - 1,
          artsGalleryAllPages - 1 === artsGalleryPage,
        ]);
        paginationArray.push([artsGalleryAllPages, artsGalleryAllPages === artsGalleryPage]);
      } else {
        paginationArray.push([1, false]);
        paginationArray.push(['...', false]);
        paginationArray.push([artsGalleryPage - 1, false]);
        paginationArray.push([artsGalleryPage, true]);
        paginationArray.push([artsGalleryPage + 1, false]);
        paginationArray.push(['...', false]);
        paginationArray.push([artsGalleryAllPages, false]);
      }
    }
    if (artsGalleryPage === 1) {
      paginationArray.push(['>', false]);
    } else if (artsGalleryPage === artsGalleryAllPages) {
      paginationArray.unshift(['<', false]);
    } else {
      paginationArray.unshift(['<', false]);
      paginationArray.push(['>', false]);
    }
    return paginationArray;
  };
  var onPaginationClick = function (event) {
    var targetElement = event.target;
    if (targetElement.tagName === 'BUTTON') {
      console.log(targetElement.textContent);
      if (targetElement.textContent === '>') {
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: artsGalleryPage + 1 });
      } else if (targetElement.textContent === '<') {
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: artsGalleryPage - 1 });
      } else {
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: Number(targetElement.textContent) });
      }
    }
  };
  return _jsxs(Wrapper, {
    children: [
      _jsx(MainPageTitle, {}),
      _jsx(MainPageSearchBar, {}),
      _jsx(MainPageGallerySubTitle, {}),
      _jsx(MainPageGalleryTitle, {}),
      _jsx(MainPageSectionGallery, { artsGalleryList: galleryArtsList }),
      _jsx(MainPageSectionGalleryNavigation, {
        paginationClicked: onPaginationClick,
        paginationArray: compileNewPaginationNavigation(artsGalleryPage, artsGalleryAllPages),
      }),
      _jsx(MainPageCollectionSubtitle, {}),
      _jsx(MainPageCollectionTitle, {}),
      _jsx(MainPageArtCollection, {}),
    ],
  });
};
export default MainPage;
var templateObject_1;

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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
import useArtService from './../services/ArtService';
import ArtCollection from '../components/artCollection/ArtCollection.js';
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
  // @ts-ignore
} from './styled.js';
var Wrapper = styled.main(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 1400px) {\n    width: 100%;\n  }\n',
      ],
      [
        '\n  width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 1400px) {\n    width: 100%;\n  }\n',
      ]
    ))
);
var MainPage = function () {
  var _a = useArtService(),
    getArtTitlesByQuery = _a.getArtTitlesByQuery,
    getGalleryArts = _a.getGalleryArts,
    getCollectionArts = _a.getCollectionArts;
  var dispatch = useDispatch();
  var _b = useState(true),
    searchingMode = _b[0],
    setSearchingMode = _b[1];
  var _c = useState([]),
    searchResults = _c[0],
    setSearchResults = _c[1];
  var _d = useState(-1),
    selectedResultIndex = _d[0],
    setSelectedResultIndex = _d[1];
  // @ts-ignore
  var artsGallerySearch = useSelector(function (state) {
    return state.artsGallerySearch;
  });
  // @ts-ignore
  var artsGallerySortOption = useSelector(function (state) {
    return state.artsGallerySortOption;
  });
  // @ts-ignore
  var galleryArtsList = useSelector(function (state) {
    return state.artsGalleryList;
  });
  // @ts-ignore
  var artsGalleryListProcess = useSelector(function (state) {
    return state.artsGalleryListProcess;
  });
  // @ts-ignore
  var artsGalleryPage = useSelector(function (state) {
    return state.artsGalleryPage;
  });
  // @ts-ignore
  var artsGalleryAllPages = useSelector(function (state) {
    return state.artsGalleryAllPages;
  });
  // @ts-ignore
  var artsCollectionListProcess = useSelector(function (state) {
    return state.artsCollectionListProcess;
  });
  // @ts-ignore
  var artsCollectionList = useSelector(function (state) {
    return state.artsCollectionList;
  });
  useEffect(function () {
    dispatch({ type: 'SET_ASIDE_MODE', payload: false });
    onCollectionArtsRequest();
  }, []);
  var onCollectionArtsRequest = function () {
    getCollectionArts().then(onArtCollectionLoaded);
  };
  var onArtCollectionLoaded = function (ArtsCollectionList) {
    dispatch({ type: 'SET_ARTS_COLLECTION_LIST', payload: ArtsCollectionList });
    dispatch({ type: 'SET_ARTS_COLLECTION_LIST_PROCESS', payload: 'confirmed' });
  };
  useEffect(
    function () {
      onGalleryArtsRequest();
    },
    [artsGalleryPage]
  );
  var onGalleryArtsRequest = function () {
    getGalleryArts(artsGalleryPage, artsGallerySearch, artsGallerySortOption).then(
      onArtGalleryLoaded
    );
  };
  var onGalleryArtsSearchRequest = function (searchInput, sortOption) {
    dispatch({ type: 'SET_ARTS_GALLERY_SEARCH', payload: searchInput });
    dispatch({ type: 'SET_ARTS_GALLERY_SORT_OPTION', payload: sortOption });
    dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: 0 });
    dispatch({ type: 'SET_ARTS_GALLERY_ALL_PAGES', payload: 0 });
    dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'loading' });
  };
  var onArtGalleryLoaded = function (ArtsGalleryList) {
    dispatch({ type: 'SET_ARTS_GALLERY_LIST', payload: ArtsGalleryList });
    dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'confirmed' });
  };
  var debouncedSearch = function (query) {
    return __awaiter(void 0, void 0, void 0, function () {
      var results;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, getArtTitlesByQuery(query)];
          case 1:
            results = _a.sent();
            setSelectedResultIndex(-1);
            // @ts-ignore
            setSearchResults(results);
            return [2 /*return*/];
        }
      });
    });
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
      if (targetElement.textContent === '>') {
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: artsGalleryPage + 1 });
        dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'loading' });
      } else if (targetElement.textContent === '<') {
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: artsGalleryPage - 1 });
        dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'loading' });
      } else {
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: Number(targetElement.textContent) });
        dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'loading' });
      }
    }
  };
  return _jsxs(Wrapper, {
    children: [
      _jsx(MainPageTitle, {}),
      _jsx(ErrorBoundary, {
        children: _jsx(MainPageSearchBar, {
          searchingMode: searchingMode,
          setSearchingMode: setSearchingMode,
          searchResults: searchResults,
          setSearchResults: setSearchResults,
          selectedResultIndex: selectedResultIndex,
          setSelectedResultIndex: setSelectedResultIndex,
          debouncedSearch: debouncedSearch,
          artsGallerySearch: artsGallerySearch,
          artsGallerySortOption: artsGallerySortOption,
          onSubmitForm: onGalleryArtsSearchRequest,
        }),
      }),
      _jsx(MainPageGallerySubTitle, {}),
      _jsx(MainPageGalleryTitle, {}),
      _jsx(ErrorBoundary, {
        children: _jsx(MainPageSectionGallery, {
          process: artsGalleryListProcess,
          data: galleryArtsList,
        }),
      }),
      _jsx(ErrorBoundary, {
        children: _jsx(MainPageSectionGalleryNavigation, {
          paginationClicked: onPaginationClick,
          paginationArray: compileNewPaginationNavigation(artsGalleryPage, artsGalleryAllPages),
        }),
      }),
      _jsx(MainPageCollectionSubtitle, {}),
      _jsx(MainPageCollectionTitle, {}),
      _jsx(ErrorBoundary, {
        children: _jsx(ArtCollection, {
          itemsNumber: 9,
          // @ts-ignore
          process: artsCollectionListProcess,
          artsList: artsCollectionList,
        }),
      }),
    ],
  });
};
export default MainPage;
var templateObject_1;

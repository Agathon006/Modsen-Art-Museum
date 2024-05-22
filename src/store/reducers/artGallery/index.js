var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import { ActionTypes } from '../../actions/artGallery/index.js';
var initialState = {
  artsGallerySearch: '',
  artsGallerySortOption: 'default',
  artsGalleryList: [],
  artsGalleryListProcess: 'loading',
  artsGalleryPage: 0,
  artsGalleryAllPages: 0,
};
export var artsGalleryReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }
  switch (action.type) {
    case ActionTypes.SET_ARTS_GALLERY_SEARCH:
      return __assign(__assign({}, state), { artsGallerySearch: action.payload });
    case ActionTypes.SET_ARTS_GALLERY_SORT_OPTION:
      return __assign(__assign({}, state), { artsGallerySortOption: action.payload });
    case ActionTypes.SET_ARTS_GALLERY_LIST:
      return __assign(__assign({}, state), { artsGalleryList: action.payload });
    case ActionTypes.SET_ARTS_GALLERY_LIST_PROCESS:
      return __assign(__assign({}, state), { artsGalleryListProcess: action.payload });
    case ActionTypes.SET_ARTS_GALLERY_PAGE:
      return __assign(__assign({}, state), { artsGalleryPage: action.payload });
    case ActionTypes.SET_ARTS_GALLERY_ALL_PAGES:
      return __assign(__assign({}, state), { artsGalleryAllPages: action.payload });
    default:
      return state;
  }
};

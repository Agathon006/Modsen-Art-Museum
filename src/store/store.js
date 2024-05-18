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
import { createStore } from 'redux';
var initialState = {
  artsGalleryList: [],
  artsGalleryListProcess: 'loading',
  artsGalleryPage: 0,
  artsGalleryAllPages: 0,
  artsCollectionList: [],
};
var reducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }
  switch (action.type) {
    case 'SET_ARTS_GALLERY_LIST':
      return __assign(__assign({}, state), { artsGalleryList: action.payload });
    case 'SET_ARTS_GALLERY_LIST_PROCESS':
      return __assign(__assign({}, state), { artsGalleryListProcess: action.payload });
    case 'SET_ARTS_GALLERY_PAGE':
      return __assign(__assign({}, state), { artsGalleryPage: action.payload });
    case 'SET_ARTS_GALLERY_ALL_PAGES':
      return __assign(__assign({}, state), { artsGalleryAllPages: action.payload });
    case 'SET_ARTS_COLLECTION_LIST':
      return __assign(__assign({}, state), { artsCollectionList: action.payload });
    default:
      return state;
  }
};
var store = createStore(reducer);
export default store;

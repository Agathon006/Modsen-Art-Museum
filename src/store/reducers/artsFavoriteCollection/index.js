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
var _a;
import { ActionTypes } from '../../actions/artsFavoriteCollection/index.js';
var initialState = {
  artsFavoriteCollectionList: [],
  artsFavoriteCollectionListProcess: 'loading',
  favoriteArtsIdList: JSON.parse(
    (_a = localStorage.getItem('favoriteArtsIdList')) !== null && _a !== void 0 ? _a : '[]'
  ),
};
export var favoriteReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }
  switch (action.type) {
    case ActionTypes.SET_FAVORITE_COLLECTION_LIST:
      return __assign(__assign({}, state), { artsFavoriteCollectionList: action.payload });
    case ActionTypes.SET_FAVORITE_COLLECTION_LIST_PROCESS:
      return __assign(__assign({}, state), { artsFavoriteCollectionListProcess: action.payload });
    case ActionTypes.SET_FAVORITE_ARTS_ID_LIST:
      return __assign(__assign({}, state), { favoriteArtsIdList: action.payload });
    default:
      return state;
  }
};

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
import { ActionTypes } from '../../actions/artsCollection/index.js';
var initialState = {
  artsCollectionList: [],
  artsCollectionListProcess: 'loading',
};
export var artsCollectionReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }
  switch (action.type) {
    case ActionTypes.SET_ARTS_COLLECTION_LIST:
      return __assign(__assign({}, state), { artsCollectionList: action.payload });
    case ActionTypes.SET_ARTS_COLLECTION_LIST_PROCESS:
      return __assign(__assign({}, state), { artsCollectionListProcess: action.payload });
    default:
      return state;
  }
};

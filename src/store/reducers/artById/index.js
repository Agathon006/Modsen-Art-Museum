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
import { ActionTypes } from '../../actions/artById/index.js';
var initialState = {
  artByID: {},
  artByIDProcess: 'confirmed',
};
export var artByIdReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }
  switch (action.type) {
    case ActionTypes.SET_ART_BY_ID:
      return __assign(__assign({}, state), { artByID: action.payload });
    case ActionTypes.SET_ART_BY_ID_PROCESS:
      return __assign(__assign({}, state), { artByIDProcess: action.payload });
    default:
      return state;
  }
};

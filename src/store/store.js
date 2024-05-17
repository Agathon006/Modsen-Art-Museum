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
  process: '',
  artsList: [],
};
var reducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }
  switch (action.type) {
    case 'SET_PROCESS':
      return __assign(__assign({}, state), { process: action.payload });
    case 'SET_ARTS_LIST':
      return __assign(__assign({}, state), { artsList: action.payload });
    default:
      return state;
  }
};
var store = createStore(reducer);
export default store;

export var ActionTypes;
(function (ActionTypes) {
  ActionTypes['SET_ASIDE_MODE'] = 'SET_ASIDE_MODE';
})(ActionTypes || (ActionTypes = {}));
export var setAsideMode = function (payload) {
  return {
    type: ActionTypes.SET_ASIDE_MODE,
    payload: payload,
  };
};

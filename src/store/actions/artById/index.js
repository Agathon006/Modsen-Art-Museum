export var ActionTypes;
(function (ActionTypes) {
  ActionTypes['SET_ART_BY_ID'] = 'SET_ART_BY_ID';
  ActionTypes['SET_ART_BY_ID_PROCESS'] = 'SET_ART_BY_ID_PROCESS';
})(ActionTypes || (ActionTypes = {}));
export var setArtById = function (payload) {
  return {
    type: ActionTypes.SET_ART_BY_ID,
    payload: payload,
  };
};
export var setArtByIdProcess = function (payload) {
  return {
    type: ActionTypes.SET_ART_BY_ID_PROCESS,
    payload: payload,
  };
};

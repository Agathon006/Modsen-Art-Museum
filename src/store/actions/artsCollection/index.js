export var ActionTypes;
(function (ActionTypes) {
  ActionTypes['SET_ARTS_COLLECTION_LIST'] = 'SET_ARTS_COLLECTION_LIST';
  ActionTypes['SET_ARTS_COLLECTION_LIST_PROCESS'] = 'SET_ARTS_COLLECTION_LIST_PROCESS';
})(ActionTypes || (ActionTypes = {}));
export var setArtsCollectionList = function (payload) {
  return {
    type: ActionTypes.SET_ARTS_COLLECTION_LIST,
    payload: payload,
  };
};
export var setArtsCollectionListProcess = function (payload) {
  return {
    type: ActionTypes.SET_ARTS_COLLECTION_LIST_PROCESS,
    payload: payload,
  };
};

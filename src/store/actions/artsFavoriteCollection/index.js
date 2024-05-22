export var ActionTypes;
(function (ActionTypes) {
  ActionTypes['SET_FAVORITE_COLLECTION_LIST'] = 'SET_FAVORITE_COLLECTION_LIST';
  ActionTypes['SET_FAVORITE_COLLECTION_LIST_PROCESS'] = 'SET_FAVORITE_COLLECTION_LIST_PROCESS';
  ActionTypes['SET_FAVORITE_ARTS_ID_LIST'] = 'SET_FAVORITE_ARTS_ID_LIST';
})(ActionTypes || (ActionTypes = {}));
export var setFavoriteCollectionList = function (payload) {
  return {
    type: ActionTypes.SET_FAVORITE_COLLECTION_LIST,
    payload: payload,
  };
};
export var setFavoriteCollectionListProcess = function (payload) {
  return {
    type: ActionTypes.SET_FAVORITE_COLLECTION_LIST_PROCESS,
    payload: payload,
  };
};
export var setFavoriteArtsIdList = function (payload) {
  return {
    type: ActionTypes.SET_FAVORITE_ARTS_ID_LIST,
    payload: payload,
  };
};

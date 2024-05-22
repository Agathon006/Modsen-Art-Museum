export var ActionTypes;
(function (ActionTypes) {
  ActionTypes['SET_ARTS_GALLERY_SEARCH'] = 'SET_ARTS_GALLERY_SEARCH';
  ActionTypes['SET_ARTS_GALLERY_SORT_OPTION'] = 'SET_ARTS_GALLERY_SORT_OPTION';
  ActionTypes['SET_ARTS_GALLERY_LIST'] = 'SET_ARTS_GALLERY_LIST';
  ActionTypes['SET_ARTS_GALLERY_LIST_PROCESS'] = 'SET_ARTS_GALLERY_LIST_PROCESS';
  ActionTypes['SET_ARTS_GALLERY_PAGE'] = 'SET_ARTS_GALLERY_PAGE';
  ActionTypes['SET_ARTS_GALLERY_ALL_PAGES'] = 'SET_ARTS_GALLERY_ALL_PAGES';
})(ActionTypes || (ActionTypes = {}));
export var setArtsGallerySearch = function (payload) {
  return {
    type: ActionTypes.SET_ARTS_GALLERY_SEARCH,
    payload: payload,
  };
};
export var setArtsGallerySortOption = function (payload) {
  return {
    type: ActionTypes.SET_ARTS_GALLERY_SORT_OPTION,
    payload: payload,
  };
};
export var setArtsGalleryList = function (payload) {
  return {
    type: ActionTypes.SET_ARTS_GALLERY_LIST,
    payload: payload,
  };
};
export var setArtsGalleryListProcess = function (payload) {
  return {
    type: ActionTypes.SET_ARTS_GALLERY_LIST_PROCESS,
    payload: payload,
  };
};
export var setArtsGalleryPage = function (payload) {
  return {
    type: ActionTypes.SET_ARTS_GALLERY_PAGE,
    payload: payload,
  };
};
export var setArtsGalleryAllPages = function (payload) {
  return {
    type: ActionTypes.SET_ARTS_GALLERY_ALL_PAGES,
    payload: payload,
  };
};

//@ts-ignore
export var changeInStorage = function (dispatch, id) {
  var _a;
  var favoriteArtsIdList = JSON.parse(
    (_a = localStorage.getItem('favoriteArtsIdList')) !== null && _a !== void 0 ? _a : '[]'
  );
  var existingIndex = favoriteArtsIdList.indexOf(id);
  if (existingIndex !== -1) {
    favoriteArtsIdList.splice(existingIndex, 1);
    dispatch({ type: 'SET_FAVORITE_ARTS_ID_LIST', payload: favoriteArtsIdList });
    localStorage.setItem('favoriteArtsIdList', JSON.stringify(favoriteArtsIdList));
    return false;
  } else {
    favoriteArtsIdList.push(id);
    dispatch({ type: 'SET_FAVORITE_ARTS_ID_LIST', payload: favoriteArtsIdList });
    localStorage.setItem('favoriteArtsIdList', JSON.stringify(favoriteArtsIdList));
    return true;
  }
};

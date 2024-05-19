// @ts-ignore
export var changeInStorage = function (dispatch, id) {
  // @ts-ignore
  var favoriteArtsIdList = JSON.parse(localStorage.getItem('favoriteArtsIdList')) || [];
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

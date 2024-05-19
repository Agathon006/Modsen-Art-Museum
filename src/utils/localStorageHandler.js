// @ts-ignore
export var changeInStorage = function (dispatch, id) {
  // @ts-ignore
  var favoriteArts = JSON.parse(localStorage.getItem('favoriteArts')) || [];
  var existingIndex = favoriteArts.indexOf(id);
  if (existingIndex !== -1) {
    favoriteArts.splice(existingIndex, 1);
    dispatch({ type: 'SET_FAVORITE_ARTS', payload: favoriteArts });
    localStorage.setItem('favoriteArts', JSON.stringify(favoriteArts));
    return false;
  } else {
    favoriteArts.push(id);
    dispatch({ type: 'SET_FAVORITE_ARTS', payload: favoriteArts });
    localStorage.setItem('favoriteArts', JSON.stringify(favoriteArts));
    return true;
  }
};

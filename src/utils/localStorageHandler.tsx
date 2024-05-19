// @ts-ignore
export const changeInStorage = (dispatch, id: number) => {
  // @ts-ignore
  let favoriteArts = JSON.parse(localStorage.getItem('favoriteArts')) || [];

  const existingIndex = favoriteArts.indexOf(id);

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

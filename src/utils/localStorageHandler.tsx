// @ts-ignore
export const changeInStorage = (dispatch, id: number) => {
  // @ts-ignore
  let favoriteArtsIdList = JSON.parse(localStorage.getItem('favoriteArtsIdList')) || [];

  const existingIndex = favoriteArtsIdList.indexOf(id);

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

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// @ts-ignore
import StyledArtCollectionItem from './styled.js';

const ArtCollectionItem = ({ artInfo }: any) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const favoriteArtsIdList = useSelector(state => state.favorite.favoriteArtsIdList);
  // @ts-ignore
  let isFavorite = favoriteArtsIdList.includes(artInfo.id);

  return <StyledArtCollectionItem dispatch={dispatch} isFavorite={isFavorite} artInfo={artInfo} />;
};

export default ArtCollectionItem;

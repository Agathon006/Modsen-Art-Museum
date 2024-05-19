import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// @ts-ignore
import StyledArtCollectionItem from './styled.js';

const ArtCollectionItem = ({ artInfo }: any) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const favoriteArts = useSelector(state => state.favoriteArts);
  // @ts-ignore
  let isFavorite = favoriteArts.includes(artInfo.id);

  return <StyledArtCollectionItem dispatch={dispatch} isFavorite={isFavorite} artInfo={artInfo} />;
};

export default ArtCollectionItem;

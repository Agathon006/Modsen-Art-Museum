import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../store/reducers/index.js';

// @ts-ignore
import StyledArtCollectionItem from './styled.js';

const ArtCollectionItem = ({ artInfo }: any) => {
  const dispatch = useDispatch();
  const favoriteArtsIdList = useSelector((state: RootState) => state.favorite.favoriteArtsIdList);
  let isFavorite = favoriteArtsIdList.includes(artInfo.id);

  return <StyledArtCollectionItem dispatch={dispatch} isFavorite={isFavorite} artInfo={artInfo} />;
};

export default ArtCollectionItem;

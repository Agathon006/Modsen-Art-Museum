import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IArtInfo } from '../../../services/ArtService';
import { IRootState } from '../../../store/reducers/index.js';

// @ts-ignore
import StyledArtCollectionItem from './styled.js';

const ArtCollectionItem = ({ artInfo }: { artInfo: IArtInfo }) => {
  const dispatch = useDispatch();
  const favoriteArtsIdList = useSelector((state: IRootState) => state.favorite.favoriteArtsIdList);
  let isFavorite = false;
  if (artInfo.id) {
    isFavorite = favoriteArtsIdList.includes(artInfo.id);
  }
  return <StyledArtCollectionItem dispatch={dispatch} isFavorite={isFavorite} artInfo={artInfo} />;
};

export default ArtCollectionItem;

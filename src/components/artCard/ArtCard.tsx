import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IRootState } from '@store/reducers/index.js';
import { IArtInfo } from '@services/ArtService';

// @ts-ignore
import StyledArtCard from './styled.js';

const ArtCard = ({ artInfo }: { artInfo: IArtInfo }) => {
  const dispatch = useDispatch();
  const favoriteArtsIdList = useSelector((state: IRootState) => state.favorite.favoriteArtsIdList);

  let isFavorite = false;
  if (artInfo.id) {
    isFavorite = favoriteArtsIdList.includes(artInfo.id);
  }

  return <StyledArtCard dispatch={dispatch} isFavorite={isFavorite} artInfo={artInfo} />;
};

export default ArtCard;

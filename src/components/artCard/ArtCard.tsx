import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/reducers/index.js';

// @ts-ignore
import StyledArtCard from './styled.js';

const ArtCard = (props: any) => {
  const dispatch = useDispatch();
  const favoriteArtsIdList = useSelector((state: RootState) => state.favorite.favoriteArtsIdList);
  let isFavorite = favoriteArtsIdList.includes(props.artInfo.id);

  return <StyledArtCard dispatch={dispatch} isFavorite={isFavorite} artInfo={props.artInfo} />;
};

export default ArtCard;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IRootState } from '../../store/reducers/index.js';

// @ts-ignore
import StyledArtCard from './styled.js';

const ArtCard = (props: any) => {
  console.log(props);
  const dispatch = useDispatch();
  const favoriteArtsIdList = useSelector((state: IRootState) => state.favorite.favoriteArtsIdList);
  let isFavorite = favoriteArtsIdList.includes(props.artInfo.id);

  return <StyledArtCard dispatch={dispatch} isFavorite={isFavorite} artInfo={props.artInfo} />;
};

export default ArtCard;

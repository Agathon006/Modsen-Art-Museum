import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// @ts-ignore
import StyledArtCard from './styled.js';

// @ts-ignore
const ArtCard = props => {
  const dispatch = useDispatch();
  // @ts-ignore
  const favoriteArtsIdList = useSelector(state => state.favorite.favoriteArtsIdList);
  // @ts-ignore
  let isFavorite = favoriteArtsIdList.includes(props.artInfo.id);

  return <StyledArtCard dispatch={dispatch} isFavorite={isFavorite} artInfo={props.artInfo} />;
};

export default ArtCard;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IArtInfo } from '../../services/ArtService';

interface PropsWithArtInfo {
  artInfo: IArtInfo[];
}

// @ts-ignore
import StyledArtCard from './styled.js';

const ArtCard = (props: PropsWithArtInfo) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const favoriteArtsIdList = useSelector(state => state.favoriteArtsIdList);
  // @ts-ignore
  let isFavorite = favoriteArtsIdList.includes(props.artInfo.id);

  return <StyledArtCard dispatch={dispatch} isFavorite={isFavorite} artInfo={props.artInfo} />;
};

export default ArtCard;

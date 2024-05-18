import React from 'react';
import { useSelector } from 'react-redux';

import { IArtInfo } from '../../services/ArtService';

interface PropsWithArtInfo {
  artInfo: IArtInfo[];
}

// @ts-ignore
import StyledArtCard from './styled.js';

const ArtCard = (props: PropsWithArtInfo) => {
  return <StyledArtCard artInfo={props.artInfo} />;
};

export default ArtCard;

import React from 'react';

// @ts-ignore
import StyledArtCollectionItem from './styled.js';

const ArtCollectionItem = ({ artInfo }: any) => {
  return <StyledArtCollectionItem artInfo={artInfo} />;
};

export default ArtCollectionItem;

import React from 'react';
import { useSelector } from 'react-redux';

// @ts-ignore
import StyledArtCollectionItem from './styled.js';

const ArtCollectionItem = ({ artInfo }: any) => {
  // @ts-ignore
  const artsCollectionListProcess = useSelector(state => state.artsCollectionListProcess);

  return <StyledArtCollectionItem process={artsCollectionListProcess} artInfo={artInfo} />;
};

export default ArtCollectionItem;

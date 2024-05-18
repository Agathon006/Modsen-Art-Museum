import React from 'react';
import { useSelector } from 'react-redux';

// @ts-ignore
import StyledArtCollection from './styled.js';

const ArtCollection = () => {
  // @ts-ignore
  const artsCollectionListProcess = useSelector(state => state.artsCollectionListProcess);
  // @ts-ignore
  const artsCollectionList = useSelector(state => state.artsCollectionList);

  return (
    <StyledArtCollection
      process={artsCollectionListProcess}
      artsCollectionArray={artsCollectionList}
    />
  );
};

export default ArtCollection;

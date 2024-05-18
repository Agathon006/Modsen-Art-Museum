import React from 'react';

// @ts-ignore
import StyledArtCollection from './styled.js';

// @ts-ignore
const ArtCollection = ({ itemsNumber, process, artsList }) => {
  return (
    <StyledArtCollection
      itemsNumber={itemsNumber}
      process={process}
      artsCollectionArray={artsList}
    />
  );
};

export default ArtCollection;

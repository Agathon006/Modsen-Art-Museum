import React from 'react';

// @ts-ignore
import StyledArtCollection from './styled.js';

interface ArtCollectionProps {
  itemsNumber: number;
  process: 'loading' | 'error' | 'confirmed';
  artsList: any[];
}

const ArtCollection = ({ itemsNumber, process, artsList }: ArtCollectionProps) => {
  return (
    <StyledArtCollection
      itemsNumber={itemsNumber}
      process={process}
      artsCollectionArray={artsList}
    />
  );
};

export default ArtCollection;

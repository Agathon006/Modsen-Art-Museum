import React from 'react';

// @ts-ignore
import StyledArtCollection from './styled.js';

interface IArtCollectionProps {
  itemsNumber: number;
  process: 'loading' | 'error' | 'confirmed';
  artsList: any[];
}

const ArtCollection = ({ itemsNumber, process, artsList }: IArtCollectionProps) => {
  return (
    <StyledArtCollection
      itemsNumber={itemsNumber}
      process={process}
      artsCollectionArray={artsList}
    />
  );
};

export default ArtCollection;

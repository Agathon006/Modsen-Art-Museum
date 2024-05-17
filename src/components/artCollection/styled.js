import React from 'react';
import styled from 'styled-components';

import ArtCollectionItem from './artCollectionItem/artCollectionItem.js';

const Wrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

function StyledArtCollection() {
  return (
    <Wrapper>
      <ArtCollectionItem />
      <ArtCollectionItem />
      <ArtCollectionItem />
      <ArtCollectionItem />
      <ArtCollectionItem />
      <ArtCollectionItem />
      <ArtCollectionItem />
      <ArtCollectionItem />
      <ArtCollectionItem />
    </Wrapper>
  );
}

export default StyledArtCollection;

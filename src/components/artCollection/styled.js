import React from 'react';
import styled from 'styled-components';

import ArtCollectionItem from './artCollectionItem/artCollectionItem.js';

const Wrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

function StyledArtCollection({ artsCollectionArray }) {
  let content = null;
  if (artsCollectionArray.length) {
    content = artsCollectionArray.map((art, index) => {
      return <ArtCollectionItem key={index} artInfo={art} />;
    });
  }
  return <Wrapper>{content}</Wrapper>;
}

export default StyledArtCollection;

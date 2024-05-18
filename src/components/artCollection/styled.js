import React from 'react';
import styled from 'styled-components';

import setContent from '../../utils/setContent.js';

import ArtCollectionItem from './artCollectionItem/artCollectionItem.js';

const Wrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const SkeletonWrapper = styled.div`
  width: 416px;
  height: 130px;
`;

function StyledArtCollection({ itemsNumber, process, artsCollectionArray }) {
  const renderArt = i => {
    if (artsCollectionArray[i]) {
      return <ArtCollectionItem artInfo={artsCollectionArray[i]} />;
    } else {
      return null;
    }
  };

  let contentArray = [];

  for (let i = 0; i < itemsNumber; i++) {
    contentArray.push(
      <SkeletonWrapper key={i}>{setContent(process, () => renderArt(i))}</SkeletonWrapper>
    );
  }

  return <Wrapper>{contentArray}</Wrapper>;
}

export default StyledArtCollection;

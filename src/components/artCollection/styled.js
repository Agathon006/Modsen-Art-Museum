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

function StyledArtCollection({ process, artsCollectionArray }) {
  const renderArt = i => {
    if (artsCollectionArray[i]) {
      return <ArtCollectionItem artInfo={artsCollectionArray[i]} />;
    } else {
      return null;
    }
  };

  let content = (
    <>
      <SkeletonWrapper>{setContent(process, () => renderArt(0))}</SkeletonWrapper>
      <SkeletonWrapper>{setContent(process, () => renderArt(1))}</SkeletonWrapper>
      <SkeletonWrapper>{setContent(process, () => renderArt(2))}</SkeletonWrapper>
      <SkeletonWrapper>{setContent(process, () => renderArt(3))}</SkeletonWrapper>
      <SkeletonWrapper>{setContent(process, () => renderArt(4))}</SkeletonWrapper>
      <SkeletonWrapper>{setContent(process, () => renderArt(5))}</SkeletonWrapper>
      <SkeletonWrapper>{setContent(process, () => renderArt(6))}</SkeletonWrapper>
      <SkeletonWrapper>{setContent(process, () => renderArt(7))}</SkeletonWrapper>
      <SkeletonWrapper>{setContent(process, () => renderArt(8))}</SkeletonWrapper>
    </>
  );

  return <Wrapper>{content}</Wrapper>;
}

export default StyledArtCollection;

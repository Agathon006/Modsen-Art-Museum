import React, { Fragment } from 'react';
import styled from 'styled-components';

import setContent from '@utils/setContent.js';
import ArtCollectionItem from '@components/artCollection/artCollectionItem/artCollectionItem.js';

const Wrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SkeletonWrapper = styled.div`
  width: 416px;
  height: 130px;

  @media (max-width: 425px) {
    width: 381px;
  }
`;

const GalleryPlaceholderWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
`;

const GalleryPlaceholder = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
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

  if (process === 'loading') {
    for (let i = 0; i < itemsNumber; i++) {
      contentArray.push(
        <SkeletonWrapper key={i}>{setContent(process, () => renderArt(i))}</SkeletonWrapper>
      );
    }
  } else {
    for (let i = 0; i < artsCollectionArray.length; i++) {
      contentArray.push(<Fragment key={i}>{setContent(process, () => renderArt(i))}</Fragment>);
    }
  }

  let noArtsPlaceholder = (
    <GalleryPlaceholderWrapper>
      <GalleryPlaceholder>You don't have favorites arts yet.</GalleryPlaceholder>
    </GalleryPlaceholderWrapper>
  );

  return !artsCollectionArray.length && process !== 'loading' ? (
    noArtsPlaceholder
  ) : (
    <Wrapper>{contentArray}</Wrapper>
  );
}

export default StyledArtCollection;

import React from 'react';
import styled from 'styled-components';

import Bookmark from '../../../assets/bookmark.svg';

const Wrapper = styled.figure`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 13px;
  width: 416px;
  height: 130px;
  background: #ffffff;
  border: 1px solid #f0f1f1;
`;
//figcaption
const PhotoWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: blue;
`;

const DescriptionTextWrapper = styled.div`
  width: 219px;
  display: flex;
  flex-direction: column;
`;

const DescriptionTextArtName = styled.span`
  margin-top: 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #393939;
`;

const DescriptionTextAuthorName = styled.span`
  margin-top: 1px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #e0a449;
`;

const DescriptionTextVisibilityStatus = styled.span`
  margin-top: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #393939;
`;

const DescriptionTextFavoriteButton = styled.button`
  width: 59px;
  height: 59px;
  background-color: #f9f9f9;
  border-radius: 100px;
`;

function StyledArtCollectionItem() {
  return (
    <Wrapper>
      <PhotoWrapper></PhotoWrapper>
      <DescriptionTextWrapper>
        <DescriptionTextArtName>Charles V, bust length...</DescriptionTextArtName>
        <DescriptionTextAuthorName>Giovanni Britto</DescriptionTextAuthorName>
        <DescriptionTextVisibilityStatus>Public</DescriptionTextVisibilityStatus>
      </DescriptionTextWrapper>
      <DescriptionTextFavoriteButton>
        <Bookmark />
      </DescriptionTextFavoriteButton>
    </Wrapper>
  );
}

export default StyledArtCollectionItem;

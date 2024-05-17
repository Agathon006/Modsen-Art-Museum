import React from 'react';
import styled from 'styled-components';

import PlaceholderArtImage from '../../../assets/placeholderArt.svg';
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

const PhotoWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const DescriptionTextWrapper = styled.div`
  width: 219px;
  display: flex;
  flex-direction: column;
`;

const DescriptionTextArtName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

function StyledArtCollectionItem(props) {
  const { title, artistName, isPublicDomain, imageUrl } = props.artInfo;
  return (
    <Wrapper>
      <PhotoWrapper>
        {imageUrl ? <Photo src={imageUrl} alt={title} /> : <PlaceholderArtImage />}
      </PhotoWrapper>
      <DescriptionTextWrapper>
        <DescriptionTextArtName>{title}</DescriptionTextArtName>
        <DescriptionTextAuthorName>{artistName}</DescriptionTextAuthorName>
        <DescriptionTextVisibilityStatus>
          {isPublicDomain ? 'public' : 'private'}
        </DescriptionTextVisibilityStatus>
      </DescriptionTextWrapper>
      <DescriptionTextFavoriteButton>
        <Bookmark />
      </DescriptionTextFavoriteButton>
    </Wrapper>
  );
}

export default StyledArtCollectionItem;

import React from 'react';
import styled from 'styled-components';

import Bookmark from '../../assets/bookmark.svg';
import PlaceholderArtImage from '../../assets/placeholderArt.svg';

const Wrapper = styled.figure`
  position: relative;
  width: 387px;
  height: 514px;
`;

const PhotoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 387px;
  height: 444px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
  border: 1px solid black;
  cursor: pointer;
`;

const Photo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Description = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 26px;
  width: 334px;
  height: 132px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 24px;
  background: #ffffff;
  border: 1px solid #f0f1f1;
`;

const DescriptionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 219px;
  height: 98px;
`;

const DescriptionTextArtName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 4px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #393939;
`;

const DescriptionTextAuthorName = styled.span`
  margin-top: 1px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #e0a449;
`;

const DescriptionTextVisibilityStatus = styled.span`
  margin-top: 8px;
  font-family: 'Lexend Deca';
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

function StyledArtCard({ artInfo }) {
  return (
    <Wrapper>
      <PhotoWrapper>
        {artInfo.imageUrl ? (
          <Photo src={artInfo.imageUrl} alt={artInfo.title} />
        ) : (
          <PlaceholderArtImage />
        )}
      </PhotoWrapper>
      <Description>
        <DescriptionTextWrapper>
          <DescriptionTextArtName>{artInfo.title}</DescriptionTextArtName>
          <DescriptionTextAuthorName>{artInfo.artistName}</DescriptionTextAuthorName>
          <DescriptionTextVisibilityStatus>
            {artInfo.isPublicDomain ? 'public' : 'private'}
          </DescriptionTextVisibilityStatus>
        </DescriptionTextWrapper>
        <DescriptionTextFavoriteButton>
          <Bookmark />
        </DescriptionTextFavoriteButton>
      </Description>
    </Wrapper>
  );
}

export default StyledArtCard;

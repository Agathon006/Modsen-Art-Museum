import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { changeInStorage } from '@utils/localStorageHandler';
import Bookmark from '@assets/bookmark.svg';
import PlaceholderArtImage from '@assets/placeholderArt.svg';

export const Wrapper = styled.figure`
  position: relative;
  width: 387px;
  height: 514px;

  @media (max-width: 425px) {
    width: 370px;
    height: 420px;
  }
`;

export const PhotoWrapper = styled.div`
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

  @media (max-width: 425px) {
    width: 370px;
    height: 363px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Description = styled.figcaption`
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

  @media (max-width: 425px) {
    left: 17px;
  }
`;

export const DescriptionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 219px;
  height: 98px;
`;

export const DescriptionTextArtName = styled.span`
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

export const DescriptionTextAuthorName = styled.span`
  margin-top: 1px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #e0a449;
`;

export const DescriptionTextVisibilityStatus = styled.span`
  margin-top: 8px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #393939;
`;

export const DescriptionTextFavoriteButton = styled.button`
  width: 59px;
  height: 59px;
  background-color: ${({ $favorite }) => ($favorite ? '#FBD7B24D' : '#f9f9f9')};
  border-radius: 100px;
`;

function StyledArtCard({ dispatch, isFavorite, artInfo }) {
  return (
    <Wrapper>
      <Link to={`/ ${artInfo.id} `}>
        <PhotoWrapper>
          {artInfo.imageUrl ? (
            <Photo src={artInfo.imageUrl} alt={artInfo.title} />
          ) : (
            <PlaceholderArtImage />
          )}
        </PhotoWrapper>
      </Link>
      <Description>
        <DescriptionTextWrapper>
          <DescriptionTextArtName>
            {artInfo.title ? artInfo.title : 'Unknown title'}
          </DescriptionTextArtName>
          <DescriptionTextAuthorName>
            {artInfo.artistName ? artInfo.artistName : 'Unknown artist'}
          </DescriptionTextAuthorName>
          <DescriptionTextVisibilityStatus>
            {artInfo.isPublicDomain ? 'public' : 'private'}
          </DescriptionTextVisibilityStatus>
        </DescriptionTextWrapper>
        <DescriptionTextFavoriteButton
          $favorite={isFavorite}
          onClick={() => changeInStorage(dispatch, artInfo.id)}
        >
          <Bookmark />
        </DescriptionTextFavoriteButton>
      </Description>
    </Wrapper>
  );
}

export default StyledArtCard;

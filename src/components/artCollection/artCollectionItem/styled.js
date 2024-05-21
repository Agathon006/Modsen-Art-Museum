import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { changeInStorage } from '../../../utils/localStorageHandler';
import PlaceholderArtImage from '../../../assets/placeholderArt.svg';
import Bookmark from '../../../assets/bookmark.svg';

const Wrapper = styled.figure`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px 13px;
  width: 416px;
  height: 130px;
  background: #ffffff;
  border: 1px solid #f0f1f1;

  @media (max-width: 425px) {
    width: 381px;
  }
`;

const PhotoWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
  cursor: pointer;
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

  @media (max-width: 425px) {
    width: 184px;
  }
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
  background-color: ${({ $favorite }) => ($favorite ? '#FBD7B24D' : '#f9f9f9')};
  border-radius: 100px;
`;

function StyledArtCollectionItem({ dispatch, isFavorite, artInfo }) {
  return (
    <Wrapper>
      <Link to={`/${artInfo.id}`}>
        <PhotoWrapper>
          {artInfo.imageUrl ? (
            <Photo src={artInfo.imageUrl} alt={artInfo.title} />
          ) : (
            <PlaceholderArtImage />
          )}
        </PhotoWrapper>
      </Link>
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
    </Wrapper>
  );
}

export default StyledArtCollectionItem;

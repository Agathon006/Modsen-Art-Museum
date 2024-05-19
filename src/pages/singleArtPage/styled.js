import React from 'react';
import styled from 'styled-components';

import Bookmark from '../../assets/bookmark.svg';
import PlaceholderArtImage from '../../assets/placeholderArt.svg';

const PhotoWrapper = styled.div`
  position: relative;
  width: 497px;
  height: 570px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
  border: 1px solid black;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PhotoFavoriteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 59px;
  height: 59px;
  background-color: #f9f9f9;
  border-radius: 100px;
`;

export const StyledPicture = () => {
  let artInfo = {
    imageUrl: '',
    title: '',
  };
  return (
    <PhotoWrapper>
      {artInfo.imageUrl ? (
        <Photo src={artInfo.imageUrl} alt={artInfo.title} />
      ) : (
        <PlaceholderArtImage />
      )}
      <PhotoFavoriteButton>
        <Bookmark />
      </PhotoFavoriteButton>
    </PhotoWrapper>
  );
};

const DescriptionWrapper = styled.section`
  width: 703px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #393939;
`;

const ArtistName = styled.h3`
  margin-top: 32px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #e0a449;
`;

const ArtDate = styled.p`
  margin-top: 16px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #393939;
`;

const OverviewWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const OverviewText = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #393939;
`;

const OverviewSpecialText = styled.span`
  color: #e0a449;
`;

export const StyledDescription = () => {
  return (
    <DescriptionWrapper>
      <div>
        <Title>Charles V, bust length, holding a sword, facing right</Title>
        <ArtistName>Giovanni Britto</ArtistName>
        <ArtDate>1535–45</ArtDate>
      </div>
      <div>
        <Title>Overview</Title>
        <OverviewWrapper>
          <OverviewText>
            <OverviewSpecialText>Artist nacionality: </OverviewSpecialText>German
          </OverviewText>
          <OverviewText>
            <OverviewSpecialText>Dimensions: Sheet: </OverviewSpecialText>
            {'19 3/8 × 13 11/16 in. (49.2 × 34.8 cm)'}
          </OverviewText>
          <OverviewText>
            <OverviewSpecialText>Credit Line: </OverviewSpecialText>Rogers Fund, 1917
          </OverviewText>
          <OverviewText>
            <OverviewSpecialText>Repository: </OverviewSpecialText>Metropolitan Museum of Art, New
            York, NY
          </OverviewText>
          <OverviewText>Public</OverviewText>
        </OverviewWrapper>
      </div>
    </DescriptionWrapper>
  );
};

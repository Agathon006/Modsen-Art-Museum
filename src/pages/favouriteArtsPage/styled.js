import React from 'react';
import styled from 'styled-components';

import BookmarkBig from '@assets/bookmark_big.svg';

const Title = styled.h1`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  text-transform: capitalize;
  color: #393939;
`;

const TitleSpecialWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
`;

const TitleSpecial = styled.span`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  text-transform: capitalize;
  color: #f17900;
`;

export const FavouriteArtsPageTitle = () => {
  return (
    <>
      <Title>Here are your</Title>
      <TitleSpecialWrapper>
        <BookmarkBig />
        <TitleSpecial>favorites</TitleSpecial>
      </TitleSpecialWrapper>
    </>
  );
};

const SectionSubtitle = styled.span`
  margin-top: 120px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #e0a449;
`;

export const FavouriteArtsPageCollectionSubTitle = () => {
  return <SectionSubtitle>Saved by you</SectionSubtitle>;
};

const SectionTitle = styled.span`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #393939;
`;

export const FavouriteArtsPageCollectionTitle = () => {
  return <SectionTitle>Your favorites list</SectionTitle>;
};

import React from 'react';
import styled from 'styled-components';

import ArtCard from '../components/artCard/ArtCard.js';
import ArtCollection from '../components/artCollection/ArtCollection.js';

import SearchIcon from './../assets/search.svg';

const Title = styled.h1`
  width: 684px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  text-transform: capitalize;
  color: #393939;
`;

const TitleSpecial = styled.span`
  color: #f17900;
`;

export const MainPageTitle = () => {
  return (
    <Title>
      let's find some <TitleSpecial>art</TitleSpecial> here!
    </Title>
  );
};

const SearchBarContainer = styled.div`
  position: relative;
  margin-top: 72px;
`;

const SearchBarInput = styled.input`
  width: 762px;
  padding: 23.5px 16px;
  background: rgba(57, 57, 57, 0.05);
  border-radius: 16px;
  border: none; /* Remove default input border */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  color: rgba(57, 57, 57, 0.5);

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
`;

export const MainPageSearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarInput type="text" placeholder="Search art, artist, work..." />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchBarContainer>
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

export const MainPageGallerySubTitle = () => {
  return <SectionSubtitle>Topics for you</SectionSubtitle>;
};

const SectionTitle = styled.span`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #393939;
`;

export const MainPageGalleryTitle = () => {
  return <SectionTitle>Our special gallery</SectionTitle>;
};

const GalleryWrapper = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  height: 514px;
`;

export const MainPageSectionGallery = ({ artsGalleryList }) => {
  return (
    <GalleryWrapper>
      {artsGalleryList.map((artInfo, index) => (
        <ArtCard key={index} artInfo={artInfo} />
      ))}
    </GalleryWrapper>
  );
};

const GalleryNavigationWrapper = styled.nav`
  align-self: flex-end;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 30px;
`;

const GalleryNavigationSpan = styled.span`
  padding: 0 10px;
  min-width: 30px;
  height: 30px;
  border-radius: 4px;
  background: #f9f9f9;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #393939;
`;

const GalleryNavigationButtonInactive = styled.button`
  padding: 0 10px;
  min-width: 30px;
  height: 30px;
  border-radius: 4px;
  background: #f9f9f9;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #393939;
`;

const GalleryNavigationButtonActive = styled.button`
  padding: 0 10px;
  min-width: 30px;
  height: 30px;
  background: #f17900;
  border-radius: 4px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`;

export const MainPageSectionGalleryNavigation = ({ paginationClicked, paginationArray }) => {
  if (!paginationArray.length) return null;
  const paginationElements = paginationArray.map((element, index) => {
    switch (element[0]) {
      case '<':
        return <GalleryNavigationButtonInactive key={index}>{'<'}</GalleryNavigationButtonInactive>;
      case '>':
        return <GalleryNavigationButtonInactive key={index}>{'>'}</GalleryNavigationButtonInactive>;
      case '...':
        return <GalleryNavigationSpan key={index}>{'...'}</GalleryNavigationSpan>;
      default:
        if (element[1]) {
          return (
            <GalleryNavigationButtonActive key={index}>{element[0]}</GalleryNavigationButtonActive>
          );
        } else {
          return (
            <GalleryNavigationButtonInactive key={index}>
              {element[0]}
            </GalleryNavigationButtonInactive>
          );
        }
    }
  });

  return (
    <GalleryNavigationWrapper onClick={paginationClicked}>
      {paginationElements}
    </GalleryNavigationWrapper>
  );
};

export const MainPageCollectionSubtitle = () => {
  return <SectionSubtitle>Here some more</SectionSubtitle>;
};

export const MainPageCollectionTitle = () => {
  return <SectionTitle>Other works for you</SectionTitle>;
};

export const MainPageArtCollection = () => {
  return <ArtCollection />;
};

import React from 'react';
import styled from 'styled-components';

import {
  MainPageTitle,
  MainPageSearchBar,
  MainPageGallerySubTitle,
  MainPageGalleryTitle,
  MainPageSectionGallery,
  MainPageSectionGalleryNavigation,
  MainPageCollectionSubtitle,
  MainPageCollectionTitle,
  MainPageArtCollection,
  // @ts-ignore
} from './styled.js';

const Wrapper = styled.main`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPage = () => {
  return (
    <Wrapper>
      <MainPageTitle />
      <MainPageSearchBar />
      <MainPageGallerySubTitle />
      <MainPageGalleryTitle />
      <MainPageSectionGallery />
      <MainPageSectionGalleryNavigation />
      <MainPageCollectionSubtitle />
      <MainPageCollectionTitle />
      <MainPageArtCollection />
    </Wrapper>
  );
};

export default MainPage;

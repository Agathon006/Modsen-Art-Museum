import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { IArtInfo } from './../services/ArtService';
import useArtService from './../services/ArtService';

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
  const { getAllArts } = useArtService();
  const dispatch = useDispatch();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    getAllArts()
      .then(onArtGalleryLoaded)
      .then(() => dispatch({ type: 'SET_PROCESS', payload: 'confirmed' }));
  };

  const onArtGalleryLoaded = (ArtsList: IArtInfo[]) => {
    dispatch({ type: 'SET_ARTS_LIST', payload: ArtsList });
  };

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

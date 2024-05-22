import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IRootState } from '@store/reducers/index.js';
import useArtService, { IArtInfo } from '@services/ArtService';
import ArtCollection from '@components/artCollection/ArtCollection.js';
import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';

import styled from 'styled-components';

import {
  FavouriteArtsPageTitle,
  FavouriteArtsPageCollectionSubTitle,
  FavouriteArtsPageCollectionTitle,
  // @ts-ignore
} from './styled.js';

const Wrapper = styled.main`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1400px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const FavouriteArtsPage = () => {
  const { getArtsByIdArray } = useArtService();
  const dispatch = useDispatch();

  const artsFavoriteCollectionList = useSelector(
    (state: IRootState) => state.favorite.artsFavoriteCollectionList
  );
  const artsFavoriteCollectionListProcess = useSelector(
    (state: IRootState) => state.favorite.artsFavoriteCollectionListProcess
  );
  const favoriteArtsIdList = useSelector((state: IRootState) => state.favorite.favoriteArtsIdList);

  useEffect(() => {
    dispatch({ type: 'SET_ASIDE_MODE', payload: false });
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST_PROCESS', payload: 'loading' });
    updateData();
  }, []);

  const updateData = () => {
    getArtsByIdArray(favoriteArtsIdList).then(onDataLoaded);
  };

  const onDataLoaded = (data: IArtInfo[]) => {
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST', payload: data });
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST_PROCESS', payload: 'confirmed' });
  };

  return (
    <Wrapper>
      <FavouriteArtsPageTitle />
      <FavouriteArtsPageCollectionSubTitle />
      <FavouriteArtsPageCollectionTitle />
      <ErrorBoundary>
        <ArtCollection
          itemsNumber={18}
          process={artsFavoriteCollectionListProcess}
          artsList={artsFavoriteCollectionList}
        />
      </ErrorBoundary>
    </Wrapper>
  );
};

export default FavouriteArtsPage;

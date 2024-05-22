import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';
import useArtService from '../../services/ArtService';
import ArtCollection from '../../components/artCollection/ArtCollection.js';
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
    // @ts-ignore
    state => state.favorite.artsFavoriteCollectionList
  );
  const artsFavoriteCollectionListProcess = useSelector(
    // @ts-ignore
    state => state.favorite.artsFavoriteCollectionListProcess
  );
  // @ts-ignore
  const favoriteArtsIdList = useSelector(state => state.favorite.favoriteArtsIdList);

  useEffect(() => {
    dispatch({ type: 'SET_ASIDE_MODE', payload: false });
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST_PROCESS', payload: 'loading' });
    updateData();
  }, []);

  const updateData = () => {
    // @ts-ignore
    getArtsByIdArray(favoriteArtsIdList).then(onDataLoaded);
  };

  // @ts-ignore
  const onDataLoaded = data => {
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST_PROCESS', payload: 'confirmed' });
    dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST', payload: data });
  };

  return (
    <Wrapper>
      <FavouriteArtsPageTitle />
      <FavouriteArtsPageCollectionSubTitle />
      <FavouriteArtsPageCollectionTitle />
      <ErrorBoundary>
        <ArtCollection
          itemsNumber={18}
          // @ts-ignore
          process={artsFavoriteCollectionListProcess}
          artsList={artsFavoriteCollectionList}
        />
      </ErrorBoundary>
    </Wrapper>
  );
};

export default FavouriteArtsPage;

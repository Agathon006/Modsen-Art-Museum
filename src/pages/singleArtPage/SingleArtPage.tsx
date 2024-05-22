import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IRootState } from '@store/reducers/index.js';
import useArtService, { IHandledDetailedArtInfo } from '@services/ArtService';
import setContent from '@utils/setContent.js';
import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';

import styled from 'styled-components';

import {
  StyledPicture,
  StyledDescription,
  // @ts-ignore
} from './styled.js';

const Wrapper = styled.main`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 80px;

  @media (max-width: 1400px) {
    width: 100%;
    padding: 0 30px;
    gap: 30px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 520px) {
    padding: 0 10px;
  }
`;

const PhotoSkeletonWrapper = styled.div`
  width: 497px;
  height: 570px;

  @media (max-width: 900px) {
    align-self: center;
  }

  @media (max-width: 520px) {
    margin: 0 auto;
    width: 370px;
    height: 420px;
  }
`;

const DescriptionSkeletonWrapper = styled.div`
  width: 703px;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const SingleArtPage = () => {
  const { getArtById } = useArtService();
  const dispatch = useDispatch();
  const { id } = useParams();

  const artByID = useSelector((state: IRootState) => state.artById.artByID);
  const artByIDProcess = useSelector((state: IRootState) => state.artById.artByIDProcess);

  const favoriteArtsIdList = useSelector((state: IRootState) => state.favorite.favoriteArtsIdList);
  let isFavorite = false;
  if (artByID.id) {
    isFavorite = favoriteArtsIdList.includes(artByID.id);
  }

  useEffect(() => {
    dispatch({ type: 'SET_ASIDE_MODE', payload: false });
    dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'loading' });
    displayData();
  }, []);

  const displayData = () => {
    getArtById(id).then(onDataLoaded);
  };

  const onDataLoaded = (data: IHandledDetailedArtInfo) => {
    dispatch({ type: 'SET_ART_BY_ID', payload: data });
    dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'confirmed' });
  };

  const renderPicture = () => {
    return <StyledPicture dispatch={dispatch} isFavorite={isFavorite} artInfo={artByID} />;
  };

  const renderDescription = () => {
    return <StyledDescription artInfo={artByID} />;
  };

  return (
    <Wrapper>
      <PhotoSkeletonWrapper>
        <ErrorBoundary>{setContent(artByIDProcess, () => renderPicture())}</ErrorBoundary>
      </PhotoSkeletonWrapper>
      <DescriptionSkeletonWrapper>
        <ErrorBoundary>{setContent(artByIDProcess, () => renderDescription())}</ErrorBoundary>
      </DescriptionSkeletonWrapper>
    </Wrapper>
  );
};

export default SingleArtPage;

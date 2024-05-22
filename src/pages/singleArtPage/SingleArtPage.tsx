import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';
import setContent from '../../utils/setContent.js';
import useArtService from '../../services/ArtService';
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

  useEffect(() => {
    dispatch({ type: 'SET_ASIDE_MODE', payload: false });
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'loading' });
    updateData();
  }, [id]);

  const updateData = () => {
    // @ts-ignore
    getArtById(id).then(onDataLoaded);
  };

  // @ts-ignore
  const onDataLoaded = data => {
    dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'confirmed' });
    dispatch({ type: 'SET_ART_BY_ID', payload: data });
  };

  // @ts-ignore
  const artByID = useSelector(state => state.artByID);
  // @ts-ignore
  const artByIDProcess = useSelector(state => state.artByIDProcess);

  // @ts-ignore
  const favoriteArtsIdList = useSelector(state => state.favoriteArtsIdList);
  // @ts-ignore
  let isFavorite = favoriteArtsIdList.includes(artByID.id);

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

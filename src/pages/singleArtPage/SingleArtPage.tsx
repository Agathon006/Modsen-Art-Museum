import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

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
`;

const PhotoSkeletonWrapper = styled.div`
  width: 497px;
  height: 570px;

  @media (max-width: 900px) {
    align-self: center;
  }
`;

const DescriptionSkeletonWrapper = styled.div`
  width: 703px;
`;

const SingleArtPage = () => {
  const { getArtById } = useArtService();
  const dispatch = useDispatch();
  const { id } = useParams();

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
        {setContent(artByIDProcess, () => renderPicture())}
      </PhotoSkeletonWrapper>
      <DescriptionSkeletonWrapper>
        {setContent(artByIDProcess, () => renderDescription())}
      </DescriptionSkeletonWrapper>
    </Wrapper>
  );
};

export default SingleArtPage;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

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
  justify-content: space-between;
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

  return (
    <Wrapper>
      <StyledPicture artInfo={artByID} process={artByIDProcess} />
      <StyledDescription artInfo={artByID} process={artByIDProcess} />
    </Wrapper>
  );
};

export default SingleArtPage;

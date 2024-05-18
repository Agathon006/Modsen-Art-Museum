import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
`;

const FavouriteArtsPage = () => {
  return (
    <Wrapper>
      <FavouriteArtsPageTitle />
      <FavouriteArtsPageCollectionSubTitle />
      <FavouriteArtsPageCollectionTitle />
    </Wrapper>
  );
};

export default FavouriteArtsPage;

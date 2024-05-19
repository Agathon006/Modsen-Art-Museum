import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
  return (
    <Wrapper>
      <StyledPicture />
      <StyledDescription />
    </Wrapper>
  );
};

export default SingleArtPage;

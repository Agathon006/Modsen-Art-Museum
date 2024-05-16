import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import { MainPageTitle, MainPageSearchBar } from './styled.js';

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
    </Wrapper>
  );
};

export default MainPage;

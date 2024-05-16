import React from 'react';
import styled from 'styled-components';

import Header from '../header/index.js';
import Footer from '../footer/index.js';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  );
};

export default App;

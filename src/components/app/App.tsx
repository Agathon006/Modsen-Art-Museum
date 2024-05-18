import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from '../../store/store.js';
import Header from '../header/index.js';
import Footer from '../footer/index.js';
import MainPage from '../../pages/MainPage.js';
import FavouriteArtsPage from '../../pages/favouriteArtsPage/FavouriteArtsPage.js';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 120px;
`;

const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <MainPage />
        {/* <FavouriteArtsPage /> */}
        <Footer />
      </Wrapper>
    </Provider>
  );
};

export default App;

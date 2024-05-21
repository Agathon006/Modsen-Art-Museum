import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppLayout from '../../components/appLayout/AppLayout.js';
import store from '../../store/store.js';
import MainPage from '../../pages/MainPage.js';
import SingleArtPage from '../../pages/singleArtPage/SingleArtPage.js';
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
      <Router>
        <Wrapper>
          <AppLayout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/favorites" element={<FavouriteArtsPage />} />
              <Route path="/:id" element={<SingleArtPage />} />
            </Routes>
          </AppLayout>
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;

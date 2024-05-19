import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import store from '../../store/store.js';
import Header from '../header/index.js';
import Footer from '../footer/index.js';
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
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/:id" element={<SingleArtPage />} /> */}
            <Route path="/favorites" element={<SingleArtPage />} />
            <Route path="*" element={<span>page not found</span>} />
          </Routes>
          <Footer />
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;

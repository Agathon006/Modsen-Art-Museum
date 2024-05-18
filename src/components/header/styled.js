import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import Bookmark from '../../assets/bookmark.svg';

const Wrapper = styled.header`
  height: 127px;
  width: 100%;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = styled.nav`
  height: 63px;
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavoritesPageLinkWrapper = styled.div`
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

const FavoritesPageLinkSpan = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

function StyledHeader() {
  return (
    <Wrapper>
      <Navigation>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/favorites">
          <FavoritesPageLinkWrapper>
            <Bookmark />
            <FavoritesPageLinkSpan>Your favorites</FavoritesPageLinkSpan>
          </FavoritesPageLinkWrapper>
        </Link>
      </Navigation>
    </Wrapper>
  );
}

export default StyledHeader;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import Home from '../../assets/home.svg';
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

  @media (max-width: 1400px) {
    width: 100%;
    padding: 0 30px;
  }
`;

const RightPartWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const LinkWrapper = styled.div`
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
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

const HomeLinkSpan = styled.span`
  margin-right: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

function StyledHeader({ pathname }) {
  let homelink = (
    <Link to="/">
      <LinkWrapper>
        <Home />
        <HomeLinkSpan>Home</HomeLinkSpan>
      </LinkWrapper>
    </Link>
  );

  return (
    <Wrapper>
      <Navigation>
        <Link to="/">
          <Logo />
        </Link>
        <RightPartWrapper>
          {pathname !== '/' ? homelink : null}
          <Link to="/favorites">
            <LinkWrapper>
              <Bookmark />
              <FavoritesPageLinkSpan>Your favorites</FavoritesPageLinkSpan>
            </LinkWrapper>
          </Link>
        </RightPartWrapper>
      </Navigation>
    </Wrapper>
  );
}

export default StyledHeader;

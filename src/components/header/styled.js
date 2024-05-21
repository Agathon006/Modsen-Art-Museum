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

  @media (max-width: 768px) {
    gap: 0px;
  }
`;

const LinkWrapper = styled.div`
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
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

const BurgerMenu = styled.button`
  height: 60px;
  width: 60px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BurgerMenuIconPart = styled.div`
  width: 80%;
  height: 3px;
  background-color: #ffffff;
`;

const BurgerMenuContentWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  width: 100%;
  height: 100%;
  visibility: ${({ $asideMode }) => ($asideMode ? 'visible' : 'hidden')};
  opacity: ${({ $asideMode }) => ($asideMode ? '1' : '0')};

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const BurgerMenuContent = styled.aside`
  position: relative;
  z-index: 3;
  background-color: black;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const BurgerMenuCloseButton = styled.aside`
  font-family: 'Inter';
  width: 50px;
  height: 50px;
  font-size: 50px;
  background-color: transparent;
  border: none;
  padding: 0;
  align-self: flex-end;
  margin: 32px 30px 0 0;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BurgerMenuContentList = styled.ul`
  margin: 20px 0 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

const BurgerMenuContentListElement = styled.li`
  padding: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 19px;
  color: #ffffff;
`;

function StyledHeader({ wrapperRef, asideMode, switchAsideMode, pathname }) {
  let homelink = (
    <Link to="/">
      <LinkWrapper>
        <Home />
        <HomeLinkSpan>Home</HomeLinkSpan>
      </LinkWrapper>
    </Link>
  );

  return (
    <>
      <BurgerMenuContentWrapper ref={wrapperRef} $asideMode={asideMode}>
        <BurgerMenuContent>
          <BurgerMenuCloseButton onClick={() => switchAsideMode(!asideMode)}>
            x
          </BurgerMenuCloseButton>
          <BurgerMenuContentList>
            {pathname !== '/' ? (
              <Link to="/">
                <BurgerMenuContentListElement>Home</BurgerMenuContentListElement>
              </Link>
            ) : null}
            <Link to="/favorites">
              <BurgerMenuContentListElement>Your favorites</BurgerMenuContentListElement>
            </Link>
          </BurgerMenuContentList>
        </BurgerMenuContent>
      </BurgerMenuContentWrapper>
      <Wrapper>
        <Navigation>
          <Link to="/">
            <Logo />
          </Link>
          <RightPartWrapper>
            <BurgerMenu onClick={() => switchAsideMode(!asideMode)}>
              <BurgerMenuIconPart />
              <BurgerMenuIconPart />
              <BurgerMenuIconPart />
            </BurgerMenu>
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
    </>
  );
}

export default StyledHeader;

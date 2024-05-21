import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../assets/footer_logo.svg';
import ModsenLogo from '../../assets/modsen_logo.svg';

const Wrapper = styled.header`
  height: 127px;
  width: 100%;
  background: #ffffff;
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

  @media (max-width: 400px) {
    padding: 0 10px;
  }
`;

function StyledFooter() {
  return (
    <Wrapper>
      <Navigation>
        <Link to="/">
          <Logo />
        </Link>
        <a href="https://www.modsen-software.com/" target="_blank">
          <ModsenLogo />
        </a>
      </Navigation>
    </Wrapper>
  );
}

export default StyledFooter;

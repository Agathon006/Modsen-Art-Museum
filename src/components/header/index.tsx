import React from 'react';
import { useLocation } from 'react-router-dom';

// @ts-ignore
import StyledHeader from './styled.js';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  return <StyledHeader pathname={pathname} />;
};

export default Header;

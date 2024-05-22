import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// @ts-ignore
import StyledHeader from './styled.js';

const Header = () => {
  const wrapperRef = useRef(null);
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useDispatch();
  // @ts-ignore
  const asideMode = useSelector(state => state.burgerMenuAside.asideMode);

  // @ts-ignore
  const handleClickOutside = event => {
    // @ts-ignore
    if (wrapperRef.current === event.target) {
      switchAsideMode(false);
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }
  };

  useEffect(() => {
    if (asideMode) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [asideMode]);

  const switchAsideMode = (newAsideMode: boolean) => {
    dispatch({ type: 'SET_ASIDE_MODE', payload: newAsideMode });
  };

  return (
    <StyledHeader
      wrapperRef={wrapperRef}
      asideMode={asideMode}
      switchAsideMode={switchAsideMode}
      pathname={pathname}
    />
  );
};

export default Header;

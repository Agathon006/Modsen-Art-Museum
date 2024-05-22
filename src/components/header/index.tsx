import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { IRootState } from '@store/reducers/index.js';

// @ts-ignore
import StyledHeader from './styled.js';

const Header = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { pathname } = location;

  const wrapperRef = useRef(null);
  const asideMode = useSelector((state: IRootState) => state.burgerMenuAside.asideMode);

  const handleClickOutside = (event: MouseEvent) => {
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

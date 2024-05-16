import React from 'react';
import styled from 'styled-components';

import SearchIcon from './../assets/search.svg';

const Title = styled.h1`
  width: 684px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  text-transform: capitalize;
  color: #393939;
`;

const TitleSpecial = styled.span`
  color: #f17900;
`;

export const MainPageTitle = () => {
  return (
    <Title>
      let's find some <TitleSpecial>art</TitleSpecial> here!
    </Title>
  );
};

const SearchBarContainer = styled.div`
  position: relative;
  margin-top: 72px;
`;

const SearchBarInput = styled.input`
  width: 762px;
  padding: 23.5px 16px;
  background: rgba(57, 57, 57, 0.05);
  border-radius: 16px;
  border: none; /* Remove default input border */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  color: rgba(57, 57, 57, 0.5);

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
`;

export const MainPageSearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarInput type="text" placeholder="Search art, artist, work..." />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchBarContainer>
  );
};

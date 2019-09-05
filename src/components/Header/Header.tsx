import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';

const StyledHeader = styled.header`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavigationMenu />
    </StyledHeader>
  );
}

export default Header;

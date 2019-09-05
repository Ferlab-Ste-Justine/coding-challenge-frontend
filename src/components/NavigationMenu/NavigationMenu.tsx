import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const UnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  display: inline-block;
  padding: 1rem;
  text-decoration: none;
  text-transform: capitalize;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  &.active {
    background-color: #202020;
    color: #60dafb;
  }
`;

function NavigationMenu() {
  return (
    <UnorderedList>
      <ListItem>
        <StyledNavLink exact to="/search">
          Search
        </StyledNavLink>
      </ListItem>
      <ListItem>
        <StyledNavLink exact to="/about">
          About
        </StyledNavLink>
      </ListItem>
    </UnorderedList>
  );
}

export default NavigationMenu;

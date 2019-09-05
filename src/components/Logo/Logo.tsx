import React from 'react';
import styled from 'styled-components';
import logoImage from './logo.svg';

const LogoWrapper = styled.div`
  display: flex;
  max-width: 4rem;
`;

const StyledImage = styled.img`
  width: 100%;
`;

function Logo() {
  return (
    <LogoWrapper>
      <StyledImage src={logoImage} alt="logo" />
    </LogoWrapper>
  );
}

export default Logo;

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayoutMainSection = styled.section`
  background-color: #f3f5f6;
  border-top: 1px solid hsla(0, 0%, 54%, 0.3);
  box-shadow: inset 0 2px transparent;
  flex: 1;
  margin-top: 35px;
  padding: 30px;
`;

function BaseLayout(props: BaseLayoutProps) {
  return (
    <>
      <Header />
      <BaseLayoutMainSection>{props.children}</BaseLayoutMainSection>
    </>
  );
}

export default BaseLayout;

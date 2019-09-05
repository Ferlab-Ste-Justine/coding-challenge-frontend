import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { BaseLayoutMainSection } from '../BaseLayout';
import MasonryLayout from '../MasonryLayout';
import FlickrProvider, {
  FlickrProviderRenderProps
} from '../../providers/FlickrProvider';

interface SearchLayoutProps extends RouteComponentProps {
  children?: ReactNode;
}

const Section = styled.section`
  margin-top: 30px;
`;

function SearchLayout(props: SearchLayoutProps) {
  return (
    <>
      <Header />
      <BaseLayoutMainSection>
        <FlickrProvider routeProps={props}>
          {({ results, updateKeyword }: FlickrProviderRenderProps) => (
            <>
              <SearchBar updateKeyword={updateKeyword} />
              <Section>
                <MasonryLayout images={results} />
              </Section>
            </>
          )}
        </FlickrProvider>
      </BaseLayoutMainSection>
    </>
  );
}

export default SearchLayout;

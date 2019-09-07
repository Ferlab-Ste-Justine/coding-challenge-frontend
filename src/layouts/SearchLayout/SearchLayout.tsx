import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import SearchBar from '../../components/SearchBar';
import BaseLayout from '../BaseLayout';
import FlickrProvider, {
  FlickrProviderRenderProps
} from '../../providers/FlickrProvider';
import ImageWall from '../../components/ImageWall/ImageWall';

interface SearchLayoutProps extends RouteComponentProps {
  children?: ReactNode;
}

const Section = styled.section`
  margin-top: 30px;
`;

function SearchLayout(props: SearchLayoutProps) {
  return (
    <BaseLayout>
      <FlickrProvider routeProps={props}>
        {({
          keyword,
          photos,
          updateKeyword,
          error
        }: FlickrProviderRenderProps) => (
          <>
            <SearchBar keyword={keyword} updateKeyword={updateKeyword} />
            <Section>
              {error && 'There was an error OR you are offline.'}
              {!error && keyword && isEmpty(photos) ? (
                'Loading...'
              ) : (
                <ImageWall images={photos} />
              )}
            </Section>
          </>
        )}
      </FlickrProvider>
    </BaseLayout>
  );
}

export default SearchLayout;

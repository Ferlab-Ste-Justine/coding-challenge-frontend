import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
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
        {({ keyword, photos, updateKeyword }: FlickrProviderRenderProps) => (
          <>
            <SearchBar keyword={keyword} updateKeyword={updateKeyword} />
            <Section>
              <ImageWall images={photos} />
            </Section>
          </>
        )}
      </FlickrProvider>
    </BaseLayout>
  );
}

export default SearchLayout;

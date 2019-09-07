import React from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import InfiniteScroll from 'react-infinite-scroller';
import FlickrImage from '../FlickrImage';
import { FlickrPhoto } from '../../providers/FlickrProvider';

interface ImageWallProps {
  images: FlickrPhoto[];
  hasMore: boolean;
  loadMore: (nextPage: number) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
`;

function ImageWall({ images, loadMore, hasMore }: ImageWallProps) {
  if (isEmpty(images)) return null;

  return (
    <InfiniteScroll
      element={Wrapper}
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
    >
      {images.map(img => (
        <FlickrImage key={img.id} img={img} />
      ))}
    </InfiniteScroll>
  );
}

export default ImageWall;

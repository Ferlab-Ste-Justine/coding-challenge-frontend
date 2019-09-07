import React from 'react';
import styled from 'styled-components';
import FlickrImage from '../FlickrImage';
import { FlickrPhoto } from '../../providers/FlickrProvider';

interface ImageWallProps {
  images: FlickrPhoto[];
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
`;

function ImageWall({ images }: ImageWallProps) {
  return (
    <Wrapper>
      {images.map(img => (
        <FlickrImage key={img.id} img={img} />
      ))}
    </Wrapper>
  );
}

export default ImageWall;

import React from 'react';
import styled from 'styled-components';
import { FlickrPhoto } from '../../providers/FlickrProvider';

interface FlickrImageProps {
  img: FlickrPhoto;
}

const ImageWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px;
  padding: 10px;
  width: 100%;

  @media (min-width: 420px) {
    width: 170px;
  }

  @media (min-width: 420px) {
    width: 43%;
  }

  @media (min-width: 610px) {
    width: 170px;
  }
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

function FlickrImage({ img }: FlickrImageProps) {
  const { ownername, title, url_q } = img;

  return (
    <ImageWrapper>
      <Image
        src={url_q}
        alt={`${title} by ${ownername}`}
        title={`${title} by ${ownername}`}
      />
    </ImageWrapper>
  );
}

export default FlickrImage;

import React from 'react';
import styled from 'styled-components';

interface FlickrImageProps {
  img: any;
}

const ImageWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px;
  padding: 10px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
`;

function FlickrImage({ img }: FlickrImageProps) {
  const { ownername, title, url_sq } = img;

  return (
    <ImageWrapper>
      <Image
        src={url_sq}
        alt={`${title} by ${ownername}`}
        title={`${title} by ${ownername}`}
      />
    </ImageWrapper>
  );
}

export default FlickrImage;

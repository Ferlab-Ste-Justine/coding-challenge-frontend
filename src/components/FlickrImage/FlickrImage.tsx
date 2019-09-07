import React, { Component, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { FlickrPhoto } from '../../providers/FlickrProvider';

interface FlickrImageProps {
  img: FlickrPhoto;
}

interface FlickrImageState {
  isVisible: boolean;
  error: boolean;
}

const ImageWrapper = styled.div`
  height: auto;
  margin: 10px;
  width: 100%;

  @media (min-width: 420px) {
    width: 43%;
  }

  @media (min-width: 610px) {
    height: 170px;
    width: 170px;
  }

  @media (min-width: 662px) {
    height: 188px;
    width: 188px;
  }

  @media (min-width: 800px) {
    height: 170px;
    width: 170px;
  }
`;

const Image = styled.img<{ isVisible: boolean; error: boolean }>`
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  display: ${({ error }) => (error ? 'none' : 'block')};
  height: auto;
  opacity: ${({ isVisible }) => (isVisible ? 100 : 0)};
  padding: 10px;
  transition: opacity 100ms;
  width: 100%;
`;

class FlickrImage extends Component<FlickrImageProps, FlickrImageState> {
  state = {
    isVisible: false,
    error: false
  };

  handleLoadedImage = () => {
    this.setState({
      isVisible: true
    });
  };

  handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    this.setState({
      error: true
    });
    console.error(`Could not load image:`, e.currentTarget);
  };

  render() {
    const { ownername, title, url_q } = this.props.img;
    const { isVisible, error } = this.state;

    return (
      <ImageWrapper>
        <Image
          src={url_q}
          alt={`${title} by ${ownername}`}
          title={`${title} by ${ownername}`}
          onLoad={this.handleLoadedImage}
          onError={this.handleImageError}
          isVisible={isVisible}
          error={error}
        />
      </ImageWrapper>
    );
  }
}

export default FlickrImage;

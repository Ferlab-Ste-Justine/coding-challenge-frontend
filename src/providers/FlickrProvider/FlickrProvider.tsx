import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getFlickrApiResults } from './FlickrApi';

interface MatchParams {
  keyword?: string;
}

interface FlickrProviderProps {
  routeProps: RouteComponentProps<MatchParams>;
  children: (renderProps: FlickrProviderRenderProps) => void;
}

interface FlickrProviderState {
  keyword: string;
  photos: any[]; // TODO: typings
}

export interface FlickrProviderRenderProps {
  photos: FlickrProviderState['photos'];
  keyword: string;
  updateKeyword: (keyword: string) => void;
}

class FlickrProvider extends PureComponent<
  FlickrProviderProps,
  FlickrProviderState
> {
  state = {
    keyword: '',
    photos: []
  };

  componentDidMount() {
    const { keyword } = this.props.routeProps.match.params;
    console.warn('componentDidMount keyword', keyword);
    this.getFlickrResults(keyword);
  }

  componentDidUpdate() {
    const { keyword } = this.props.routeProps.match.params;
    console.warn('componentDidUpdate keyword', keyword);
    this.getFlickrResults(keyword);
  }

  getFlickrResults = async (keyword?: string) => {
    const { keyword: previousKeyword } = this.state;

    if (!keyword || keyword === previousKeyword) return;

    // Async set keyword state ASAP
    this.setState({
      keyword
    });

    const payload: any = await getFlickrApiResults(keyword);
    console.warn('payload', payload);

    // Async set results state whenever they arrive
    this.setState({
      photos: payload.data.photos.photo
    });
  };

  updateKeyword = (keyword: string = '') => {
    const { push } = this.props.routeProps.history;
    push(`/search/${keyword.toLowerCase()}`);
  };

  render() {
    const { children } = this.props;
    const { photos, keyword } = this.state;

    return (
      <>{children({ photos, keyword, updateKeyword: this.updateKeyword })}</>
    );
  }
}

export default FlickrProvider;

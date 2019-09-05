import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import axios from 'axios';

interface MatchParams {
  keyword?: string;
}

interface FlickrProviderProps {
  routeProps: RouteComponentProps<MatchParams>;
  children: (renderProps: FlickrProviderRenderProps) => void;
}

interface FlickrProviderState {
  results: any; // TODO: typings
}

export interface FlickrProviderRenderProps {
  results: FlickrProviderState['results'];
  keyword?: string;
  updateKeyword: (keyword: string) => void;
}

class FlickrProvider extends Component<
  FlickrProviderProps,
  FlickrProviderState
> {
  state = {
    results: null
  };

  componentDidMount() {
    const { params } = this.props.routeProps.match;
    console.warn('componentDidMount params', params);
  }

  componentDidUpdate() {
    const { params } = this.props.routeProps.match;
    console.warn('componentDidUpdate params', params);
  }

  updateKeyword = (keyword: string = '') => {
    const { push } = this.props.routeProps.history;
    push(`/search/${keyword.toLowerCase()}`);
  };

  render() {
    const { children, routeProps } = this.props;
    const { keyword } = routeProps.match.params;
    const { results } = this.state;

    return (
      <>{children({ results, keyword, updateKeyword: this.updateKeyword })}</>
    );
  }
}

export default FlickrProvider;

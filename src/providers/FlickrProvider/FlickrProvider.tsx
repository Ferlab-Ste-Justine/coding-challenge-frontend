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

export interface FlickrPhoto {
  farm: number;
  height_q: string;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  ownername: string;
  secret: string;
  server: string;
  title: string;
  url_q: string;
  width_q: string;
}

interface FlickrProviderState {
  keyword: string;
  error: string;
  results: {
    page: number;
    pages: number;
    perpage: number;
    photo: FlickrPhoto[];
    total: string;
  };
}

export interface FlickrProviderRenderProps {
  photos: FlickrProviderState['results']['photo'];
  keyword: string;
  hasMore: boolean;
  updateKeyword: (keyword: string) => void;
  loadMore: (nextPage: number) => void;
  error: string;
}

class FlickrProvider extends PureComponent<
  FlickrProviderProps,
  FlickrProviderState
> {
  state = this.defaultState;

  get defaultState() {
    return {
      keyword: '',
      photos: [],
      error: '',
      results: {
        page: 0,
        pages: 0,
        perpage: 0,
        photo: [],
        total: '0'
      }
    };
  }

  componentDidMount() {
    const { keyword } = this.props.routeProps.match.params;
    this.getFlickrResults(keyword);
  }

  getFlickrResults = async (keyword?: string, nextPage: number = 1) => {
    const {
      keyword: previousKeyword,
      results: { page }
    } = this.state;

    // If no keyword, do nothing
    // If no changes to keyword, nextPage, do nothing
    if (!keyword || (keyword === previousKeyword && page === nextPage)) return;

    // Set new keyword state ASAP
    if (keyword !== previousKeyword) {
      this.setState({
        ...this.defaultState,
        keyword
      });
    }

    const payload: any = await getFlickrApiResults(keyword, nextPage).catch(
      error => {
        // TODO: Error handling (notication, node-bunyan, etc)
        console.error('error', error);
        this.setState({
          error
        });
      }
    );
    if (!payload) return;

    // Set state for new results whenever they arrive (async)
    this.setState(previousState => {
      return {
        ...previousState,
        error: '',
        keyword,
        results: {
          ...payload.data.photos,
          photo: [...previousState.results.photo, ...payload.data.photos.photo]
        }
      };
    });
  };

  updateKeyword = (keyword: string = '') => {
    const { push } = this.props.routeProps.history;
    push(`/search/${keyword.toLowerCase()}`);
    this.getFlickrResults(keyword);
  };

  loadMore = (page: number) => {
    const { keyword } = this.state;
    this.getFlickrResults(keyword, page + 1);
  };

  render() {
    const { children } = this.props;
    const { results, keyword, error } = this.state;
    const hasMore = results.page < results.pages;
    return (
      <>
        {children({
          photos: results.photo,
          hasMore,
          keyword,
          updateKeyword: this.updateKeyword,
          loadMore: this.loadMore,
          error
        })}
      </>
    );
  }
}

export default FlickrProvider;

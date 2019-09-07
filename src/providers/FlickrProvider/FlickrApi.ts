import axios from 'axios';

const FLICKR_ENDPOINT = 'https://api.flickr.com/services/rest';
const API_METHOD = 'flickr.photos.search';
const API_KEY = '7f9ba3549ba81579c37fb2c6b6df78dd';
const ITEMS_PER_PAGE = 60;
const RESPONSE_FORMAT = 'json';
const EXTRA_OPTIONS = 'url_q, owner_name';

export const getFlickrApiResults = (keyword: string, page: number = 1) =>
  axios({
    method: 'get',
    url: FLICKR_ENDPOINT,
    params: {
      method: API_METHOD,
      api_key: API_KEY,
      tags: keyword,
      extras: EXTRA_OPTIONS,
      page: page,
      format: RESPONSE_FORMAT,
      nojsoncallback: 1,
      per_page: ITEMS_PER_PAGE
    }
  });

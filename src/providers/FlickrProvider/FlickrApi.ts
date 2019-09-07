import axios from 'axios';

const FLICKR_ENDPOINT = 'https://api.flickr.com/services/rest';
const API_METHOD = 'flickr.photos.search';
const API_KEY = '7f9ba3549ba81579c37fb2c6b6df78dd';

export const getFlickrApiResults = (keyword: string) =>
  axios({
    method: 'get',
    url: FLICKR_ENDPOINT,
    params: {
      method: API_METHOD,
      api_key: API_KEY,
      tags: keyword,
      extras: 'url_sq, owner_name',
      page: 1,
      format: 'json',
      nojsoncallback: 1,
      per_page: 120
    }
  });

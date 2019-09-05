import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SearchLayout from '../../layouts/SearchLayout';

interface SearchProps extends RouteComponentProps {}

function Search(props: SearchProps) {
  return <SearchLayout {...props}>This is Search</SearchLayout>;
}

export default Search;

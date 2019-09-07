import React, { Component, ChangeEvent } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';

interface SearchBarProps {
  keyword: string;
  updateKeyword: (keyword: string) => void;
}

interface SearchBarState {}

const SearchBarWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  background-color: white;
  border: none;
  border-radius: 5px;
  flex: 1;
  font-size: 1.1rem;
  padding: 15px;

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  width: 0;
  z-index: -1;
`;

class SeachBar extends Component<SearchBarProps, SearchBarState> {
  // We need to cancel the debounced method if the component unmounts.
  componentWillUnmount() {
    this.updateSearchKeyword.cancel();
  }

  handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchKeyword = e.currentTarget.value;
    this.updateSearchKeyword(searchKeyword);
  };

  handleClearInputSearch = () => {
    this.updateSearchKeyword('');
  };

  // We don't want to debounce the event itself.
  // https://reactjs.org/docs/events.html#event-pooling
  updateSearchKeyword = debounce((searchKeyword: string) => {
    this.props.updateKeyword(searchKeyword);
  }, 1000);

  render() {
    const { keyword } = this.props;

    return (
      <SearchBarWrapper>
        <Label htmlFor="search">Search</Label>
        <Input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          onChange={this.handleOnChange}
          defaultValue={keyword}
        />
      </SearchBarWrapper>
    );
  }
}

export default SeachBar;

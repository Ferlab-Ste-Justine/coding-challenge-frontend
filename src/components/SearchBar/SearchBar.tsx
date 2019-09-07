import React, { Component, ChangeEvent } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash'; //TODO Check if tree-shaking works to keep bundle size small

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

// const ClearSearchButton = styled.button`
//   background-color: black;
//   color: white;
//   display: inline-block;
//   font-size: 0.8rem;
// `;

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
        <Input
          type="text"
          placeholder="Search"
          onChange={this.handleOnChange}
          defaultValue={keyword}
        />
        {/* <ClearSearchButton>Clear search</ClearSearchButton> */}
      </SearchBarWrapper>
    );
  }
}

export default SeachBar;

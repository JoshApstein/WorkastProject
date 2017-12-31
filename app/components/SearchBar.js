import React from 'react';
import PropTypes from 'prop-types';

// container component to search for gifs
const SearchBar = props => (
  <form
    id="searchbar"
    onSubmit={(e) => {
      e.preventDefault();
      props.fetchGifsRequest(props.searchTerm);
    }}
  >
    <input
      id="searchterm"
      type="search"
      name="q"
      onChange={(e) => { props.changeSearchValue(e.target.value); }}
    />
    <input type="submit" />
  </form>
);

// action creator for api request
SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  fetchGifsRequest: PropTypes.func.isRequired,
  changeSearchValue: PropTypes.func.isRequired,
};

export default SearchBar;

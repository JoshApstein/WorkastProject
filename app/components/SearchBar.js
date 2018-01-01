import React from 'react';
import PropTypes from 'prop-types';

// container component to search for gifs
const SearchBar = props => (
  <div className="jumbotron">
    <div className="row justify-content-center">
      <form
        className="col-6 justify-content-center"
        id="searchbar"
        onSubmit={(e) => {
          e.preventDefault();
          props.fetchGifsRequest(props.searchTerm);
        }}
      >
        <input
          style={{ height: '100px', width: '75%', fontSize: '48px'}}
          id="searchterm"
          type="search"
          placeholder="Search For Some Gifs"
          onChange={(e) => { props.changeSearchValue(e.target.value); }}
        />
        <input type="submit" style={{ height: '100px', width: '25%', fontSize: '48px' }} />
      </form>
    </div>
  </div>
);

// action creator for api request
SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  fetchGifsRequest: PropTypes.func.isRequired,
  changeSearchValue: PropTypes.func.isRequired,
};

export default SearchBar;

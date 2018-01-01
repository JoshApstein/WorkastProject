import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../containers/SearchBar';
import Results from '../containers/Results';

// Whole application
class App extends Component {
  componentDidMount() {
    this.props.fetchGifsRequest();
  }
  render() {
    return (
      <div>
        <SearchBar />
        <Results />
      </div>);
  }
}

App.propTypes = {
  fetchGifsRequest: PropTypes.func.isRequired,
};

export default App;

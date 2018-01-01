import React from 'react';
import PropTypes from 'prop-types';
import NoSearch from './NoSearch';
import Results from './Results';

const GifsOrNot = props => (
  <div>
    {props.hasSearched ? <Results currentGifs={props.currentGifs} /> : <NoSearch />}
  </div>);

GifsOrNot.propTypes = {
  hasSearched: PropTypes.bool.isRequired,
  currentGifs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GifsOrNot;

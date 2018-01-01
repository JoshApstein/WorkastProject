import React from 'react';
import PropTypes from 'prop-types';
import NoSearch from './NoSearch';
import Results from '../containers/Results';

const GifsOrNot = props => (<div>{props.hasSearched ? <Results /> : <NoSearch />}</div>);

GifsOrNot.propTypes = {
  hasSearched: PropTypes.bool.isRequired,
};

export default GifsOrNot;

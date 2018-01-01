import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gif';
import Pages from '../containers/Pages';

const Results = props => (
  <div>
    <Pages />
    {props.currentGifs.map(image => (
      <Gif
        key={image.id}
        imgSrc={image.images.original.url}
        link={image.url}
        altText={image.title}
      />
    ))}
  </div>
);

Results.propTypes = {
  currentGifs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;

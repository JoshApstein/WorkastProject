import React from 'react';
import PropTypes from 'prop-types';

// component for all gifs
const Gif = props => (
  <div className="col col-6 align-items-center justify-content-center">
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img src={props.imgSrc} alt={props.altText} width="100%" />
    </a>
  </div>
);

Gif.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Gif;

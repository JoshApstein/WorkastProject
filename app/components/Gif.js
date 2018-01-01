import React from 'react';
import PropTypes from 'prop-types';

const Gif = props => (
  <a href={props.link} target="_blank" rel="noopener noreferrer">
    <img src={props.imgSrc} alt={props.altText} />
  </a>
);

Gif.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Gif;

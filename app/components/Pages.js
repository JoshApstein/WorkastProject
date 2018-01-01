import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

// component for pagination
const Pages = props => (
  <div className="row justify-content-center">
    <Pagination
      next
      prev
      bsSize="large"
      items={Math.ceil(props.gifsLength / 10)}
      activePage={props.page}
      onSelect={props.changePage}
    />
  </div>
);


Pages.propTypes = {
  page: PropTypes.number.isRequired,
  gifsLength: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default Pages;

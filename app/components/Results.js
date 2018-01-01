import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gif';
import Pages from '../containers/Pages';

const Results = props => (
  <div className="container">
    <Pages />
    {(() => {
      const Rows = [];
      const currGifs = props.currentGifs;
      for (let i = 0; i < currGifs.length; i += 2) {
        Rows.push(<div className="row justify-content-center align-items-center" key={i}>
          <Gif
            key={currGifs[i].id}
            imgSrc={currGifs[i].images.original.url}
            link={currGifs[i].url}
            altText={currGifs[i].title}
          />
          {currGifs[i + 1] ?
            <Gif
              key={currGifs[i + 1].id}
              imgSrc={currGifs[i + 1].images.original.url}
              link={currGifs[i + 1].url}
              altText={currGifs[i + 1].title}
            /> : ''}
          
        </div>);
      }
      return Rows;
    })()}
  </div>
);

Results.defaultProps = {
  currentGifs: [],
};

Results.propTypes = {
  currentGifs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;

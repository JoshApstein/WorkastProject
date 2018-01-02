import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gif';
import Pages from '../containers/Pages';
import Spinner from './Spinner';

// Component to Store all Gifs and Pagination of those gifs
// I probably should separate the gifs into another component
// The for loop allows us to create rows of 2
const Results = props => (
  <div className="container">
    {(() => {
      // arr to store rows of 2 gifs
      // render Pages only if we have gifs to show
      const Rows = [];
      const currGifs = props.currentGifs;
      const currGifsLen = currGifs.length;
      if (!currGifsLen) {
        return (<div className="row justify-content-center">
          {props.isFetching ?
            <Spinner /> :
            <h1 style={{ color: 'red' }}>
              Sorry, but we could not find any Gifs to match your search. Please try again.
            </h1>
          }
        </div>); // eslint-disable-line
      }
      Rows.push(<Pages key={-1} />);
      for (let i = 0; i < currGifsLen; i += 2) {
        Rows.push((
          <div className="row justify-content-center align-items-center" key={i}>
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

          </div>));
      }
      return Rows;
    })()}
  </div>
);
// eslint-disable-next-line
Results.defaultProps = { currentGifs: [] };

Results.propTypes = {
  currentGifs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;

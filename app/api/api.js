import fetch from 'isomorphic-fetch';

export default (search) => {
  if (!search) {
    throw new Error('Cannot read property \'data\' of undefined');
  }
  // get data from giphy api
  // eslint-disable-next-line
  return fetch(`http://api.giphy.com/v1/gifs/search?api_key=iy5kPHVlbDexRE46UhbuiwvOr3fej1Af&q=${search.replace(' ', '+')}`)
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);
};

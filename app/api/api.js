import fetch from 'isomorphic-fetch';

export default (search) => {
  // ternary for trending or search
  const trendOrSearch = !search ?
    'https://api.giphy.com/v1/gifs/trending?api_key=iy5kPHVlbDexRE46UhbuiwvOr3fej1Af' :
    `https://api.giphy.com/v1/gifs/search?api_key=iy5kPHVlbDexRE46UhbuiwvOr3fej1Af&q=${search.replace(' ', '+')}`;

    // get data from giphy api
  // eslint-disable-next-line
  return fetch(trendOrSearch)
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);
};

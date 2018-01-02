import fetch from 'isomorphic-fetch';

export default (search) => {
  // ternary for trending or search
  const trendOrSearch = !search ?
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=iy5kPHVlbDexRE46UhbuiwvOr3fej1Af') :
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=iy5kPHVlbDexRE46UhbuiwvOr3fej1Af&q=${search.replace(' ', '+')}`);

    // get data from giphy api
  // eslint-disable-next-line
  return trendOrSearch
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);
};

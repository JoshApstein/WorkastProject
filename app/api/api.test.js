import expect from 'expect';
import 'babel-polyfill';
import fetchGifs from './api';

describe('api call', () => {
  it('should return data', async () => {
    const data = await fetchGifs('dog');
    expect(data).toHaveProperty('data');
  });
});

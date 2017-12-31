import expect from 'expect';
import fetchGifs from './api';

describe('api call', () => {
  it('should return error if no search term provided', () => {
    expect(fetchGifs('')).toEqual(new Error('No search term provided'));
  });
  it('should return data if term provided', async () => {
    const data = await fetchGifs('dog');
    expect(data).toHaveProperty('data');
  });
});

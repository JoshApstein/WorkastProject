import expect from 'expect';
import React from 'react';
import configureStore from 'redux-mock-store';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './SearchBar';
import { fetchGifsRequest, changeSearchValue } from '../actions/action';

configure({ adapter: new Adapter() });

describe('SearchBar Container', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = configureStore()({ searchTerm: '' });
    wrapper = mount(<SearchBar
      store={store}
      fetchGifsRequest={fetchGifsRequest}
      changeSearchValue={changeSearchValue}
    />);
  });

  it('calls changesearchvalue on every change', () => {
    wrapper.find('#searchterm')
      .simulate('change', { target: { value: 'dogs' } });
    expect(store.getActions()).toEqual([{ type: 'CHANGE_SEARCH_VALUE', val: 'dogs' }]);
  });
  it('calls fetchgifsrequest on every submit', () => {
    wrapper.find('#searchbar').simulate('submit');
    expect(store.getActions()).toEqual([{ type: 'FETCH_GIFS_REQUEST', term: '' }]);
  });
});

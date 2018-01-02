import expect from 'expect';
import 'raf/polyfill';
import React from 'react';
import configureStore from 'redux-mock-store';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pages from './Pages';
import { changePage } from '../actions/action';

configure({ adapter: new Adapter() });

describe('Pages Container', () => {
  let store;
  const makeWrapper = (pageStart) => {
    store = configureStore()({ gifsLength: 25, page: pageStart });
    return mount(<Pages
      store={store}
      changePage={changePage}
    />);
  };

  it('calls changePage on prev', () => {
    makeWrapper(2).find('a').first().simulate('click');
    expect(store.getActions()).toEqual([{ currPage: 1, type: 'CHANGE_PAGE' }]);
  });
  it('calls changePage on number', () => {
    makeWrapper(1).find('a').at(2).simulate('click');
    expect(store.getActions()).toEqual([{ currPage: 2, type: 'CHANGE_PAGE' }]);
  });
  it('calls changePage on next', () => {
    makeWrapper(2).find('a').at(4).simulate('click');
    expect(store.getActions()).toEqual([{ currPage: 3, type: 'CHANGE_PAGE' }]);
  });
});

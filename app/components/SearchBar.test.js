import React from 'react';
import 'raf/polyfill';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import SearchBar from './SearchBar';
/* global jest:false */

configure({ adapter: new Adapter() });

describe('SearchBar Component', () => {
  it('always renders a form', () => {
    const forms = shallow(<SearchBar changeSearchValue={jest.fn()} fetchGifsRequest={jest.fn()} searchTerm="" />).find('form');
    expect(forms.length).toBe(1);
  });
});

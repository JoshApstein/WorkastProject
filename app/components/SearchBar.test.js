import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import SearchBar from './SearchBar';

configure({ adapter: new Adapter() });

describe('SearchBar Component', () => {
  it('always renders a form', () => {
    const forms = shallow(<SearchBar />).find('form');
    expect(forms.length).toBe(1);
  });
});

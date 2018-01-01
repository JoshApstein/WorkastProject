import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import NoSearch from './NoSearch';

configure({ adapter: new Adapter() });

describe('NoSearch Component', () => {
  it('always renders an h1', () => {
    const h1s = shallow(<NoSearch />).find('h1');
    expect(h1s.length).toBe(1);
  });
});

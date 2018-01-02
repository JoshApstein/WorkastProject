import React from 'react';
import 'raf/polyfill';
import { configure, shallow } from 'enzyme';
import { Pagination } from 'react-bootstrap';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import Pages from './Pages';

configure({ adapter: new Adapter() });

describe('Pages Component', () => {
  const wrapper = shallow(<Pages gifsLength={1} page={1} changePage={() => {}} />);
  it('always renders a div', () => {
    expect(wrapper.find('div').length).toBe(1);
  });
  it('always renders Pagination child', () => {
    expect(wrapper.children().find(Pagination).length).toBe(1);
  });
});

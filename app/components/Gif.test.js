import React from 'react';
import 'raf/polyfill';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import Gif from './Gif';

configure({ adapter: new Adapter() });

describe('Gif Component', () => {
  it('always renders an a tag', () => {
    const a = shallow(<Gif imgSrc="src" altText="alt" link="href" />);
    expect(a.length).toBeGreaterThan(0);
  });
});

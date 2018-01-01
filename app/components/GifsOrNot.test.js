import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import GifsOrNot from './GifsOrNot';
import NoSearch from './NoSearch';
import Results from './Results';

configure({ adapter: new Adapter() });

describe('GifsOrNot Component', () => {
  it('always renders a div', () => {
    const div = shallow(<GifsOrNot />).find('div');
    expect(div.length).toBeGreaterThan(0);
  });
  it('renders Results when hasSearched is true', () => {
    expect(shallow(<GifsOrNot hasSearched />).find(Results).length).toBe(1);
  });
  it('renders NoSearch when hasSearched is false', () => {
    expect(shallow(<GifsOrNot hasSearched={false} />).find(NoSearch).length).toBe(1);
  });
});

import React from 'react';
import 'raf/polyfill';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import App from '../components/App';
import SearchBar from '../containers/SearchBar';
import Results from '../containers/Results';
import { fetchGifsRequest } from '../actions/action';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  // lets us reset App after each test
  let shallowApp;
  const app = () => {
    if (!shallowApp) {
      shallowApp = shallow(<App fetchGifsRequest={fetchGifsRequest} />);
    }

    return shallowApp;
  };

  beforeEach(() => {
    shallowApp = undefined;
  });

  // app should always render a div
  it('always returns a div', () => {
    expect(app().find('div').length).toBeGreaterThan(0);
  });

  describe('The rendered div', () => {
    it('should have two children', () => {
      expect(app().children().length).toEqual(2);
    });
    it('should render a search bar', () => {
      expect(app().children().find(SearchBar).length).toEqual(1);
    });
    it('should render results', () => {
      expect(app().children().find(Results).length).toEqual(1);
    });
  });
});

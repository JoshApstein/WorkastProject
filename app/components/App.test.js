import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import App from './App';
// import SearchBar from './SearchBar';
// import Content from './Content';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  // lets us reset App after each test
  let shallowApp;
  const app = () => {
    if (!shallowApp) {
      shallowApp = shallow(<App />);
    }
    return shallowApp;
  };

  beforeEach(() => {
    shallowApp = undefined;
  });

  // app should always render a div
  it('always returns a div', () => {
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  describe('The rendered div', () => {
    it('should have two children', () => {
      expect(app().children().length).toEqual(2);
    });
    xit('should render a search bar', () => {
    //   expect(app().children().find(SearchBar).length).toEqual(1);
    });
    xit('should render main area', () => {
    //   expect(app().children().find(Content).length).toEqual(1);
    });
  });
});

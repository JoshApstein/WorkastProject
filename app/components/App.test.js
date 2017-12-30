import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import App from './App';

configure({ adapter: new Adapter() });

describe('App Component', () => {
    // lets us keep track of current props/context as well as cleaning it after each test
    let props;
    let mountedApp;
    const app = () => {
        if (!mountedApp) {
            mountedApp = mount(
                <App {...props} />
            );
        }
        return mountedApp;
    }

    beforeEach(() => {
        props = {};
        mountedApp = undefined;
    });

    // app should always render a div
    it('always returns one div', () => {
        const divs = app().find('div');
        
        expect(divs.length).toEqual(1);
    });

    // expect that div to render other components... 
});
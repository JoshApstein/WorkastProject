import React from 'react';
import 'raf/polyfill';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import Results from './Results';
import Pages from '../containers/Pages';
import Gif from './Gif';

configure({ adapter: new Adapter() });

describe('Results Component', () => {
  const arrayOfGifs = [
    {
      images: {
        original: { url: 'https://media2.giphy.com/media/IcifS1qG3YFlS/200.webp#0-grid' },
      },
      id: 1,
      url: 'url',
      title: 'title',
    },
    {
      images: {
        original: { url: 'https://media2.giphy.com/media/vbD9OoDgUOpkk/200.webp#1-grid1' },
      },
      id: 2,
      url: 'url',
      title: 'title',
    },
  ];
  const wrapper = shallow(<Results altText="alt" link="href" currentGifs={arrayOfGifs} />);
  it('always renders a div', () => {
    const div = wrapper.find('div');
    expect(div.length).toBeGreaterThan(0);
  });
  it('renders arrayLengths amount of Gif components', () => {
    const gifs = wrapper.find(Gif);
    expect(gifs.length).toBe(2);
  });
  it('renders Pages compoonent if gifs were found', () => {
    expect(wrapper.children().find(Pages).length).toBe(1);
  });
  it('renders Pages compoonent if gifs were not found', () => {
    const noGifsWrapper = shallow(<Results altText="alt" link="href" currentGifs={[]} />);
    expect(noGifsWrapper.children().find(Pages).length).toBe(0);
  });
});

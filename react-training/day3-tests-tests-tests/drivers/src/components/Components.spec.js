import 'jsdom-global/register';

import React from 'react';
import ReactDOM from 'react-dom';

import {Title, SimpleGallery} from './Components';

import {expect} from 'chai';

const renderComp = comp => {
  const div = document.createElement('div');
  ReactDOM.render(comp, div);
  return div;
};

const createTitleDriver = wrapper => ({
  getText: () => wrapper.querySelector('h1').textContent
});

const createImageViewDriver = wrapper => ({
  getImage: () => wrapper.querySelector('.image-view')
});

const createSimpleGalleryDriver = wrapper => ({
  getImagesSources: () => Array.from(wrapper.querySelectorAll('img')).map(e => e.src)
});

describe('components', () => {
  describe('title', () => {
    it('should render the passed title', () => {
      const div = renderComp(<Title text='bob'/>);
      const driver = createTitleDriver(div);
      expect(driver.getText()).to.eql('bob');
    });
  });

  describe('simple gallery', () => {
    it('should render images given', () => {
      const imgs = ['a.png', 'b.png'];
      const wrapper = renderComp(<SimpleGallery images={imgs}/>);
      const driver = createSimpleGalleryDriver(wrapper);
      expect(driver.getImagesSources()).to.eql(imgs);
    });
  });

  // describe('special button', () => {
  //   it('should call the normal handler when clicked', () => {

  //   });

  //   it('BONUS: should call the normal handler when specially clicked', () => {

  //   });
  // });

});

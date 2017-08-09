import {expect} from 'chai';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {useFakeTimers, spy} from 'sinon';
import {noop, map} from 'lodash/fp';
import RgbWidget from './RgbWidget';
import constants from '../../constants';


describe('RgbWidget', () => {
  const createWidget = props => ReactTestUtils.renderIntoDocument(React.createElement(RgbWidget, props));
  let clock;

  const parseRgbColor = colorStr => {
    const colors = map(parseInt, colorStr.replace('rgb(', '').replace(')', '').split(','));
    return {
      red: colors[0],
      green: colors[1],
      blue: colors[2]
    };
  };

  beforeEach(() => {
    clock = useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it('should render', () => {
    const RgbWidget = createWidget({});
    expect(RgbWidget).to.be.ok;
  });

  describe('mouseEnter', () => {
    it('should report action', () => {
      const reportActionSpy = spy();
      const rgbWidget = createWidget({reportAction: reportActionSpy});
      const triggerElement = ReactTestUtils.findRenderedDOMComponentWithClass(rgbWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(triggerElement, {});

      const reportArgs = reportActionSpy.args[0][0];
      expect(reportArgs.widget).to.equal(RgbWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('mouseEnter');
      expect(reportArgs.value).to.equal('(0,0,0)');
    });

    it('should not change color on mouse enter', () => {
      const rgbWidget = createWidget({reportAction: noop});
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rgbWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});
      console.log(parseRgbColor(visualElement.style.backgroundColor));
      const color = parseRgbColor(visualElement.style.backgroundColor); // you can use hex if you prefer
      expect(color.red).to.equal(0);
      expect(color.green).to.equal(0);
      expect(color.blue).to.equal(0);
    });

    it('should change color on mouse enter after given time ', () => {
      const rgbWidget = createWidget({reportAction: noop});
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rgbWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});

      clock.tick(constants.WIDGET_DELAY);

      const color = parseRgbColor(visualElement.style.backgroundColor); // you can use hex if you prefer
      expect(color.red).to.be.lt(255);
      expect(color.red).to.be.lt(255);
      expect(color.red).to.be.lt(255);
    });
  });

  describe('mouse leave', () => {
    it('should stop rotating', () => {
      const rgbWidget = createWidget({reportAction: noop});
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rgbWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});
      ReactTestUtils.Simulate.mouseLeave(visualElement, {});

      clock.tick(constants.WIDGET_DELAY);
      expect(visualElement.style.backgroundColor).to.equal('rgb(1, 2, 3)');

      clock.tick(constants.WIDGET_DELAY);

      expect(visualElement.style.backgroundColor).to.equal('rgb(1, 2, 3)');
    });

    it('should report mouse leave', () => {
      const reportActionSpy = spy();
      const rgbWidget = createWidget({reportAction: reportActionSpy});
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rgbWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});
      ReactTestUtils.Simulate.mouseLeave(visualElement, {});

      const reportArgs = reportActionSpy.args[1][0];
      console.log(rgbWidget);
      expect(reportArgs.widget).to.equal(RgbWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('mouseLeave');
      expect(reportArgs.value).to.equal('(0,0,0)');
    });
  });

  describe('reset button', () => {
    it('should reset the colors', () => {
      const rgbWidget = createWidget({reportAction: noop});
      const resetButton = ReactTestUtils.findRenderedDOMComponentWithTag(rgbWidget, 'button');
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rgbWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});

      clock.tick(constants.WIDGET_DELAY);
      expect(visualElement.style.backgroundColor).to.equal('rgb(1, 2, 3)');

      ReactTestUtils.Simulate.click(resetButton);

      expect(visualElement.style.backgroundColor).to.equal('rgb(0, 0, 0)');
    });

    it('should report reset action', () => {
      const reportActionSpy = spy();
      const rgbWidget = createWidget({reportAction: reportActionSpy});
      const resetButton = ReactTestUtils.findRenderedDOMComponentWithTag(rgbWidget, 'button');

      ReactTestUtils.Simulate.click(resetButton);

      const reportArgs = reportActionSpy.args[0][0];
      expect(reportArgs.widget).to.equal(RgbWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('reset');
      expect(reportArgs.value).to.equal('{"red":0,"blue":0,"green":0}');
    });
  });

  describe('input', () => {
    it('should update color red', () => {
      const rgbWidget = createWidget({reportAction: noop});
      const inputRed = ReactTestUtils.findRenderedDOMComponentWithClass(rgbWidget, 'inputRed');
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rgbWidget, 'visual');

      inputRed.value = 30;
      ReactTestUtils.Simulate.change(inputRed);

      expect(visualElement.style.backgroundColor).to.equal('rgb(30, 0, 0)');
    });

    it('should report action', () => {
      const reportActionSpy = spy();
      const rgbWidget = createWidget({reportAction: reportActionSpy});
      const inputRed = ReactTestUtils.findRenderedDOMComponentWithClass(rgbWidget, 'inputRed');

      inputRed.value = 30;
      ReactTestUtils.Simulate.change(inputRed);

      const reportArgs = reportActionSpy.args[0][0];
      expect(reportArgs.widget).to.equal(RgbWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('inputRed');
      expect(reportArgs.value).to.equal('{"red":30,"blue":0,"green":0}');
    });
  });
});

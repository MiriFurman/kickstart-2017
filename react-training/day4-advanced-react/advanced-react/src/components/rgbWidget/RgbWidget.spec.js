import {expect} from 'chai';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {useFakeTimers, spy} from 'sinon';
import {noop, map} from 'lodash/fp';
import RgbWidget from './RgbWidget';
import constants from '../../constants';


describe.skip('RgbWidget', () => {
  const createWidget = props => ReactTestUtils.renderIntoDocument(React.createElement(RgbWidget, props));
  let clock;

  const parseRgbColor = colorStr => {
    const colors = map(colorStr.replace('rgb(', '').replace(')', '').split(','), parseInt);
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
      expect(reportArgs.value).to.equal('(255,255,255)');
    });

    it('should not change color on mouse enter', () => {
      const rgbWidget = createWidget({reportAction: noop});
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rgbWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});

      const color = parseRgbColor(visualElement.style.backgroundColor); // you can use hex if you prefer
      expect(color.red).to.equal(255);
      expect(color.green).to.equal(255);
      expect(color.blue).to.equal(255);
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
});

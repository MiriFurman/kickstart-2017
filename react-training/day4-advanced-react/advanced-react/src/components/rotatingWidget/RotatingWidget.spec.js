import {expect} from 'chai';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {useFakeTimers, spy} from 'sinon';
import RotatingWidget from './RotatingWidget';
import {noop} from 'lodash/fp';
import constants from '../../constants';


describe('RotatingWidget', () => {
  let clock;

  beforeEach(() => {
    clock = useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  const createWidget = props => ReactTestUtils.renderIntoDocument(React.createElement(RotatingWidget, props));

  it('should render', () => {
    const rotatingWidget = createWidget({reportAction: noop});
    expect(rotatingWidget).to.be.ok;
  });

  describe('mouse enter', () => {
    it('should report action', () => {
      const reportActionSpy = spy();
      const rotatingWidget = createWidget({reportAction: reportActionSpy});
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rotatingWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});

      const reportArgs = reportActionSpy.args[0][0];
      expect(reportArgs.widget).to.equal(RotatingWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('mouseEnter');
      expect(reportArgs.value).to.equal(0);
    });

    it('should not rotate on mouse enter', () => {
      const rotatingWidget = createWidget({reportAction: noop});
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rotatingWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});

      expect(visualElement.style.transform).to.equal('rotate(0deg)');
    });

    it('should rotate on mouse enter after given time ', () => {
      const rotatingWidget = createWidget({reportAction: noop});
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rotatingWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});

      clock.tick(constants.WIDGET_DELAY);
      expect(visualElement.style.transform).to.equal('rotate(5deg)');
    });
  });

  describe('mouse leave', () => {
    it('should stop rotating', () => {
      const rotatingWidget = createWidget({reportAction: noop});
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rotatingWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});
      ReactTestUtils.Simulate.mouseLeave(visualElement, {});

      clock.tick(constants.WIDGET_DELAY);
      expect(visualElement.style.transform).to.equal('rotate(5deg)');

      clock.tick(constants.WIDGET_DELAY);

      expect(visualElement.style.transform).to.equal('rotate(5deg)');
    });

    it('should report mouse leave', () => {
      const reportActionSpy = spy();
      const rotatingWidget = createWidget({reportAction: reportActionSpy});
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rotatingWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});
      ReactTestUtils.Simulate.mouseLeave(visualElement, {});

      const reportArgs = reportActionSpy.args[1][0];
      expect(reportArgs.widget).to.equal(RotatingWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('mouseLeave');
      expect(reportArgs.value).to.equal(0);
    });
  });

  describe('reset button', () => {
    it('should reset the angle', () => {
      const rotatingWidget = createWidget({reportAction: noop});
      const resetButton = ReactTestUtils.findRenderedDOMComponentWithTag(rotatingWidget, 'button');
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rotatingWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(visualElement, {});

      clock.tick(constants.WIDGET_DELAY);
      expect(visualElement.style.transform).to.equal('rotate(5deg)');

      ReactTestUtils.Simulate.click(resetButton);

      expect(visualElement.style.transform).to.equal('rotate(0deg)');
    });

    it('should report reset action', () => {
      const reportActionSpy = spy();
      const rotatingWidget = createWidget({reportAction: reportActionSpy});
      const resetButton = ReactTestUtils.findRenderedDOMComponentWithTag(rotatingWidget, 'button');

      ReactTestUtils.Simulate.click(resetButton);

      const reportArgs = reportActionSpy.args[0][0];
      expect(reportArgs.widget).to.equal(RotatingWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('reset');
      expect(reportArgs.value).to.equal(0);
    });
  });

  describe('input', () => {
    it('should update angle', () => {
      const rotatingWidget = createWidget({reportAction: noop});
      const angleInput = ReactTestUtils.findRenderedDOMComponentWithTag(rotatingWidget, 'input');
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(rotatingWidget, 'visual');

      angleInput.value = 100;
      ReactTestUtils.Simulate.change(angleInput);

      expect(visualElement.style.transform).to.equal('rotate(100deg)');
    });

    it('should report action', () => {
      const reportActionSpy = spy();
      const rotatingWidget = createWidget({reportAction: reportActionSpy});
      const angleInput = ReactTestUtils.findRenderedDOMComponentWithTag(rotatingWidget, 'input');

      angleInput.value = 100;
      ReactTestUtils.Simulate.change(angleInput);

      const reportArgs = reportActionSpy.args[0][0];
      expect(reportArgs.widget).to.equal(RotatingWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('input');
      expect(reportArgs.value).to.equal(100);
    });
  });
});

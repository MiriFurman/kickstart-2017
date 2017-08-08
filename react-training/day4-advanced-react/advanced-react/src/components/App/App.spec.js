import 'jsdom-global/register';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from './App';
import ExpandingWidget from '../expandingWidget/ExpandingWidget';
import ActionReport from '../actionReport/ActionReport';


describe('App', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('renders a title correctly', () => {
    wrapper = mount(
      <App/>,
      {attachTo: document.createElement('div')}
    );
    expect(wrapper.find('h2').length).to.eq(1);
  });

  describe('display actions', () => {
    const hoverOverWidget = appInstance => {
      const widgets = ReactTestUtils.scryRenderedComponentsWithType(appInstance, ExpandingWidget);
      const mouseTriggerElement = ReactTestUtils.findRenderedDOMComponentWithClass(widgets[0], 'visual');

      ReactTestUtils.Simulate.mouseEnter(mouseTriggerElement);
    };

    it('should contain widgets', () => {
      const appInstance = ReactTestUtils.renderIntoDocument(React.createElement(App, {}));

      const widgets = ReactTestUtils.scryRenderedComponentsWithType(appInstance, ExpandingWidget);

      expect(widgets).not.to.be.empty;
    });

    it('should display action after mouse entered a widget', () => {
      const appInstance = ReactTestUtils.renderIntoDocument(React.createElement(App, {}));
      const actionReportsBeforeMouseEnter = ReactTestUtils.scryRenderedComponentsWithType(appInstance, ActionReport);

      hoverOverWidget(appInstance);

      const actionReportsAfterMouseEnter = ReactTestUtils.scryRenderedComponentsWithType(appInstance, ActionReport);

      expect(actionReportsBeforeMouseEnter).to.be.empty;
      expect(actionReportsAfterMouseEnter).not.to.be.empty;
    });

    it('should clear actions when clear button in footer is clicked', () => {
      const appInstance = ReactTestUtils.renderIntoDocument(React.createElement(App, {}));
      const footer = ReactTestUtils.findRenderedDOMComponentWithClass(appInstance, 'Footer');
      hoverOverWidget(appInstance);

      const actionReportsBeforeClick = ReactTestUtils.scryRenderedComponentsWithType(appInstance, ActionReport);

      ReactTestUtils.Simulate.mouseEnter(footer);
      const clearActionsButton = ReactTestUtils.findRenderedDOMComponentWithClass(appInstance, 'clear-actions-button');

      ReactTestUtils.Simulate.click(clearActionsButton);

      const actionReportsAfterClear = ReactTestUtils.scryRenderedComponentsWithType(appInstance, ActionReport);
      expect(actionReportsBeforeClick).not.to.be.empty;
      expect(actionReportsAfterClear).to.be.empty;
    });
  });
});

import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import chai, {expect} from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import {ClockItem} from './App';
import {Utils} from './App';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);


describe('Clock Component', () => {
  it('should render the passed Label of the ClockItem equals to Tel Aviv', () => {
    const clockComponent = ReactTestUtils.renderIntoDocument(<ClockItem id="1" city="Tel Aviv" timezone="3" onRemove={() => 1}/>);
    const clockLabelDiv = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockCity');
    expect(clockLabelDiv.innerHTML).to.eq('Tel Aviv');
  });

  it('should render the correct time of the ClockItem equals to current time', () => {
    const clock = sinon.useFakeTimers();
    const clockComponent = ReactTestUtils.renderIntoDocument(<ClockItem id="1" city="Tel Aviv" timezone="3" onRemove={() => 1}/>);
    clock.tick(1000);
    const now = Utils.calcTime(3);
    const clockTimeDiv = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockTime');
    expect(clockTimeDiv.innerHTML).to.eq(now);
  });

  it('should call onRemove callback function when clicking ClockItem remove button', () => {
    const callback = sinon.spy();
    const clockComponent = ReactTestUtils.renderIntoDocument(<ClockItem id="1" city="Tel Aviv" timezone="3" onRemove={callback}/>);
    const removeBtn = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockRemoveBtn');
    ReactTestUtils.Simulate.click(removeBtn);
    expect(callback).to.have.been.called;
  });

  it('should update label on edit from Tel Aviv to Jerusalem', () => {
    const clockComponent = ReactTestUtils.renderIntoDocument(<ClockItem id="1" city="Tel Aviv" timezone="3" onRemove={() => 1}/>);
    let clockLabelDiv = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockCity');
    const editBtn = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockEditBtn');
    expect(clockLabelDiv.innerHTML).to.eq('Tel Aviv');
    ReactTestUtils.Simulate.click(editBtn);
    const clockInput = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockCityInput');
    const doneBtn = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockDoneBtn');
    clockInput.value = 'Jerusalem';
    ReactTestUtils.Simulate.change(clockInput);
    ReactTestUtils.Simulate.click(doneBtn);
    clockLabelDiv = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockCity');
    expect(clockLabelDiv.innerHTML).to.eq('Jerusalem');
  });

  it('should not update label on edit if input is empty', () => {
    const clockComponent = ReactTestUtils.renderIntoDocument(<ClockItem id="1" city="Tel Aviv" timezone="3" onRemove={() => 1}/>);
    let clockLabelDiv = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockCity');
    const editBtn = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockEditBtn');
    expect(clockLabelDiv.innerHTML).to.eq('Tel Aviv');
    ReactTestUtils.Simulate.click(editBtn);
    const clockInput = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockCityInput');
    const doneBtn = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockDoneBtn');
    clockInput.value = '';
    ReactTestUtils.Simulate.change(clockInput);
    ReactTestUtils.Simulate.click(doneBtn);
    clockLabelDiv = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clockCity');
    expect(clockLabelDiv.innerHTML).to.eq('Tel Aviv');
  });

});


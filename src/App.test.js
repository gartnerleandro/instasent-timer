import React from 'react';
import { mount } from 'enzyme';

import App from './App';

const startButton = 'button.button-style.start';
const stopButton = 'button.button-style.stop';
const resetButton = 'button.button-style.reset';

describe('Timer App', () => {
  it('render buttons depending of timer state', () => {
    const wrapper = mount(<App />);
  
    const startButtonElement = wrapper.find(startButton);
    expect(startButtonElement).toHaveLength(1);

    wrapper.unmount();
  });

  it('display timer', () => {
    const wrapper = mount(<App />);

    const timerDisplayElement = wrapper.find('.timer-display');

    expect(timerDisplayElement).toHaveLength(1);

    wrapper.unmount();
  });

  it('render buttons depending of timer state', () => {
    const wrapper = mount(<App />);
  
    expect(wrapper.find(startButton)).toHaveLength(1);
    expect(wrapper.find(stopButton)).toHaveLength(0);
    expect(wrapper.find(resetButton)).toHaveLength(0);

    wrapper.find(startButton).simulate('click');

    expect(wrapper.find(startButton)).toHaveLength(0);
    expect(wrapper.find(stopButton)).toHaveLength(1);
    expect(wrapper.find(resetButton)).toHaveLength(0)

    wrapper.find(stopButton).simulate('click');

    expect(wrapper.find(startButton)).toHaveLength(1);
    expect(wrapper.find(stopButton)).toHaveLength(0);
    expect(wrapper.find(resetButton)).toHaveLength(1);

    wrapper.find(resetButton).simulate('click');

    expect(wrapper.find(startButton)).toHaveLength(1);
    expect(wrapper.find(stopButton)).toHaveLength(0);
    expect(wrapper.find(resetButton)).toHaveLength(0);

    wrapper.unmount();
  });

  it('reset timer on click reset button', () => {
    const wrapper = mount(<App />);
    jest.useFakeTimers()

    expect(wrapper.state().isTimerWorking).toBe(false);
    expect(wrapper.state().isTimePaused).toBe(false);

    const startButtonElement = wrapper.find(startButton);
    startButtonElement.simulate('click');

    jest.advanceTimersByTime(1000);

    expect(wrapper.state().isTimerWorking).toBe(true);
    expect(wrapper.state().isTimePaused).toBe(false);
    expect(wrapper.state().currentTime).toBeGreaterThan(0);

    jest.advanceTimersByTime(1000);

    const stopButtonElement = wrapper.find(stopButton);
    stopButtonElement.simulate('click');

    expect(wrapper.state().isTimerWorking).toBe(true);
    expect(wrapper.state().isTimePaused).toBe(true);
    expect(wrapper.state().currentTime).toBeGreaterThan(1);

    const resetButtonElement = wrapper.find(resetButton);
    resetButtonElement.simulate('click');

    expect(wrapper.state().isTimerWorking).toBe(false);
    expect(wrapper.state().isTimePaused).toBe(false);
    expect(wrapper.state().currentTime).toBe(0);
    wrapper.unmount();
  });
});

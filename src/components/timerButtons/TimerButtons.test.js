import React from 'react';
import { shallow } from 'enzyme';

import TimerButtons from './TimerButtons';

describe('TimerButtons', () => {
  it('render only start button on first render', () => {
    const onStartPress = jest.fn();
    const onStopPress = jest.fn();
    const onResetPress = jest.fn();
  
    const wrapper = shallow(
      <TimerButtons
        onStartPress={onStartPress}
        onStopPress={onStopPress}
        onResetPress={onResetPress}
      />
    );

    const startButtonElement = wrapper.find('.start');

    expect(startButtonElement).toHaveLength(1);
  });

  it('exec onStartPress function on start button press', () => {
    const onStartPress = jest.fn();
    const onStopPress = jest.fn();
    const onResetPress = jest.fn();
  
    const wrapper = shallow(
      <TimerButtons
        onStartPress={onStartPress}
        onStopPress={onStopPress}
        onResetPress={onResetPress}
      />
    );

    const startButtonElement = wrapper.find('.start');
    startButtonElement.simulate('click');

    expect(onStartPress).toHaveBeenCalledTimes(1);
  });
});
import React, { Component } from 'react';

import TimerButtons from './components/timerButtons';
import Separator from './components/separator';

import formatTime from './utils/formatter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimerWorking: false,
      isTimePaused: false,
      startTime: 0,
      currentTime: 0,
    };
  }

  updateTimer = () => this.setState((prevState) => ({
    currentTime: Date.now() - prevState.startTime,
  }));

  onStopPress = () => {
    clearInterval(this.timer);
    this.setState({ isTimePaused: true });
  }

  onStartPress = () => {
    this.setState((prevState) => ({
      startTime: Date.now() - prevState.currentTime,
      isTimerWorking: true,
      isTimePaused: false,
    }));

    this.timer = setInterval(this.updateTimer, 10);
  };

  onResetPress = () => {
    clearInterval(this.timer);
    this.setState({
      startTime: 0,
      currentTime: 0,
      isTimerWorking: false,
      isTimePaused: false,
    });
  };

  render() {
    const { currentTime, isTimePaused, isTimerWorking } = this.state;

    const seconds = formatTime(Math.floor(currentTime / 1000) % 60);
    const minutes = formatTime(Math.floor(currentTime / 60000) % 60);
    const hours = formatTime(Math.floor(currentTime / 3600000));

    return (
      <div className="app-container">
        <div className="timer-display">
          <span className="timer-value">
            {hours}
          </span>
          <Separator />
          <span className="timer-value">
            {minutes}
          </span>
          <Separator />
          <span className="timer-value">
            {seconds}
          </span>
        </div>
        <TimerButtons
          isTimePaused={isTimePaused}
          isTimerWorking={isTimerWorking}
          onStartPress={this.onStartPress}
          onStopPress={this.onStopPress}
          onResetPress={this.onResetPress}
        />
      </div>
    );
  }
}

export default App;

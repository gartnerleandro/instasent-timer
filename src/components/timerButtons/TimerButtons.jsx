import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'antd';

import './index.scss';

const TimerButtons = ({
  onStartPress,
  onStopPress,
  onResetPress,
  isTimerWorking,
  isTimePaused,
}) => {
  return (
    <div className="buttons-container">
      {
        isTimerWorking && !isTimePaused && (
          <Button
            onClick={onStopPress}
            shape="circle"
            className="button-style stop"
          >
            Stop
          </Button>
        )
      }
      {
        (!isTimerWorking || isTimePaused) && (
          <Button
            onClick={onStartPress}
            shape="circle"
            className="button-style start"
          >
            Start
          </Button>
        )
      }
      {
        isTimerWorking && isTimePaused && (
          <Button
            onClick={onResetPress}
            shape="circle"
            className="button-style reset"
          >
            Reset
          </Button>
        )
      }
    </div>
  );
}

TimerButtons.defaultProps = {
  isTimerWorking: false,
  isTimePaused: false,
};

TimerButtons.propTypes = {
  onStartPress: PropTypes.func.isRequired,
  onStopPress: PropTypes.func.isRequired,
  onResetPress: PropTypes.func.isRequired,
  isTimerWorking: PropTypes.bool,
  isTimePaused: PropTypes.bool,
}

export default TimerButtons

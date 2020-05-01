import React from 'react';
import { timeToHours, timeToMin, timeToSec } from '../../utils/dateParser';

import './TimerInfoTable.css';

const TimerInfoTable = ({timers}: any) => {
  return (
    <div className="timerTab">
      {timers.map((timer: any, index: number) =>
        <div className={'timerTab__item ' + ((index % 2 === 0) ? 'darkBack' : '')} key={index}>
          <div className="timerTab__title">{timer.title}</div>
          <div className="timerTab__time">
            {`${timeToHours(timer.time)}:${timeToMin(timer.time)}:${timeToSec(timer.time)}`}
          </div>
        </div>)
      }
    </div>
  );
};

export default TimerInfoTable;

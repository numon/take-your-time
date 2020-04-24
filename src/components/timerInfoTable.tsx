import React from 'react';
import { timeToHours, timeToMin, timeToSec } from '../utils/dateParser';

const TimerInfoTable = ({timers}: any) => {
  return (
    <div>
      <ul>
        {timers.map((timer: any, index: number) =>
          <li key={index}>
            <b>{timer.title}</b> - {`${timeToHours(timer.time)}:${timeToMin(timer.time)}:${timeToSec(timer.time)}`}
          </li>)
        }
      </ul>
    </div>
  );
};

export default TimerInfoTable;

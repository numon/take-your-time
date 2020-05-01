import React from 'react';
import { TimerData } from '../../interfaces';
import Timer from '../Timer/Timer';

import './TimerList.css';

const TimerList = ({timerList, changeTimeInfo, deleteTimer}: any) => {
  return (
    <div className="timerList">
      {
        timerList.map((timerInfo: TimerData, i: number) =>
          <Timer
            key={i}
            updateTimer={changeTimeInfo}
            deleteTimer={deleteTimer}
            timeInfo={timerInfo}
          />
        )
      }
      <div className="timer">
        <div className="timer__title">

        </div>
        <div className="timer__time"></div>
        <div className="timer__icon"></div>
      </div>
    </div>
  );
};

export default TimerList;

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
    </div>
  );
};

export default TimerList;

import React from 'react';
import { TimerData } from '../../interfaces';
import Timer from '../Timer/Timer';
import TimerForm from '../TimerForm/TimerForm';

import './TimerList.css';

const TimerList = ({timerList, changeTimeInfo, deleteTimer, addNewTimer}: any) => {

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
      <TimerForm addNewTimer={addNewTimer}/>
    </div>
  );
};

export default TimerList;

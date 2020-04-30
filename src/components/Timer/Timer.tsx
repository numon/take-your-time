import React, { useCallback, useState } from 'react';
import { timeToHours, timeToMin, timeToSec } from '../../utils/dateParser';
import EditForm from '../EditForm/EditForm';

import './Timer.css';

function Timer({timeInfo, updateTimer, deleteTimer}: any) {

  const [ time, setTimer ] = useState(0);
  const [ intervalId, SetIntervalID ] = useState();
  const [ editForm, shotEditForm ] = useState(false);

  const handleStartTimer = useCallback(
    () => {
      if (intervalId) clearInterval(intervalId);
      let t = Date.now();
      SetIntervalID(setInterval(() => setTimer(time + Date.now() - t), 1000));
    },
    [ time, intervalId ]
  );

  const handleShowForm = useCallback(() => shotEditForm(true), []);

  const convertToSec = useCallback(timeToSec, []);
  const convertToMin = useCallback(timeToMin, []);
  const convertToHours = useCallback(timeToHours, []);

  const handleStopTimer = useCallback(
    () => {
      clearInterval(intervalId);
      updateTimer({
        id: timeInfo.id,
        time
      });
    },
    [ timeInfo.id, intervalId, time, updateTimer ]
  );

  const handleDeleteTimer = useCallback(() => {
    clearInterval(intervalId);
    deleteTimer(timeInfo.id);
  }, [timeInfo.id, intervalId, deleteTimer]);

  const showHours = convertToHours(time);
  const showMin = convertToMin(time);
  const showSec = convertToSec(time);

  return (
      <div className="timer">
        <div className="timer__title">
          {timeInfo.title} -
        <span onClick={handleShowForm}>E</span>
        {editForm && <EditForm
          timeInfo={timeInfo}
          showForm={shotEditForm}
          updateTimer={updateTimer}
          />}
        </div>
        <div className="timer__time">{showHours}:{showMin}:{showSec}</div>
        <div className="timer__icon">{timeInfo.icon}</div>
        <div className="timer__nav">
          <button onClick={handleStartTimer} className="btn">start</button>
          <button onClick={handleStopTimer} className="btn">pause</button>
          <button onClick={handleDeleteTimer} className="btn">Delete</button>
        </div>
      </div>
  );
}

export default Timer;

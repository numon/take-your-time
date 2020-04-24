import React, { useCallback, useState } from 'react';
import { timeToHours, timeToMin, timeToSec } from '../utils/dateParser';

export default function Timer({timeInfo, setTime} : any) {

  const [ time, setTimer ] = useState(0);
  const [ intervalId, SetIntervalID ] = useState();

  const handleStartTimer = useCallback(
    () => {
      if (intervalId) clearInterval(intervalId);
      let t = Date.now();
      SetIntervalID(setInterval(() => setTimer(time + Date.now() - t), 1000));
    },
    [ time, intervalId ]
  );

  const convertToSec = useCallback(timeToSec, []);
  const convertToMin = useCallback(timeToMin, []);
  const convertToHours = useCallback(timeToHours, []);

  const handleStopTimer = useCallback(
    () => {
      clearInterval(intervalId);
      setTime({
        title: timeInfo.title,
        time
      });
    },
    [ intervalId, time, setTime, timeInfo.title ]
  );

  const showHours = convertToHours(time);
  const showMin = convertToMin(time);
  const showSec = convertToSec(time);

  return (
    <div>
      <p>{timeInfo.title}-{timeInfo.icon}</p>
      <p>{showHours}:{showMin}:{showSec}</p>
      <button onClick={handleStartTimer}>start</button>
      <button onClick={handleStopTimer}>pause</button>
    </div>
  );
}

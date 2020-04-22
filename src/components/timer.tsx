import React, { useCallback, useState } from 'react';

export default function Timer({setTime}: any) {
  const [ timer, setTimer ] = useState(0);
  const [ intervalId, SetIntervalID ] = useState();

  const handleStartTimer = useCallback(
    () => {
      if (intervalId) clearInterval(intervalId);
      let t = Date.now();
      SetIntervalID(setInterval(() => setTimer(timer + Date.now() - t), 1000));
    },
    [ timer, intervalId ]
  );
  const convertToSec = useCallback(
    (time: number): number => Math.floor((time % (1000 * 60)) / 1000),
    []
  );
  const convertToMin = useCallback(
    (time: number): number => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    []
  );
  const handleStopTimer = useCallback(
    () => {
      clearInterval(intervalId);
      setTime(timer);
    },
    [ intervalId, timer, setTime ]
  );

  const showMin = convertToMin(timer) > 0 && convertToMin(timer);
  const showSec = convertToSec(timer) > 0 ? convertToSec(timer) : 0;

  return (
    <div>
      <p>{showMin && `${showMin}:`}{showSec} sec</p>
      <button onClick={handleStartTimer}>start</button>
      <button onClick={handleStopTimer}>pause</button>
    </div>
  );
}

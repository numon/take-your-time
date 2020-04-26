import React, { useCallback, useState } from 'react';
import './App.css';
import Timer from './components/timer';
import TimerForm from './components/timerForm';
import TimerInfoTable from './components/timerInfoTable';
import { TimerData } from './interfaces';


function App() {
  const [ showForm, SetShowForm ] = useState<boolean>(false);
  const [ timerList, setTimerList ] = useState<TimerData[]>([
    {
      id: 1,
      title: 'work',
      icon: 'work',
      time: 0
    },
    {
      id: 2,
      title: 'games',
      icon: 'games',
      time: 0
    }
  ]);

  const handleShowForm = useCallback((): void => SetShowForm(true), []);
  const handleHideForm = useCallback((): void => SetShowForm(false), []);

  const addNewTimer = (newTimer: TimerData) =>
    setTimerList((timers: TimerData[]): TimerData[] => [ ...timers, newTimer ]);


  const changeTimeInfo = <T extends TimerData>(timer: T): void =>
    setTimerList((timers: TimerData[]) => {
      const elseTimers: TimerData[] = [ ...timers ];
      const editIndex: number = elseTimers.findIndex(({id}) => id === timer.id);
      elseTimers[ editIndex ] = {...elseTimers[ editIndex ], ...timer};
      return [ ...elseTimers ]
    });

  const deleteTimer = (idRemove: number): void => {
    setTimerList(timers => timers.filter(({id}) => id !== idRemove))
  };

  return (

    <div className="App">
      <div>
        <TimerInfoTable timers={timerList}/>
      </div>

      <button onClick={handleShowForm}>Add timer</button>
      {showForm && <TimerForm addTimer={addNewTimer} closeForm={handleHideForm}/>}
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
}

export default App;

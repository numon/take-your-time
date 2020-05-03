import React, { useState } from 'react';
import './App.css';
import TimerInfoTable from './components/TimerInfoTable/TimerInfoTable';
import { TimerData } from './interfaces';
import TimerList from './components/TimerList/TimerList';


function App() {
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
    },
    {
      id: 3,
      title: 'games',
      icon: 'games',
      time: 0
    },
    {
      id: 4,
      title: 'games',
      icon: 'games',
      time: 0
    },
    {
      id: 5,
      title: 'games',
      icon: 'games',
      time: 0
    },
    {
      id: 6,
      title: 'games',
      icon: 'games',
      time: 0
    },
    {
      id: 6,
      title: 'games',
      icon: 'games',
      time: 0
    },
    {
      id: 8,
      title: 'games',
      icon: 'games',
      time: 0
    }

  ]);

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
      <TimerInfoTable timers={timerList}/>
      <TimerList
        timerList={timerList}
        deleteTimer={deleteTimer}
        changeTimeInfo={changeTimeInfo}
        addNewTimer={addNewTimer}
      />
    </div>
  );
}

export default App;

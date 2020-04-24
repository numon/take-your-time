import React, { useState } from 'react';
import './App.css';
import Timer from './components/timer';
import TimerForm from './components/timerForm';
import TimerInfoTable from './components/timerInfoTable';


function App() {
  const [ showForm, SetShowForm ] = useState(false);
  const [ timerList, setTimerList ] = useState([
    {
      title: 'work',
      icon: 'work',
      time: 0
    },
    {
      title: 'games',
      icon: 'games',
      time: 0
    }
  ]);

  const handleShowForm = (): void => SetShowForm(true);
  // const handleHideForm = (): void => SetShowForm(false);
  const addNewTimer = (newTimer: { title: string; icon: string; time: number; }) =>
    setTimerList(timers => [ ...timers, newTimer ]);

  const changeTimeInfo = (timer: any) => setTimerList((timers: any) => {
    // const elseTimers = timers.filter((item : any) => item.title !== timer.title);
    // const forModifyTimer = timers.find((item : any) => item.title === timer.title);
    // Object.keys(timer).forEach(key => forModifyTimer[key] = timer[key]);
    // console.log(timerList)
    // console.log([...elseTimers, forModifyTimer]);
      const elseTimers = [...timers];
      const editIndex = elseTimers.findIndex((item: any) => item.title === timer.title);
      Object.keys(timer).forEach((key: any) => elseTimers[editIndex][key] = timer[key]);
    return [...elseTimers]
  });


  return (

    <div className="App">
      <div>
       <TimerInfoTable timers={timerList} />
      </div>

      <button onClick={handleShowForm}>Add timer</button>
      {showForm && <TimerForm addTimer={addNewTimer}/>}
      {
        timerList.map((timerInfo,i) => <Timer key={i} setTime={changeTimeInfo} timeInfo={timerInfo} />)
      }
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Timer from './components/timer';

function App() {
  const [totalPlay, setTotalPlay] = useState(0);
  const [totalWork, setTotalWork] = useState(0);

  return (

    <div className="App">
      <div>
        Work: {totalWork} Play: {totalPlay}
      </div>
      Work : <Timer setTime={setTotalWork}/>
      Play : <Timer setTime={setTotalPlay}/>
    </div>
  );
}

export default App;

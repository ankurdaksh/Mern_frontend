
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CandidateForm from "./CandidateForm";




function App() {
 
  return (
    <>
       <CandidateForm/>
    </>
  );
}


export default App


// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [isRunning, setIsRunning] = useState(false);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     let interval;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const startStop = () => {
//     setIsRunning(!isRunning);
//   };

//   const reset = () => {
//     setTime(0);
//     setIsRunning(false);
//   };

//   const formatTime = () => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//   };

//   return (
//     <div className="App">
//       <h1>Stopwatch</h1>
//       <div className="timer">{formatTime()}</div>
//       <div className="buttons">
//         <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }

// export default App;

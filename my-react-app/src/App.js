import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './Myfooter';
import { useState, useEffect } from 'react';

function App() {
  setInterval(UpdateTime, 1000);
  let now = new Date().toLocaleTimeString('th-TH');
  const [time, setTime] = useState(now);
  const [num, setNum] = useState(0);

  function UpdateTime() {
    let newTime = new Date().toLocaleTimeString('th-TH');
    setTime(newTime);
  }

  return (
    <div className="App">
      <MyHeader />
      <div className="App">
        <div>ขณะนี้เวลา {time}</div>
        <h2>{num}</h2>
        <button onClick={()=>setNum(num+1)}>เพิ่ม</button>
        <button onClick={()=>setNum(num-1)}>ลด</button>
        <MyFooter />
      </div>
    </div>
  );
}

export default App


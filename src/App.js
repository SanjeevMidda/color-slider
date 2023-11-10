import { useState } from 'react';
import './index.css';

function App() {
 
  const [color, setColor] = useState({background: `linear-gradient(red, green)`});

  function randomNumber(){
    return Math.floor(Math.random() * 255);
  }

  function randomColor(){
    setColor({background: `linear-gradient(rgb(${randomNumber()},${randomNumber()},${randomNumber()}), rgb(${randomNumber()},${randomNumber()},${randomNumber()}))`})
  }

  return (
    <div className="App">
      <div className="colorBar" style={color}></div>
      <div className="colorBar" style={color}></div>
      <div className="colorBar" style={color}></div>

      <input type="range" onChange={randomColor}/>
    </div>
  );
}

export default App;

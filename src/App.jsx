
import { useState } from 'react'
import './App.css'

function App() {
  
  const [bgColor, setBgColor] = useState('white')
  const changeBg = (color) => {
    setBgColor(color);
  }
  return (
    <>
      <div className="container" style={{ backgroundColor: bgColor }}>
        <h1>Background Color Changer</h1>
        <p>Click the button to change the background color.</p>
        <div className="buttons">
          <button onClick={() => changeBg('cadetblue')}> Blue</button>
          <button onClick={() => changeBg('SeaGreen')}> Green</button>
          <button onClick={() => changeBg('coral')}> Coral</button>
          <button onClick={() => changeBg('GreenYellow')}> Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App

import React, { useState } from 'react';
import './App.css';
import MainColor from './components/MainColor'
import Slider from './components/Slider'

const App = () => {
  const [saturation, setSat] = useState(
    Math.round(0 + Math.random() * (100 - 0))
  )
  const [hue, setHue] = useState(Math.round(0 + Math.random() * (300 - 0)))
  const [light, setLight] = useState(Math.round(0 + Math.random() * (100 - 0)))
  const [alpha, setAlpha] = useState(1)

  const randomize = () => {
    setSat(Math.round(0 + Math.random() * (100 - 0)))
    setHue(Math.round(0 + Math.random() * (300 - 0)))
    setLight(Math.round(0 + Math.random() * (100 - 0)))
    setAlpha(Math.random().toFixed(2))
  }

  const newColor = `hsla(${hue}, ${saturation}%, ${light}%, ${alpha})`

  return (
    <div className="App">
        <h1>TASTE THE RAINBOW</h1>
        <MainColor color={newColor} />
        <Slider 
          id="hue"
          value={hue} 
          max={100}
          step={1}
          sliderChange={e => setHue(e.target.value)}
        />
        <Slider 
          id="saturation"
          value={saturation} 
          max={100}
          step={1}
          sliderChange={e => setSat(e.target.value)}
        />
        <Slider 
          id="light"
          value={light} 
          max={100}
          step={1}
          sliderChange={e => setLight(e.target.value)}
        />
        <Slider 
          id="alpha"
          value={alpha} 
          max={1}
          step={0.01}
          sliderChange={e => setAlpha(e.target.value)}
        />
        <button onClick={randomize}>Color Change</button>
      </div>
  );
}

export default App;

import { useState } from 'react'
import tick from './assets/tick.svg'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <input 
        type="radio" name="emotion" 
        id="sad" class="input-hidden" />
      <label for="sad">
        <img className="selected" src={tick}/>
        <img className="notSelected" src={reactLogo}/>
      </label>

      <input 
        type="radio" name="emotion"
        id="happy" class="input-hidden" />
      <label for="happy">
          <img className="selected" src={tick}/>
          <img className="notSelected" src={reactLogo}/>
      </label>
    </div>
  )
}

export default App

import { useState } from 'react'
import tick from './assets/tick.svg'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="holder">
        <input 
          type="radio" name="emotion" 
          id="sad" class="input-hidden" />
        <label for="sad">
          <img className="selected" src={tick}/>
          <img className="notSelected" src={reactLogo}/>
          <p>Boom</p>
        </label>

        <input 
          type="radio" name="emotion"
          id="happy" class="input-hidden" />
        <label for="happy">
            <img className="selected" src={tick}/>
            <img className="notSelected" src={reactLogo}/>
            <p>Bang</p>
        </label>

        <input
          type="radio" name="emotion"
          id="bottom" class="input-hidden" />
        <label for="bottom">
            <img className="selected" src={tick}/>
            <img className="notSelected" src={reactLogo}/>
            <p>Wallop</p>
        </label>
      </div>
    </div>
  )
}

export default App

import tick from './assets/tick.svg'
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
          <div className="notSelected"/>
          <p>Boom</p>
        </label>

        <input 
          type="radio" name="emotion"
          id="happy" class="input-hidden" />
        <label for="happy">
            <img className="selected" src={tick}/>
            <div className="notSelected"/>
            <p>Bang</p>
        </label>

        <input
          type="radio" name="emotion"
          id="bottom" class="input-hidden" />
        <label for="bottom">
            <img className="selected" src={tick}/>
            <div className="notSelected"/>
            <p>Wallop</p>
        </label>
      </div>
    </div>
  )
}

export default App

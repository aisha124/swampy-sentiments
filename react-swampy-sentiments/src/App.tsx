import React from 'react';
import './App.css'
import CurrentDate from './components/Date';
import Moods from './components/Moods';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='currentDate'>
          <CurrentDate/>
        </div>
        <h1 className='Header'>How are you feeling today?</h1>
        <Moods/>
      </header>
    </div>
  );
}

export default App;

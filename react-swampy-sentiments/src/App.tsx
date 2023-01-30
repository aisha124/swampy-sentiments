import React from 'react';
import './App.css'
import CurrentDate from './components/Date';
import Moods from './components/Moods';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Swampy'>Swampy Sentiments</h1>
        <div className='currentDate'>
          <CurrentDate/>
        </div>
        <img
                className='layers'
                src={process.env.PUBLIC_URL + "/assets/layers.png"}
                alt="Ogres have layers"
            />

        <h1 className='Header'>Which layer are you feeling today?</h1>
        <Moods/>
      </header>
    </div>
  );
}

export default App;

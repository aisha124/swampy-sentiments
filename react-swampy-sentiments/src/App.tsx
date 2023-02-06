import React from 'react';
import './App.css'
import CurrentDate from './components/Date';
import Moods from './components/Moods';
import PastMoodsList from './components/PastMoodsList';
import MoodDistributionChart from './components/MoodDistributionChart';


function App() {
  return (
    <div className="App">
        <h1 className='Swampy'>Swampy Sentiments</h1>
        <div className='currentDate'>
          < CurrentDate />

        </div>
        <img
                className='layers'
                src={process.env.PUBLIC_URL + "/assets/layers.png"}
                alt="Ogres have layers"
            />

        <h1 className='Header'>Which layer are you feeling today?</h1>
        <Moods/>
        <PastMoodsList/>
        <MoodDistributionChart/>
    </div>
  );
}

export default App;

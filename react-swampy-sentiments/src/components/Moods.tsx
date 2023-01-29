import React from 'react';
import '../Mood.css'

function Moods() {
  return (
    <div className='moodContainer'>
        <div className='happyContainer'>
            <img
                className='happy'
                src={process.env.PUBLIC_URL + "/assets/happy.png"}
                alt="Happy Shrek"
            />
            <h1 className='moodHeader'>Happy</h1>
        </div>
        <div className='contentContainer'>
            <img
                className='content'
                src={process.env.PUBLIC_URL + "/assets/content.png"}
                alt="Content Fiona"
            />
            <h1 className='moodHeader'>Content</h1>
        </div>
        <div className='inLoveContainer'>
            <img
                className='inLove'
                src={process.env.PUBLIC_URL + "/assets/inlove.png"}
                alt="in Love Puss in Boots"
            />
            <h1 className='moodHeader'>In Love</h1>
        </div>
        <div className='mehContainer'>
            <img
                className='meh'
                src={process.env.PUBLIC_URL + "/assets/meh.png"}
                alt="meh Donkey"
            />
            <h1 className='moodHeader'>Meh</h1>
        </div>
        {/* <div className='sadContainer'>
            <img
                className='sad'
                src={process.env.PUBLIC_URL + "/assets/sad.png"}
                alt="sad Donkey"
            />
        </div> */}
        <div className='awfulContainer'>
            <img
                className='awful'
                src={process.env.PUBLIC_URL + "/assets/awful.png"}
                alt="awful gingy"
            />
            <h1 className='moodHeader'>Sad</h1>
        </div>

        <div className='angryContainer'>
            <img
                className='angry'
                src={process.env.PUBLIC_URL + "/assets/angry.png"}
                alt="angry farquad"
            />
            <h1 className='moodHeader'>Angry</h1>
        </div>
    </div>
  );
}

export default Moods;

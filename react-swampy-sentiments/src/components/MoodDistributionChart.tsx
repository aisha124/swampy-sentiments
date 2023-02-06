import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { database, app } from "../firebase";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

const MoodDistributionChart = () => {
  const [moodData, setMoodData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const date = new Date().toDateString();
      const moodRef = ref(db, `/entry/${date}`);

      onValue(moodRef, (snapshot) => {
        const data = snapshot.val();
        const moodCount: { [key: string]: number }  = {}; 
        Object.values(data).forEach((value, index, array) => {
            const mood = value as { selectedMood: string };
          if (!moodCount[mood.selectedMood]) {
            moodCount[mood.selectedMood] = 0;
          }
          moodCount[mood.selectedMood] += 1;
        });
        setMoodData(moodCount);
      });
    };
    fetchData();
  }, []);

  const chartOptions = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Mood Distribution'
    },
    series: [{
      name: 'Mood',
      data: Object.entries(moodData).map(([mood, count]) => [mood, count])
    }]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default MoodDistributionChart;

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBvomVjtxtZwDNrHPWV_b6n4Rq9htvqRsA",
  authDomain: "swampy-sentiments-5e0b6.firebaseapp.com",
  projectId: "swampy-sentiments-5e0b6",
  storageBucket: "swampy-sentiments-5e0b6.appspot.com",
  messagingSenderId: "56045351157",
  appId: "1:56045351157:web:3dce708a100fd0f85455bc",
  measurementId: "G-7K7TCC469L",
  databaseURL: "https://swampy-sentiments-5e0b6-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
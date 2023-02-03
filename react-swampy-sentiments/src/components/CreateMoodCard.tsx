import React, { useState } from "react";
import { database, app } from "../firebase";
import { getDatabase, ref, push, set } from 'firebase/database'
import './CreateMoodCard.css'
import CurrentDate from './Date';

interface Props {
  closeModal: boolean;
}

const CreateMoodCard = ({closeModal}: {closeModal: (arg: boolean) => void}) => {
  const db = getDatabase(app);
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addEntry = () => {
    const date = new Date().toDateString(); // Use the date string as the key
    const entryRef = ref(db, `/entry/${date}`); // Use the date string as the key in the ref
    const entry = {
      note,
    };
    set(entryRef, entry); // Use set instead of push to set the value at the key
  };

  // const addEntry = () => {
  //   const entryRef = ref(db, "/entry");
  //   const entry = {
  //     journalEntry,
  //     date: new Date().toString(),
  //   };
  //   push(entryRef, entry);
  //   };


  return (
  <div className="formBackground">
     <div className="formContainer">
        <form>
          <div className= "closeButton">
            <button type="button" onClick={() => closeModal(false)}>X</button>
          </div>
          <div className= "Date">
            <CurrentDate />
          </div>

          <div className= "noteInput">
            <h1 >Your Note:</h1>
          </div>
          <div className= "textInput">
              <input type="text"  placeholder="Add a note..." onChange={handleSubmit} />
          </div>
          <div className = "footer">
            <div className = "submitButton">
              <button type="button" onClick={addEntry}> Save </button>
            </div>
          </div>
          
        </form>
    </div>
  </div>
  );
};

export default CreateMoodCard;

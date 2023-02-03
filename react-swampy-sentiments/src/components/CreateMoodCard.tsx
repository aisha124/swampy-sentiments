import React, { useState } from "react";
import { database, app } from "../firebase";
import { getDatabase, ref, push } from 'firebase/database'
import './CreateMoodCard.css'

interface Props {
  closeModal: boolean;
}

const CreateMoodCard = ({closeModal}: {closeModal: (arg: boolean) => void}) => {
  const db = getDatabase(app);
  const [journalEntry, setJournalEntry] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJournalEntry(e.target.value);
  };

  const addEntry = () => {
    const entryRef = ref(db, "/entry");
    const entry = {
      journalEntry,
    };
    push(entryRef, entry);
    };


  return (
  <div className="formBackground">
     <div className="formContainer">
        <form>
          <div className= "closeButton">
            <button type="button" onClick={() => closeModal(false)}>X</button>
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

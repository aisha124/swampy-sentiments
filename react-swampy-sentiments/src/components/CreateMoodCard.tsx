import React, { useState } from "react";
import { database, app } from "../firebase";
import { getDatabase, ref, push } from 'firebase/database'


const CreateMoodCard = () => {
  const db = getDatabase(app);
  const [journalEntry, setJournalEntry] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJournalEntry(e.target.value);
  };

  const addEntry = () => {
    const entryRef = ref(db, "/entry");
    const entry = {
      journalEntry,
      done: false,
    };
    push(entryRef, entry);
    };


  return (
    <form>
      <input type="text" onChange={handleSubmit} />
      <button type="button" onClick={addEntry}></button>
    </form>
  );
};

export default CreateMoodCard;

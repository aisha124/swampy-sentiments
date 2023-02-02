import React, { useState } from "react";
import { database, app } from "../firebase";
import { getDatabase, ref, push } from 'firebase/database'


const CreateMoodCard = () => {
  const db = getDatabase(app);
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setName(event.currentTarget.value);
  };

  const addTodo = () => {
    const todoRef = ref(db, "/todos");
    const todo = {
      name,
      done: false,
    };
    push(todoRef, todo);
    };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateMoodCard;

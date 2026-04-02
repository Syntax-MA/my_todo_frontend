import { useState, useEffect, useContext } from "react";
import { CurrentList } from "../pages/TodoApp";


export default function InputSection() {
  const [newTask, setNewTask] = useState("");
  const [ todoData, setTodoData ] = useContext(CurrentList)

  async function handleClick() {
    const url = "http://127.0.0.1:8000/todos";
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTask,
        completed: false,
        tag: "fun",
        user_id: 1,
      }),
    };

    try {
      const res = await fetch(url, req);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const result = await res.json();
      setTodoData(t => [...t, result])

    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      Neue Aufgabe:
      <input
        type="text"
        placeholder="Mama Anrufen..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input type="date" />
      <button onClick={handleClick}>hinzufügen</button>
    </div>
  );
}

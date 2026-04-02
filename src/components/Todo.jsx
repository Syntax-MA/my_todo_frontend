import {useContext} from 'react'
import { CurrentList } from '../pages/TodoApp';

export default function Todo({taskData}) {

  const [ todoData, setTodoData ] = useContext(CurrentList)

    async function deleteTodo() {
    const url = `http://127.0.0.1:8000/todos/${taskData.id}`;
    const req = {
      method: "DELETE"
    };

    try {
      const res = await fetch(url, req);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      setTodoData(t => t.filter(e => e.id != taskData.id)) // check alternative Syntax

    } catch (error) {
      console.error(error.message);
    }
  }

    async function updateCompleted() {
    const url = `http://127.0.0.1:8000/todos/${taskData.id}`;;
    const req = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: false
      }),
    };

    try {
      const res = await fetch(url, req);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

    } catch (error) {
      console.error(error.message);
    }
  }

  

  return (
    <div>
      <p>
          <input type="checkbox" value={taskData.completed} onChange={updateCompleted}/>
          {taskData.title}
          <button>ändern</button>
          <button onClick={deleteTodo}>löschen</button>
        </p>
    </div>
  )
}

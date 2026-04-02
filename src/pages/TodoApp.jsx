import InputSection from "../components/InputSection";
import TodoList from "../components/TodoList";
import { useEffect, useState, useContext, createContext } from "react";

const url = "http://127.0.0.1:8000/todos";

// context liste
export const CurrentList = createContext()


// Start Komponente
export default function TodoApp() {

  // state Liste
  const [ todoData, setTodoData ] = useState(null)

  // laden der Liste bei aufruf der
  useEffect(() => {
    async function fetchTodoList(url) {
      const data = await fetch(url);
      const todoList = await data.json();
      setTodoData(todoList)
    }
    fetchTodoList(url);
  }, []);

  return (
    <div>
      <CurrentList value={[ todoData, setTodoData ]}>
        <InputSection />
        {todoData && <TodoList todoList={todoData} />}
      </CurrentList>
    </div>
  );
}

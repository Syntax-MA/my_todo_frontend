import Todo from "./Todo";
import { useContext } from "react";
import { CurrentList } from "../pages/TodoApp";

export default function TodoList({todoList}) {

const list = useContext(CurrentList)[0]

  return (
    <>
      <p>Start List:</p>
      <ul>
      {list.map(t => <li key={t.id}><Todo taskData={t}/></li>)}
      </ul>
    </>
  );
}

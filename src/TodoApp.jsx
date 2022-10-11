import React from "react";
import { useGetTodosQuery } from "./store/apis";

const TodoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();
  return (
    <>
      <h1>Todosd- RTK Query</h1>
      <hr />
      <h4>Loading: {isLoading ? "true" : "false"}</h4>

      <pre>...</pre>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE" : "Pending"}</strong>
            {todo.title}
          </li>
        ))}
      </ul>
      <button>Next Todo</button>
    </>
  );
};

export default TodoApp;

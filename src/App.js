import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoListHandler = (title) => {
    setTodos((prevTodosList) => {
      return [...prevTodosList, { id: Math.random().toString(), title: title }];
    });
  };

  return (
    <div className="App container py-5">
      <TodoForm addTodoListHandler={addTodoListHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

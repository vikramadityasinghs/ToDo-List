import { useState } from "react";
import { render } from "react-dom";
import { TodoListItem } from "./Todo/TodoListItem";
import Todo from "./Todo/types.s";
import { TodoList } from "./Todo/TodoList";
import { AddTodoForm } from "./Todo/AddTodoForm";

import "../src/styles.css";
type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string) => void;

const initialTodos: Todo[] = [
  {
    text: "Make Checklist!",
    complete: true,
  },
  {
    text: "Add first To-Do item",
    complete: false,
  },
];

function Notes() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div className="heading main">
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </div>
    </>
  );
}

export default Notes;

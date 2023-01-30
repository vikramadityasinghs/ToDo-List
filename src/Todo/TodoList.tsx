import React from "react";
import { TodoListItem } from "./TodoListItem";
import Todo from "./types.s";

type ToggleTodo = (selectedTodo: Todo) => void;

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul className="todoListItem">
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

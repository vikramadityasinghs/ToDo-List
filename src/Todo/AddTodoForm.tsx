import React, { ChangeEvent, FormEvent, useState } from 'react';
import "../../src/styles.css";
type AddTodo = (text: string) => void; 

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className='formfield'>
      <input className="Inputfield" placeholder='Enter Task Here!' type="text" value={newTodo} onChange={handleChange} />
      <button className="button-style" type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
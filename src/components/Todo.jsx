/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from 'react'
import '../style.css'

function generateId() {
  return Math.floor(Math.random() * 10);
}

function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodo((todo) =>
      todo.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodo((todos) => todo.filter((x) => x.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">

        {todo.map(({ text, id }) => (

          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo
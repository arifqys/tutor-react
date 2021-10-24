import { useEffect, useState } from "react";
import Todos from "./Todos";

function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const addInputHandler = () => {
    setTodos((prevState) => [...prevState, input]);
    setInput('');
  }

  return (
    <div className="App">
      <input type="text" value={input} onChange={inputHandler} />

      <button onClick={addInputHandler}>Add</button>

      {todos.length === 0 && <div>Please add input first</div>} 

      <Todos todos={todos} />
    </div>
  );
}

export default TodoList;
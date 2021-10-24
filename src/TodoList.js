import { useEffect, useRef, useState } from "react";
import Todos from "./Todos";

function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const addInputHandler = () => {
    setTodos((prevState) => [...prevState, input]);
    setInput('');
  }

  return (
    <div className="App">
      <input ref={ref} type="text" value={input} onChange={inputHandler} />

      <button onClick={addInputHandler}>Add</button>

      {todos.length === 0 && <div>Please add input first</div>} 

      <Todos todos={todos} />
    </div>
  );
}

export default TodoList;
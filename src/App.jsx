import { useCallback, useReducer, useState } from "react";
import "./App.css";
import Todos from "./Todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  
  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, "New todo"]);
  }, [Todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}

export default App;

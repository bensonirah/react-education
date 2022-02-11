import { useReducer } from "react";
import "./App.css";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

// Should put inside service
const completeTask = (taskId, todos = []) => {
  return todos.map((todo) => {
    return todo.id === taskId ? { ...todo, complete: !todo.complete } : todo;
  });
};

// Should have reducer per domain e.g: User CRUD reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return completeTask(action.id, state);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default App;

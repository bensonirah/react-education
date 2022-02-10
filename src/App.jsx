import { createContext, useContext, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          ref={inputElement}
        />
        <h1>Render Count: {count.current}</h1>
        <button onClick={focusInput}>Focus Input</button>
      </header>
    </div>
  );
}

export default App;

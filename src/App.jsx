import { createContext, useContext, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    console.log(`Fire useEffect with value observable inputValue: ${inputValue}`);
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <h1>Tracking State Changes</h1>
      <p>
        The <span>useRef</span> Hook can also be used to keep track of previous
        state values.
      </p>
      <p>
        This is because we are able to persist <span>useRef</span> values
        between renders.
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

export default App;

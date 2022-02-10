import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

const DateContext = createContext();

function DateComponent({ date }) {
  return <span>{date}</span>;
}

function CalculationComponent({ calculation }) {
  const date = useContext(DateContext);
  return (
    <>
      <DateComponent date={date} />
      <p>The count value: {calculation}</p>
    </>
  );
}

function App() {
  const initializeDate = new Date();
  const [date, setValue] = useState(initializeDate.toLocaleTimeString());
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    console.log(count);
    let timer = setTimeout(() => {
      const newDate = new Date();
      setValue(newDate.toLocaleTimeString());
    }, 1000);

    setCalculation(() => count * 2);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <DateContext.Provider value={date}>
          <CalculationComponent calculation={calculation} />
        </DateContext.Provider>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Incement
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;

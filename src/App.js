import React from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [step, setStep] = React.useState(0);

  const date = new Date(new Date());
  date.setDate(date.getDate() + counter);

  return (
    <div className="App-header">
      <div className="counter">
        <button
          onClick={() =>
            setCounter((prev) => {
              return step !== 0 ? prev + step : prev + 1;
            })
          }
        >
          +
        </button>
        <span> count: {counter} </span>
        <button
          onClick={() =>
            setCounter((prev) => {
              return step !== 0 ? prev - step : prev - 1;
            })
          }
        >
          -
        </button>
      </div>

      <div className="step-counter">
        <button onClick={() => setStep((prev) => prev + 1)}>+</button>
        <span> step: {step} </span>
        <button
          onClick={() =>
            setStep((prev) => {
              return step === 0 ? 0 : prev - 1;
            })
          }
        >
          -
        </button>
      </div>
      <div className="date">
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

export default App;

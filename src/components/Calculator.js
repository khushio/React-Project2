import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input));
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="name"> Calculator</div>
      <input
        type="text"
        className="form-control calculator-display"
        value={input}
        readOnly
      />
      <div className="calculator-buttons">
        <div className="row">
          <button
            className="btn btn-light"
            onClick={() => handleButtonClick("C")}
          >
            C
          </button>
          <button
            className="btn btn-info"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className="btn btn-info"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="btn btn-info"
            onClick={() => handleButtonClick("*")}
          >
            *
          </button>
        </div>
        <div className="row">
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="btn btn-info"
            onClick={() => handleButtonClick("/")}
          >
            /
          </button>
        </div>
        <div className="row">
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button
            className="btn btn-info"
            onClick={() => handleButtonClick("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const handleClick = (value) => {
    // Logic to handle button click
    console.log(value);
    setInput((prev) => prev + value);
  }

  const handleClear = () => {
    // Logic to clear the input
    setInput("");
    setResult(null);
    console.log("Clear");
  }

  const handleEqual = () => {
    // Logic to evaluate the expression
    console.log("Equal");
    try {
      setInput(eval(input).toString());
      setResult(eval(input));
    } catch (error) {
      // setInput("Error");
      setResult("Error")
    } 
  }
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={input} />
      {result !== null && <div className="result">{result}</div>}
      <div>
        <button onClick={()=>handleClick("1")}>1</button>
        <button onClick={()=>handleClick("2")}>2</button>
        <button onClick={()=>handleClick("3")}>3</button>
        <button onClick={()=>handleClick("+")}>+</button>  
        <br />
        <button onClick={()=>handleClick("4")}>4</button>
        <button onClick={()=>handleClick("5")}>5</button>
        <button onClick={()=>handleClick("6")}>6</button>
        <button onClick={()=>handleClick("-")}>-</button>  
        <br />
        <button onClick={()=>handleClick("7")}>7</button>
        <button onClick={()=>handleClick("8")}>8</button>
        <button onClick={()=>handleClick("9")}>9</button>
        <button onClick={()=>handleClick("*")}>*</button>  
        <br />
        <button onClick={handleClear}>C</button>
        <button onClick={()=>handleClick("0")}>0</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={()=>handleClick("/")}>/</button>
      </div>
    </div>
  )
}

export default App

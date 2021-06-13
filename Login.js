import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "./style";


function App() {
  const [result, setResult] = useState ("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());
  function handleClick(e) {
    setResult(result.concat( e.target.name));
  }
  function del() {
    setResult(result.slice(0, result.length - 1));
  }
  function clear() {
    setResult("");
  }
  function calculate() {
    try {
      setResult(eval(result).toString())
    }
    catch (error) {
      setResult("Syntax Error")
    }

  }

  return (
    <div className="calc-app">
      <form>
        <input type = "text" value={result} ref={inputRef}/>
      </form>
      <div className = "keypad">
        <button id="clear" onClick={clear}>
          C
          </button>
        <button id="del" onClick={del}>
        &#10550;
          </button>
        <button id="oprate" name="/" onClick={handleClick}>
        &#xf7;
        </button>
        <button name="7" onClick={handleClick}>
          7
          </button>
        <button name="8" onClick={handleClick}>
          8
          </button>
        <button name="9" onClick={handleClick}>
          9
          </button>
        <button id="oprate" name="*" onClick={handleClick}>
          &times;
          </button>
        <button name="4" onClick={handleClick}>
          4
          </button>
        <button name="5" onClick={handleClick}>
          5
          </button>
        <button name="6" onClick={handleClick}>
          6
          </button>
        <button id="oprate" name="-" onClick={handleClick}>
          -
          </button>
        <button name="1" onClick={handleClick}>
          1
          </button>
        <button name="2" onClick={handleClick}>
          2
          </button>
        <button name="3" onClick={handleClick}>
          3
          </button>
        <button id="oprate" name="+" onClick={handleClick}>
          +
          </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
          </button>
          
          <button id="key">
          🔑
          </button>
        <button id="ans" onClick={calculate}>
          =
          </button>
         
      </div>
    </div>

  );
}
export default App;
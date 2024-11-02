import React from 'react'
import { useState } from 'react';
import './Calculator.css';

const SimpleCalculator = () => {

  const [expression, setExpression] = useState("");
  const [result,setResult] =useState("");

  const handleClick = (value)=> 
  {
     if(value === "C")
     {
      setExpression("");
      setResult("");
     }
     else if(value === "=")
     {
      CalculateResult();
     }
     else 
     {
      setExpression(prevExpression=> prevExpression + value)
     }
  }
 
  function CalculateResult()
  {
    const numbers = expression.split(/[\+\-\*\/]/).map(Number);
    const operators = expression.match(/[\+\-\*\/]/);

    if(numbers.length === 0) 
      return;
     
    let result = numbers[0];

       for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1]; // Next number to operate with

        switch (operator) {
            case '+':
                result += nextNumber; // Add
                break;
            case '-':
                result -= nextNumber; // Subtract
                break;
            case '*':
                result *= nextNumber; // Multiply
                break;
            case '/':
                if (nextNumber === 0) {
                    alert("Cannot divide by zero"); // Handle division by zero
                    return;
                }
                result /= nextNumber; // Divide
                break;
            default:
                break;
        }
    }

    setResult(result); // Sets the result after computation
    setExpression(""); // Optionally clear the expression after calculation
};
    
  

  return (
    <>
    
    <div className='calculator'>

        <h1>Calculator</h1>
        <div className='displayvalue'>
          {result !== "" ? ` ${result}`  : expression}
        </div>

        <div className='buttons'>

            <button onClick={(event)=>handleClick("7")} >7</button>
            <button onClick={(event)=>handleClick("8")} >8</button>
            <button onClick={(event)=>handleClick("9")} >9</button>
            <button  className='symbol' onClick={() => handleClick("/")}>/</button>

            <button onClick={(event)=>handleClick("4")} >4</button>
            <button onClick={(event)=>handleClick("5")} >5</button>
            <button onClick={(event)=>handleClick("6")} >6</button>
            <button className='symbol' onClick={() => handleClick("*")}>*</button>

            <button onClick={(event)=>handleClick("1")} >1</button>
            <button onClick={(event)=>handleClick("2")} >2</button>
            <button onClick={(event)=>handleClick("3")} >3</button>
            <button className='symbol' onClick={() => handleClick("-")}>-</button>

            <button onClick={(event)=>handleClick("0")}>0</button>
            <button onClick={(event)=>handleClick(".")}>.</button>
            <button className='ClearButton' onClick={() => handleClick("C")}>C</button>
            <button className='symbol' onClick={() => handleClick("+")}>+</button>

            <button className='equals' onClick={() => handleClick("=")}>=</button>


        </div>
    </div>
    </>
  );
};


export default SimpleCalculator
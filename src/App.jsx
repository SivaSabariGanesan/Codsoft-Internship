import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">React Calculator</h1>
      <div className="calculator">
        <div className="display">
          {input || '0'}
        </div>
        <div className="buttons">
          <button className="button" onClick={() => handleClick('1')}>1</button>
          <button className="button" onClick={() => handleClick('2')}>2</button>
          <button className="button" onClick={() => handleClick('3')}>3</button>
          <button className="button" onClick={() => handleClick('+')}>+</button>

          <button className="button" onClick={() => handleClick('4')}>4</button>
          <button className="button" onClick={() => handleClick('5')}>5</button>
          <button className="button" onClick={() => handleClick('6')}>6</button>
          <button className="button" onClick={() => handleClick('-')}>-</button>

          <button className="button" onClick={() => handleClick('7')}>7</button>
          <button className="button" onClick={() => handleClick('8')}>8</button>
          <button className="button" onClick={() => handleClick('9')}>9</button>
          <button className="button" onClick={() => handleClick('*')}>*</button>

          <button className="button" onClick={() => handleClick('0')}>0</button>
          <button className="button" onClick={handleClear}>C</button>
          <button className="button" onClick={handleDelete}>←</button>
          <button className="button" onClick={() => handleClick('/')}>/</button>

          <button className="button equal" onClick={handleCalculate}>=</button>
        </div>
      </div>
      <footer className="footer">
        Developed by{' '}
        <a href="https://www.linkedin.com/in/siva-sabari-ganesan-a-b3288a28b/" target="_blank" rel="noopener noreferrer">
          Siva Sabari Ganesan A
        </a>
      </footer>

    </div>
  );
};

export default Calculator;

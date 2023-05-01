import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import MyComponent from "./components/rendering";

function MyApp() {
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide content" : "Show content"}
      </button>
      <MyComponent isVisible={isVisible} />
    </div>
  );
}

export default MyApp;

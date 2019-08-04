import React, {useEffect, useRef} from 'react';
import logo from './logo.svg';
import {TweenMax, Power3} from 'gsap';
import './App.css';

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  useEffect(() => {
    TweenMax.to(logoItem, .8, {opacity: 1, y:-20, ease: Power3.easeOut, });
    TweenMax.to(textItem, .8, {opacity: 1, y:-20, delay:.2, ease: Power3.easeOut, });
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" 
        ref={item => {logoItem = item}}/>
        <p ref={item => {textItem = item}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

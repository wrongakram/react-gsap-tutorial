import React, {useEffect, useRef, useState} from 'react';
import {TweenMax, Power3} from 'gsap';
import './App.css';

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [circleState, setCircleState] = useState(false)

  const handleClick = () => { 
    TweenMax.to(circleRed, .8, {width: 200, height: 200,  ease: Power3.easeInOut})
    setCircleState(true);
  }

  const handleClickRevert = () => { 
    TweenMax.to(circleRed, .8, {width: 75, height: 75,  ease: Power3.easeInOut})
    setCircleState(false);
  }
 
  useEffect(() => {
    TweenMax.to(app, 0, {css:{visibility: 'visible'}})
    // TweenMax.from(circle, .8, {opacity: 0, ease: Power3.easeInOut, x: 40})
    // TweenMax.from(circleRed, .8, {opacity: 0, ease: Power3.easeInOut, x: 40, delay: .2})
    // TweenMax.from(circleBlue, .8, {opacity: 0, ease: Power3.easeInOut, x: 40, delay: .4})


    TweenMax.staggerFrom([circle, circleRed, circleBlue ], .8, {opacity: 0, ease: Power3.easeOut, x: 40}, .2 )
  },[]);

  return (
    <div 
    ref={el => {app = el}}
    className="App">
      <header className="App-header"> 
        <div className="circle-container">
          <div
          ref={el => {circle = el}}
          className="circle"></div>
          <div 
          ref={el => {circleRed = el}}
          onClick={circleState !== true ? handleClick : handleClickRevert}
          className="circle red"></div>
          <div 
          ref={el => {circleBlue = el}}
          className="circle blue"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
import React, {useRef, useEffect, useState} from 'react';
import {TweenLite} from 'gsap';

import Banner from './components/banner'
import Header from './components/header'

function App(props) {
  let main = useRef(null)

  useEffect(() => {
    TweenLite.to(main, 0, {css:{visibility: 'visible'}})
  }, []);

  return (
    <div 
    ref={el => {main = el}}
    className="main">
      <Header/>
      <Banner/>
    </div>
  );
}

export default App;
import React, {useRef, useEffect} from 'react';
import {TweenLite, Linear} from 'gsap';
import '../App.scss';

const Header = () => {
    let nav = useRef(null);

    useEffect(() => {
        TweenLite.from(nav, .6, {opacity: 0, y: -10, ease: Linear.easeOut, delay: 1} )
    })

    // USE REACT ROUTER
    return (
        <div ref={el => nav = el} className="header-container">
          {/* Use React router here */}
            <div class="wrapper">
            <div className="logo"><span>w</span>rld<span>t</span>ravlr</div>
            <nav>
                <ul>
                <li>About</li>
                <li>Pricing</li>
                <li>Work</li>
                </ul>
            </nav>
            <div className="contact">Let's Talk</div>
            </div>
        </div>
    )
}


export default Header
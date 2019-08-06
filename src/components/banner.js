import React, {useEffect, useRef, useState} from 'react';
import {TweenMax, Power3, TimelineLite} from 'gsap';
import '../App.scss';
import image from '../newyork.png'

const tl = new TimelineLite();


const Banner = () => {
    let bannerBG = useRef(null);

    let headline1 = useRef(null);
    let headline2 = useRef(null);
    let headline3 = useRef(null);
    let ctaButton = useRef(null);
    let message = useRef(null);
    let imageNY = useRef(null);



    useEffect(() => {
        tl.from(bannerBG, .8, {width:0, ease: Power3.easeOut})
        .staggerFrom([headline1, headline2, headline3, ctaButton, message], 1, {opacity: 0, y: 20, ease: Power3.easeOut}, .2)
        .from(imageNY, 1.2, {scale: 1.25, opacity: 0, ease: Power3.easeInOut, delay: -1})
    }, [])
    return (
        <>
        <section
        ref={el => {bannerBG = el}}
        className="banner-bg">
            <div className="container">
                <div className="cta">
                    <div className="headline">
                        <>
                            <h2 ref={el => headline1 = el}>This is just some text</h2>
                            <h2 ref={el => headline2 = el}>and I couldn’t figure out</h2>
                            <h2 ref={el => headline3 = el}>what to say.</h2>
                        </>
                        <>
                            <div ref={el => {ctaButton = el}} className="cta-button">
                                <span>Let's get started</span>
                            </div>
                        </>
                    </div>
                    <div ref={el => message = el} className="message">
                        <span >
                        Always wanted to travel but don’t have the right funds to? We 
                        plan the cheapest travel routes for the ultimate experience. 
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <div class="newyork">
            <div className="container">
                <div   className="image">
                    <img ref={el => imageNY = el} src={image}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner
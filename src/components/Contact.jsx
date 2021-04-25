import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ScrollAnimation from 'react-animate-on-scroll';
import content from '../content';
//import "animate.css/animate.min.css";


export default function Contact(){
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-k2d"
             id = "contact"
             style={{
                background: '#091c29',
                //#091c29
              }}
        >
            <div className="md:w-5/12 w-6/7 mx-auto flex flex-row-reverse md:flex-col items-center justify-around rounded-xl" 
                style={{
                        background: '#ffffff',
                      }}
            >
                <ScrollAnimation animateIn="fadeIn animate__delay-2s" animateOut>
                    <h2 className="text-5xl md:text-7xl font-bold ">
                    {content.contact.content}
                    </h2>
                </ScrollAnimation>
                <div className="w-6/12 md:w-3/5 flex  flex-col md:flex-row justify-between">
                {content.contact.networks.map((network) => {
                    return (
                    <a href={network.link}
                        className="md:w-70 md:h-70 w-20 h-20 bg-white m-2 flex items-center">
                        <img src={network.img} alt={network.alt}/>
                    </a>
                );   
                })}
                </div>
            </div>
           
        </div>
    );
}
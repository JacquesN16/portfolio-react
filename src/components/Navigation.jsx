import React from 'react';
import content from '../content';
import { Link as ScrollLink } from 'react-scroll';

export default function Navigation() {
  return (
    <div
      style={{
        background: '#091c29',
      }}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-k2d">
        <h1 className="text-3xl font-bold">
          {content.nav.logo}{' '}
          <span className="w-3 h-3 bg-blue-500 inline-block rounded"></span>
        </h1>
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to="contact" smooth={true}>
                <span key={index} className="text-xl mr-4">                
                  {link.text}
                </span>
              </ScrollLink>
            );
              
              
          })}
        </div>
      </div>
    </div>
  );
}
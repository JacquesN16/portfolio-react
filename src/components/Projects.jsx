import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Project() {
    return (
      <div className="min-h-screen relative items-center font-k2d border-none"
      id = "projects"
      style={{
         background: '#3b82f6',
         overflow: 'hidden'
       }}>  
        <div className="top absolute inset-x-0 top-0 h-0.5"
        style={{
            margin:'-10px'
        }}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="transform rotate-180">
               <path fill="#fff" fill-opacity="1" d="M0,224L80,218.7C160,213,320,203,480,170.7C640,139,800,85,960,101.3C1120,117,1280,203,1360,245.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
           </svg>
        </div>
        <div className='projects absolute inset-0 h-30 w-3/4 m-auto z-10'>
            <h2 className="text-5xl font-bold animate-pulse ease-in-out">
                Mes Projets
            </h2>
        </div>
        <div className='grid md:grid-cols-3 gap-4 grid-cols-1 absolute inset-0 h-40 w-3/4 m-auto'>
            <div className="text-center bg-white rounded-lg pt-2">
                <a href="https://aotp.fr" target="_blank">
                    <img src="../../assets/AOTP.png" alt="atop.fr" className="object-cover rounded m-auto"
                    style = {{
                        height: '70%',
                        width: '85%'
                    }}/>
                    <p class="text-xs mt-1 text-blue-900">
                        AOTP.fr | Un prototype de site web vitrine
                    </p>
                </a>
            </div>
            <div class="text-center bg-white rounded-lg pt-2">
                <a href="https://movie-app-jn.netlify.app" target="_blank">
                    <img src="../../assets/Movies App.png" alt="atop.fr" className="object-cover rounded m-auto"
                    style = {{
                        height: '70%',
                        width: '85%'
                    }}/>
                    <p className="text-xs mt-1 text-blue-900">
                        Movie Search app
                    </p>
                </a>
            </div>
            <div class="text-center bg-white rounded-lg pt-2">
                <a href="https://dashboard-react-jn.netlify.app" target="_blank">
                    <img src="../../assets/React Dashboard.png" alt="atop.fr" className="object-cover rounded m-auto"
                    style = {{
                        height: '70%',
                        width: '85%'
                    }}/>
                    <p className="text-xs mt-1 text-blue-900">
                        Dashboard web-app
                    </p>
                </a>
            </div>
        </div>
        
        <div class="bottom absolute inset-x-0 bottom-0"
        style={{
            margin:'-10px'
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#091c29" fill-opacity="1" d="M0,32L60,53.3C120,75,240,117,360,138.7C480,160,600,160,720,160C840,160,960,160,1080,144C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>
      </div> 
    )
}
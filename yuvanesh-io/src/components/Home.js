import '../App.css';
import React from 'react';
import {Navbar} from './Navbar'

export function Home() {
  
  return (
    <div>
      <body>
        <main id="main">
          <div className='card-container'>
            <div className='card-container-left'>
              <div className='top-left-card'>
                <h1> <i>Hey</i> I'm</h1>
              </div>
              <div className='bottom-left-card'>
                <p className='gamer'>Gamer</p>
                <p className='student'>Student</p>
              </div>
            </div>
            <div className='card-container-right'>
              <div className='top-right-card'>
                <h1 className="yuvanesh"> Yuvanesh </h1>
                <h1 className='anand'> Anand </h1>
              </div>
              <div className='bottom-right-card'>
                <p className='coder'>Coder</p>
                <p className='artist'>Artist</p>
              </div>
            </div>
          </div>
        </main>
        <Navbar/>
      </body>
    </div>
  );
}
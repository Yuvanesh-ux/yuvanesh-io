import '../App.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import home from './imgs/home.png'
import experience from './imgs/experience.png'
import React from 'react';
import { useState } from 'react';
import {
  Link
} from 'react-router-dom';

export function Home() {
    const [isOpened, setIsOpened] = useState(false)

  const toggleNav = () => {
    console.log(document.body.dataset.nav)
    document.body.dataset.nav = document.body.dataset.nav == "true" ? "false" : "true";
    if (isOpened === false) {
      document.getElementById("main").style.transform = "translateY(-50%)"
      document.getElementById("nav-links").style.transform = "translateY(0%) scale(1)"
      document.getElementById("nav-toggle").style.backgroundColor = "#3c4cc7"
      setIsOpened(true)
    }
    if (isOpened === true) {
      document.getElementById("main").style.transform = "translateY(0)"
      document.getElementById("nav-links").style.transform = "translateY(70%) scale(0.8)"
      document.getElementById("nav-toggle").style.backgroundColor = "#B5BD68"
      setIsOpened(false)
    }
  };
  
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
        <nav>
          <div id="nav-links">
            <a className='nav-link' href="#">
              <h2 className='nav-link-label'>Home</h2>
              <img className='nav-link-image' src={home}/>
            </a>
            <a className='nav-link' href="/experience">
              <h2 className='nav-link-label'>Experience</h2>
              <img className='nav-link-image' src={experience}/>
            </a>
          </div>
        </nav>

        <button id="nav-toggle" type="button" onClick={toggleNav}>
          <GiHamburgerMenu/>
        </button>
      </body>
    </div>
  );
}
import '../App.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import home from './imgs/home.png'
import experience from './imgs/experience.png'
import React from 'react';
import { useState } from 'react';

export function Navbar() {
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
            <nav>
                <div id="nav-links">
                    <a className='nav-link' href="/#">
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
        </div>
    )
}
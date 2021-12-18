import React from 'react'
// import { a } from "react-router-dom";
import './index.css'

const Navbar = () => {
    const myFunction = () => {
        var x = document.getElementById("navmenu");
        var y = document.getElementById("nav-bar")
        if (x.className === "nav-menu") {
          x.className += " active";
        } else {
          x.className = "nav-menu";
        }
        if (y.className === "navbar") {
          x.className += " active";
        } else {
          x.className = "navbar";
        }
      }
    
    const func = () => {
        var x = document.getElementById("navmenu");
        var y = document.getElementById("ham");
        x.className="nav-menu";
        y.className="hamburger";
    }
    return (
        <header className="header sticky">
            <nav className="navbar" id="nav-bar">
                <a href="#logo" className="nav-logo">KP</a>
                <ul className="nav-menu" id="navmenu">
                    <li className="nav-item">
                        <a href="/" className="nav-link" onClick={func}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" title='Projects' className="nav-link" onClick={func}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link" onClick={func}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={func}>Contact</a>
                    </li>
                </ul>
                {/* <Hamburger> */}
                    <div className="hamburger" id="ham" onClick={myFunction}>
                        <span className="bar" ></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div> 
                {/* </Hamburger> */}
                 
            </nav>
        </header>
    )
}

export default Navbar

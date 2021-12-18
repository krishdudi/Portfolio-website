import React from 'react'
import './about.css'
import coder from '../../svgs/coder.svg'
import hand from '../../svgs/hand.svg'
import Type from './Type'


const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hey!! <img src={hand} alt="hand" className="wave" /> <br/>
                    <span className="info-name">
                        I am <span className="my-name">Krishanpal Dudi</span>
                    </span>
                    <div className="typing">
                        <Type/>
                    </div>

                </div>
                <div className="about-img">
                    <img src={coder} alt="code svg"/>
                </div>
            </div>
            <div className='Social-Contact'>
                        <a href="https://www.github.com/krishdudi" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="git" className="fab fa-github fa-4x social-icon"></i>
							</div>
                        </a>
                        <a href="https://www.instagram.com/_krishxd_/" target="_blank" rel="noopener noreferrer" >
                            <div className="social-icon-div">
                                <i id="insta" className="fab fa-instagram fa-4x social-icon"></i>
							</div>
                        </a>
                        <a href="https://www.linkedin.com/in/krishanpal-dudi-a91667217/" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="linkdin" className="fab fa-linkedin-in fa-4x social-icon"></i>
							</div>
                        </a>
                        <a href="https://www.facebook.com/krishanpal.dudi.31/" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="twitter" className="fab fa-facebook fa-4x social-icon"></i>
							</div>
                        </a>
                        <a href="https://www.hackerrank.com/krishdudi001" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="twitter" className="fab fa-hackerrank fa-4x social-icon"></i>
							</div>
                        </a>
            </div>
        </div>
    )
}

export default About

import React from 'react'
import Separator from '../Separator/Separator'
import './index.css'

const Contact = () => {
    return (
        <div className="container contact">
            <Separator/>
            <label className="section-title">Contact</label>
            <div className="contact-section-left">
                <p className="contact-about">Want to get in touch ? Contact me on any of the platform</p>
                <div className='Social-Contact'>
                        <a href="https://www.github.com/krishdudi" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="git" className="fab fa-github fa-4x"></i>
							</div>
                        </a>
                        <a href="https://www.instagram.com/_krishxd_/" target="_blank" rel="noopener noreferrer" >
                            <div className="social-icon-div">
                                <i id="insta" className="fab fa-instagram fa-4x "></i>
							</div>
                        </a>
                        <a href="https://www.linkedin.com/in/krishanpal-dudi-a91667217/" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="linkdin" className="fab fa-linkedin-in fa-4x"></i>
							</div>
                        </a>
                        <a href="https://www.facebook.com/krishanpal.dudi.31/" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="twitter" className="fab fa-facebook fa-4x"></i>
							</div>
                        </a>
                        <a href="https://www.hackerrank.com/krishdudi001" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="twitter" className="fab fa-hackerrank fa-4x"></i>
							</div>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Contact

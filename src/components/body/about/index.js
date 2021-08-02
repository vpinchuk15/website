import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There 👋, I am 
                    <br /><span className="info-name">Vladimir Pinchuk</span>.
                    <br /> Enjoy scrolling through my portfolio!
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/coding.png').default} className="picture"/>
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About

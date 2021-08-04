import React from 'react'
import SocialContact from '../../common/social-contact'
import Seperator from '../../common/social-contact/seperator'
import './contact.css'
function Contact() {
    return (
        <div className="contact">
            <Seperator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Feel free to reach out on any of these platforms!</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a href={require('../../../assets/Vladimir_Pinchuk_Resume.pdf').default} Download="Vladimir_Pinchuk_Resume">
                        <i class="fi-rr-cloud-download download-icon"/>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact

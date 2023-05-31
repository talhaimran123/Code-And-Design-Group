import React from 'react'
import './contactModal.scss'
import { AiOutlineClose } from 'react-icons/ai'

const ContactModal = ({setModal}) => {
    return (
        <div className="contact-modal">
            <form className="contact-form">
                <h2>Get a Quote</h2>
                <div>
                    <input type="text" placeholder="Your first name" name="firstName" required />
                    <input type="text" placeholder="Your last name" name="lastName" required />
                </div>
                <div>
                    <input type="email" placeholder="Email" name="email" required />
                    <input type="tel" placeholder="Mobile" name="phone" required />
                </div>
                <div>
                    <textarea className='textarea' rows="4" cols="50" placeholder="Your Message" name="message" required></textarea>
                </div>
                <div>
                    <button type="submit" id="submit-btn">SUBMIT</button>
                </div>
            </form>
            <AiOutlineClose className='icon' onClick={() => setModal(false)}/>

        </div>
    )
}

export default ContactModal

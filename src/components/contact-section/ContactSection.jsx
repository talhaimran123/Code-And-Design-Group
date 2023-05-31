import React, { useState } from 'react'
import './contactSection.scss'
import ContactModal from '../contact-modal/ContactModal'

const ContactSection = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className="contact-section">
            <h2>Ready to Discuss Your Project with Our Geniuses?</h2>
            <button onClick={() => setModal(true)}>Get Started</button>
            {modal && <ContactModal setModal={setModal} />}
        </div>
    )
}

export default ContactSection

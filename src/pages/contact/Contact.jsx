import React from 'react'
import CommonSection from '../../components/commonSection/CommonSection'
import Helmet from '../../components/helmet/Helmet'
import facebook from '../../assets/images/facebook.svg'
import insta from '../../assets/images/insta.svg'
import twitter from '../../assets/images/twitter.svg'
import './contact.scss'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div>
      <Helmet title={'Contac-Us'} />
      <CommonSection title={'Contact Us'} />

      <div className="contact">

        <h2>Want to share your thoughts? Reach out to us today, as we genuinely value your feedback and look forward to connecting with you</h2>

        <div className='contact-content'>

          <div className="left-side">
            <h5>_____Write to Us</h5>
            <h2>Feel Free To Ask Us Anything</h2>
            <p>14402 W BELLFORT ST SUGAR LAND TX 77498</p>
            <p>+1 (888) 784-0464</p>
            <p>info@codeanddesigngroup.com</p>
            <p>Working Hours Mon - Fri 9 AM - 7 PM EST</p>
            <div className="icons">
              <p>Lets Connect</p>
              <div>
                <Link target='_blank' to={'https://www.facebook.com/codeanddesigngroup'}><img src={facebook} alt="facebook" className='fb' /></Link>
                <Link target='_blank' to={'https://www.instagram.com/codeanddesigngroup/'}><img src={insta} alt="instagram" className='insta' /></Link>
                <Link target='_blank' to={'https://twitter.com/info_cadg'}><img src={twitter} alt="twitter" className='twitter' /></Link>
              </div>
            </div>
          </div>  

          <div className="right-side">

            <form className="contact-form">
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

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact

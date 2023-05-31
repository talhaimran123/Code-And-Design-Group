import React from 'react'
import './newsletter.scss'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            {/* <div className="videos">
                <iframe width="380" height="250" src="https://www.youtube.com/embed/oEmQnQlEiEs" title="Client Satisfaction Matters the Most to Us" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="380" height="250" src="https://www.youtube.com/embed/syxSfCvnd_U" title="Every Word of Appreciation Motivates Us to do More" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div> */}
            <div className="text">
                <h2>Keep Yourself Updated</h2>
                <p>On the Latest Marketing Trends</p>
                <div className="form">
                    <input type="email" placeholder='Your Email Address' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter

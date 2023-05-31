import React from 'react'
import './testimonials.scss'
import { testimonialsData } from '../../assets/data/testimonialsData'
import Carousel from 'react-elastic-carousel'

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="quotes"></div>
      <Carousel itemsToShow={1} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000}>

        {
          testimonialsData.map((item, index) => (
            <div className='testimonial-card' key={index}>
              <div className="image">
                <img src={item.img} alt="testi1" />
              </div>

              <div className="content">
                <h4>Reviews</h4>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="writer">
                  <h2>{item.name}</h2>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>

    </div >
  )
}

export default Testimonials

import React from 'react'
import './serviceCard.scss'
import { Link } from 'react-router-dom'

const ServiceCard = ({ title, desc, svg, index, id }) => {
    return (
        <div className="card swiper-slide" key={index}>
            <div className="image-content">
                {/* <span className="overlay"></span> */}

                <div className="card-image">
                    {svg}
                </div>
            </div>

            <div className="card-content">
                <h2 className="name">{title}</h2>
                <p className="description">{desc}</p>
                <Link className='button' to={`/services/${id}`}>Read More</Link>
            </div>
        </div>
    )
}

export default ServiceCard

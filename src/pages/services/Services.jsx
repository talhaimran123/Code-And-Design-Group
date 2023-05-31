import React from 'react'
import { Link } from 'react-router-dom'
import CommonSection from '../../components/commonSection/CommonSection'
import Helmet from '../../components/helmet/Helmet'
import './services.scss'
import { servicePageData } from '../../assets/data/servicePageData'

const Services = () => {  
  return (
    <div>
      <Helmet title={'Services'} />
      <CommonSection title={'Services'} />

      <section className="services-section">
        <div className="head">
          <h2>Level Up Your Brands Respresentation</h2>
          <p>
            By merging imagination with technology, we help you rethink what it means to have a remarkable online
            presence. Every story we narrate, every conversation we start, and every brand we build is crafted with
            perfection
          </p>
        </div>

        {
          servicePageData.map((item, index) => (
            
            <div className={index % 2 === 0 ? 'service' : 'service reverse'} key={index}>
              <div className="image">
                <img src={item.img} alt="logo-design" />
              </div>
              <div className="content">
                <h2>{item.title}</h2>
                <p>
                  {item.desc}
                </p>
                <Link to={`/services/${item.id}`}>Learn More</Link>
              </div>
            </div>
          ))
        }

        <div className="info">
          <p>
            Do you want to grow your business but have no idea where to start? Code And Design Group is an excellent place
            to begin. We’ve built an excellent reputation by offering a diverse set of services consisting of
            individuals who bring a diverse experience to the table coming from respective professional backgrounds.
            As a result, you get measurable results that leave you ecstatic about your brand’s performance.
            And to cap it all, we don’t believe in the ‘Yes Sir’ approach. If something isn’t making sense, we’ll
            ask you to review it again. Once we take your project to the par, you’ll be glad you asked us.
            That’s one of the many qualities that set us apart from the other agencies.
          </p>
        </div>

      </section>
    </div>
  )
}

export default Services

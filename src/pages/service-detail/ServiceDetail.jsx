import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CommonSection from '../../components/commonSection/CommonSection'
import Helmet from '../../components/helmet/Helmet'
import './serviceDetails.scss'
import { serviceDetailData } from '../../assets/data/serviceDetailData'
import PackagesList from '../../components/packages-list/PackagesList'

const ServiceDetail = () => {
    const { id } = useParams()
    const [data] = useState(serviceDetailData.find(item => item.id === id))

    const { title, desc, cards, icons, infoDesc, packages } = data

    return (
        <div>
            <Helmet title={id} />
            <CommonSection title={id} />

            <section className="service-detail-section">
                <div className="head">
                    <h2>{title}</h2>
                    <p>
                        {desc}
                    </p>
                </div>

                {
                    cards.map((item, index) => (

                        <div className={index % 2 === 0 ? 'service' : 'service reverse'} key={index}>
                            <div className="image">
                                <img src={item.img} alt="logo-design" />
                            </div>
                            <div className="content">
                                <h2>{item.title}</h2>
                                <p>
                                    {item.desc}
                                </p>
                                <Link to={'/contact'}>Get In Touch</Link>
                            </div>
                        </div>
                    ))
                }

                <div className="packages-section">
                    <PackagesList packages={packages}/>
                </div>

                <div className="info">
                    <div className="icons">
                        {
                            icons?.map((item, index) => (
                                <div key={index}>
                                    <img src={item.icon} alt="react" />
                                    <h5>{item.title}</h5>
                                </div>
                            ))
                        }
                    </div>
                    <p>
                        {infoDesc}
                    </p>
                </div>

            </section>
        </div>
    )
}

export default ServiceDetail

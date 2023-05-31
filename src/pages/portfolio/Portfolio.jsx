import React from 'react'
import CommonSection from '../../components/commonSection/CommonSection'
import Helmet from '../../components/helmet/Helmet'
import PortfolioGallery from '../../components/portfolioGallery/PortfolioGallery'
import './portfolio.scss'

const Portfolio = () => {
  return (
    <div>
      <Helmet title={'Portfolio'} />
      <CommonSection title={'Portfolio'} />

      <section className='portfolio'>
        <div className="text">
          <h2>Our Work Speaks For Itself</h2>
          <p>Supreme Quality At Affordable Prices Is What Distinguishes Us From Others</p>
        </div>
        <PortfolioGallery />
      </section>
    </div>
  )
}

export default Portfolio

import React from 'react'
import PricingPackage from '../pricing-package/PricingPackage'
import './packagesList.scss'

const PackagesList = ({ packages }) => {

    return (
        <div className="packages-list">
            <div className='boxes'>
                <div className="box one"></div>
                <div className="box two"></div>
                <div className="box three"></div>
            </div>

            <div className="packages">
                {
                    packages.map(item => (
                        <PricingPackage name={item.name} details={item.details} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default PackagesList

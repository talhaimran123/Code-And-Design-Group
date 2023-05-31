import React from 'react'
import { Link } from 'react-router-dom'
import CommonSection from '../../components/commonSection/CommonSection'
import Helmet from '../../components/helmet/Helmet'

const NoMatch = () => {
  return (
    <div>
      <Helmet title={'Unknown'} />
      <CommonSection title={'Nothing To See Here'} />
      <Link to={'/'} style={{
        padding: '8px 20px',
        color: 'white',
        fontWeight: 'bold',
        background: 'var(--primary-color)',
        borderRadius: '4px',
        border: '1px white black',
        width: '210px',
        position: 'absolute',
        top: '240px',
        left: '0',
        right: '0',
        margin: 'auto'
      }}>Go Back To Home Page</Link>
    </div>
  )
}

export default NoMatch

import React from 'react'
import './Partner.css'
import { assets } from '../../assets/assets'

const Partner = () => {
  return (
    <div className='Partner'>
      <div className="Partner-heading">
        <h3>ADS Summit 2024 Partners</h3>
      </div>
      <div className="Partner-intro">
        <p>ADS is proud to partner with numerous industry leaders providing organizations with the tools to accelerate digital transformation with AI. You can reach out to our Expo partners prior to the event for more information.</p>
      </div>
      <div className="Partner-firstcat">
        <div className="Partner-cathead">
          <h5>DIAMOND PARTNER</h5>
        </div>
        <div className="Partner-catimg">
          <img src={assets.AboutRead} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partner

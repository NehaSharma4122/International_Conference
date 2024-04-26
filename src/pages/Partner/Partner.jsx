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
      <div className="Partner-line">
        <h1>_______________________________________</h1>
      </div>
      <div className="Partner-firstcat">
        <div className="Partner-cathead">
          <h5>DIAMOND PARTNER</h5>
        </div>
        <div className="Partner-catimg1">
          <img src={assets.IBM} alt="" />
        </div>
      </div>
      <div className="Partner-secondcat">
        <div className="Partner-cathead">
          <h5>PLATINUM PARTNERS</h5>
        </div>
        <div className="Partner-catimg2">
          <img src={assets.SAS} alt="" />
          <img src={assets.AIplus} alt="" />
        </div>
      </div>
      <div className="Partner-thirdcat">
        <div className="Partner-cathead">
          <h5>GOLD PARTNERS</h5>
        </div>
        <div className="Partner-catimg3">
          <div className="Partner-catimg3-r1">
            <img src={assets.Hewlett} alt="" />
            <img src={assets.nvidia} alt="" />
            <img src={assets.HPCC} alt="" />
          </div>
          <div className="Partner-catimg3-r2">
            <img src={assets.Lightning} alt="" />
            <img src={assets.xethub} alt="" />
          </div>
        </div>
      </div>
      <div className="Partner-fourthcat">
        <div className="Partner-cathead">
          <h5>SILVER PARTNERS</h5>
        </div>
        <div className="Partner-catimg4">
          <div className="Partner-catimg4-r1">
            <img src={assets.Knime} alt="" />
            <img src={assets.KansasUni} alt="" />
            <img src={assets.BostonCollege} alt="" />
          </div>
          <div className="Partner-catimg4-r2">
            <img src={assets.datacamp} alt="" />
            <img src={assets.NU} alt="" />
          </div>
        </div>
      </div>
      <div className="Partner-fifthcat">
        <div className="Partner-cathead">
          <h5>SILVER PARTNERS</h5>
        </div>
        <div className="Partner-catimg5">
          <div className="Partner-catimg5-r1">
            <img src={assets.CIOReview} alt="" />
            <img src={assets.packt} alt="" />
          </div>
          <div className="Partner-catimg5-r2">
            <img src={assets.EventBrowse} alt="" />
            <img src={assets.AIJournal} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner

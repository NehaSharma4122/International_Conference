import React from 'react'
import './Home.css'
import { LuCalendarDays } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='Home'>
      <div className="Home-heading">
        <p>ADS Conference</p>
      </div>
      <div className="Home-text">
        <h5>5th IEEE CS International Conference on</h5>
        <p>ANALYTICS AND DATA SUMMIT 2024</p>
      </div>
      <div className="Home-location">
        <div className="Home-location-timeline">
          <p><LuCalendarDays /> &nbsp; 20-23&nbsp; May,&nbsp; 2024 </p>
        </div>
        <div className="Home-location-location">
          <p><FaLocationDot /> IICC Conference Hall,&nbsp; New Delhi,&nbsp; India</p>
        </div>
      </div>
      <div className="Home-buttons">
        <div className="Home-buttons-one">
          <button>Register Now</button>
        </div>
      </div>
    </div>
  )
}

export default Home

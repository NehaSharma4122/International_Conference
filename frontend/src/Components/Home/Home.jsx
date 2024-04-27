import React from 'react'
import './Home.css'
import { LuCalendarDays } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

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
          <button><Link to="/Registration">REGISTER NOW</Link></button>
        </div>
        <div className="Home-buttons-two">
          <button><a href="https://drive.google.com/file/d/1EXLyXtHGQ7QyDydQplJNMvOK4udDjdgD/view?usp=drive_link" target="_blank">PRESENTATION GUIDELINES</a></button>
        </div>
        <div className="Home-buttons-three">
          <button><a href="https://drive.google.com/file/d/1LD-6UfazWdpM9lMN4G52Wwn_N0CvWoAg/view?usp=drive_link" target="_blank">DOWNLOAD BROCHURE</a></button>
        </div>
      </div>
    </div>
  )
}

export default Home

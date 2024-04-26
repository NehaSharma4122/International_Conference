import React from 'react'
import './Registration.css'

const Registration = () => {
  return (
    <div className="Registration">
        <div className="Registration-heading">
            <h3>Registration</h3>
        </div>
        <div className="Registration-content">
            <div className="Registration-content-cont1">
                <div className="Registration-content-head1">
                    <h5>Registration and Camera-Ready Paper Submission Guidelines</h5>
                </div>
                <div className="Registration-content-text1">
                    <ul>
                        <li>Please prepare the camera-ready paper as per the guidelines given on the website (or can be downloaded from<a href='https://drive.google.com/file/d/1H3acdHObxZAiWcmOUUX_wNborYhjuZv8/view?usp=drive_link'>https://drive.google.com/file/d/1H3acdHObxZAiWcmOUUX_wNborYhjuZv8/view?usp=drive_link</a>) and submit the final version (camera-ready paper) of your article paper by Nov 15, 2024 into CMT Author console.</li>
                        <li>The final version of your paper should be formatted in accordance with the IEEE Conference article. <br/>(<a href='https://www.ieee.org/conferences/publishing/templates.html'>https://www.ieee.org/conferences/publishing/templates.html</a>)</li>
                    </ul>
                </div>
            </div>
            <div className="Registration-content-cont2">
                <div className="Registration-content-head2">
                    <h5>Registration Fees</h5>
                </div>
                <div className="Registration-content-text2">
                    <p>
                        Pre-Conference Tutorial (14 April 2024) - Rs. 750
                        <br />
                        <br />
                        Conference Registration fees for 15-16 April 2024
                    </p>
                    <table>
                        <tr>
                            <th></th>
                        </tr>
                    </table>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Registration

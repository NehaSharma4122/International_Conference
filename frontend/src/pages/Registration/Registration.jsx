import React from 'react'
import './Registration.css'
import { Form } from 'react-bootstrap'

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
                            <th>Categories</th>
                            <th>IEEE Members</th>
                            <th>Non-IEEE Members</th>
                        </tr>
                        <tr>
                            <td>Students (UG/PG) & Research Scholars</td>
                            <td>Rs. 7,000</td>
                            <td>Rs. 8,000</td>
                        </tr>
                        <tr>
                            <td>Academicians & Industry</td>
                            <td>Rs. 8,000</td>
                            <td>Rs. 9,000</td>
                        </tr>
                        <tr>
                            <td>Participants</td>
                            <td>Rs. 3,000</td>
                            <td>Rs. 3,000</td>
                        </tr>
                        <tr>
                            <td>Foreign Author</td>
                            <td>$ 250</td>
                            <td>$ 250</td>
                        </tr>
                    </table>
                </div>
            </div>
            <form className="Registration-content-cont3">
                <div className="Registration-content-cont3-head">
                    <h5>Registration Details</h5>
                </div>
                <div className="Registration-content-cont3-row1">
                    <div className="Registration-content-cont3-row1-title">
                        <label>Participant Category
                            <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="Registration-content-cont3-row1-text">
                        <select name="select" required="required" autoComplete='off'>
                            <option value="Select">--Select--</option>
                            <option value="Indian Author and Delegates">Indian Author and Delegates</option>
                        </select>
                    </div>
                </div>
                <div className="Registration-content-cont3-row1">
                    <div className="Registration-content-cont3-row1-title">
                        <label>Registration Category
                            <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="Registration-content-cont3-row1-text">
                        <select name="" required="required" autoComplete='off'>
                            <option value="Select">--Select--</option>
                            <option value="Participants (non authors)">Participants (non authors)</option>
                        </select>
                    </div>
                </div>
                <div className="Registration-content-cont3-row1">
                    <div className="Registration-content-cont3-row1-title">
                        <label>Paper ID
                            <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="Registration-content-cont3-row1-text">
                        <input type="text "name="paperID" required="required" autoComplete='off'/>
                    </div>
                </div>
                <div className="Registration-content-cont3-row1">
                    <div className="Registration-content-cont3-row1-title">
                        <label>Name
                            <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="Registration-content-cont3-row1-text">
                        <input type='text' name="name" required="required" />
                    </div>
                </div>
                <div className="Registration-content-cont3-row1">
                    <div className="Registration-content-cont3-row1-title">
                        <label>Institute Reg No. / Organization Emp Id
                            <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="Registration-content-cont3-row1-text">
                        <input type='text' name="EmpID" required="required" autoComplete='off'/>
                    </div>
                </div>
                <div className="Registration-content-cont3-row1">
                    <div className="Registration-content-cont3-row1-title">
                        <label>Course/Designation
                            <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="Registration-content-cont3-row1-text">
                        <input type='text' name="course" required="required" autoComplete='off'/>
                    </div>
                </div>
                <div className="Registration-content-cont3-row1">
                    <div className="Registration-content-cont3-row1-title">
                        <label>Institution/Organization
                            <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="Registration-content-cont3-row1-text">
                        <input type='text' name="institution" required="required" autoComplete='off'/>
                    </div>
                </div>
                <div className="Registration-content-cont3-row1">
                    <div className="Registration-content-cont3-row1-title">
                        <label>E-mail Address
                            <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="Registration-content-cont3-row1-text">
                        <input type='text' name="email" required="required" />
                    </div>
                </div>
                <div className="Registration-content-cont3-row1">
                    <div className="Registration-content-cont3-row1-title">
                        <label>Mobile Number
                            <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="Registration-content-cont3-row1-text">
                        <input type='text' name="number" required="required" />
                    </div>
                </div>
                <div className="Registration-content-cont3-foot">
                    <button>Register</button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Registration

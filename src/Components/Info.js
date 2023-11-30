import React from "react";
import ProfilePic from "../images/PersonalProfile.jpg"

const Info = () => {
    return (
        <div className="info-container">
            <img src={ProfilePic} className="profile-picture" />
            <div className="main-info-container">
                <h1 id="name">Mohammed Soqati</h1>
                <h4 id="job">Software Developer</h4>
                <a href="" id="website">SoqatiMohammed.com</a>
            </div>
            <div className="btn-container">
                <button id="email-btn"><i className="fa-solid fa-envelope"></i> Email</button>
                <button id="linkedin-btn"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>
        </div>
    )
}
export default Info
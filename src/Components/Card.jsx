import React from "react";
import pic3 from "../assets/pic3.jpg";

export default function Card() {
  return (
    <>
      <div className="card-container">
        <img src={pic3} alt="profile-pic" className="profile-pic" />
        <div className="name-designation-container">
          <label className="name">Johnson Wood</label>
          <label className="designation">Front End Developer</label>
        </div>
        <div className="email-container">
          <label className="email-text">Email</label>
          <label>johnsonwood@microsoft.com</label>
        </div>
        <div className="buttons-container">
          <button className="card-button block">Block</button>
          <button className="card-button details">Details</button>
        </div>
      </div>
    </>
  );
}

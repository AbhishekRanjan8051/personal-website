import React from "react";
import "./about.css";
import abhishekranjan from "../../assests/img/abhishekranjan.png";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="firstcontainer">
          <img src={abhishekranjan} alt="" />
        </div>
        <div className="secondcontainer">
         <p>About me</p>
         <div className="aboutme">
          <span>
            FULL STACK WEB DEVELOPER
          </span>
         </div>
        </div>
      </div>
    </>
  );
};
export default About;

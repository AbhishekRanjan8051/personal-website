import React from "react";
import "./about.css";
import abhishekranjan from "../../assests/img/abhishekranjan.png";
import { Card } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodeSandboxCircle,
} from "react-icons/ai";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="firstcontainer">
          <img src={abhishekranjan} alt="" />
        </div>
        <div className="secondcontainer">
          <p>ABOUT ME</p>
          <div className="aboutme">
            <span>FULL STACK WEB DEVELOPER</span>
            <br />
            <br />
            <Card className="aboutus">
              <span>
                My name is Abhishek Ranjan, and I am an enthusiastic full-stack
                web developer with a specialization in the MERN stack. I am
                committed to using my skills and knowledge to contribute to the
                growth and success of an organization while gaining practical
                technical experience. Presently, I am employed at Indus Net
                Technologies, a service-based company, where I work on multiple
                projects. However, there are three major projects that I have
                been working on, and they have provided me with valuable
                learning opportunities. I have dedicated myself entirely to
                these projects, and they are currently functioning flawl
              </span>
            </Card>
          </div>
          <br />
          <div className="aboutusicon">
            <Card className="iconcard">
              <span className="allicon">
                <AiFillGithub
                  className="icon"
                  onClick={() => {
                    window.open("https://github.com/AbhishekRanjan8051");
                  }}
                />
                <AiFillLinkedin
                  className="icon"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/abhishek-ranjan-8051/"
                    );
                  }}
                />
                <AiFillCodeSandboxCircle
                  className="icon"
                  onClick={() => {
                    window.open("https://codesandbox.io/u/abhishekranjan8051");
                  }}
                />
              </span>
            </Card>
          </div>
          <br />
          <br />
         
        </div>
      </div>
    </>
  );
};
export default About;

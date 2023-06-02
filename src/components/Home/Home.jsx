import React from "react";
import Navbar from "../Navbar/navbar";

import "./home.css";
import About from "../About/About";
import Project from "../Projects/Project";
// import Typicals from "./../typical";

const Home = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        {/* <Typicals /> */}
      </div>
      <About />
      <Project />
     
    </>
  );
};
export default Home;

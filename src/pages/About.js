import React from "react";

function About() {
  return (
    <div className="container">
      <div className="content-wrap">
        <div className="row">
          <div className="col-12">
            <h1 className="title">My Portfolio Progress</h1>
            <p className="bio">
              The current website is created with React with basic functionality
              and presentation. This website will continue to be updated. Below
              is the previous versions of my portfolio.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="title">Portfolio V1: Bootstrap</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              className="port-images"
              src={require("../images/Portfolio V1.png")}
              alt="Portfolio Version 1"
            ></img>
          </div>
          <div className="col-6">
            <img
              className="port-images"
              src={require("../images/Projects V1.png")}
              alt="Portfolio Version 1"
            ></img>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <h2 className="title">Portfolio V2: Responsiveness</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              className="port-images"
              src={require("../images/Portfolio V2.png")}
              alt="Portfolio Version 2"
            ></img>
          </div>
          <div className="col-6">
            <img
              className="port-images"
              src={require("../images/Projects V2.png")}
              alt="Portfolio Version 2"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

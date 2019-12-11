import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="content-wrap">
        <div className= "row">
          <div className = "col-12">
        <h1 className = "title">About Me</h1>
        </div>
        </div>
        <div className = "row">
          <div className = "col-3">
        <img
          src={require("../images/5D6A6715.jpg")}
          className="auth-image"
          alt="My profile"
        ></img>
        </div>
        <div className = "col-9">
        <p className = "bio">
          I graduated from the University of Texas at Arlington on December
          2015. I went into the investment and banking industry starting as a
          data entry associate and advancing towards to becoming a Remediation
          Analyst for Anti-Money Laundering(AML).
        </p>

        <p className = "bio">
          I am a Fall 2019 graduate of the Full Stack Web Development program at
          the Southern Methodist University. The program covers materials to
          meet market demands, such as HTML5, CSS3, JavaScript, jQuery, Node.js,
          Java, Express.js, React.js, Database Theory, MongoDB, MySQL, Command
          Line, and Git to aspiring Web Developers.
        </p>

        <p className = "bio">
          My portfolio highlights all the progress that I have made with this
          program in order to be a valuable asset for any employer.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
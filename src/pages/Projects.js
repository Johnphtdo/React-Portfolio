import React from "react";
import { CardHeader, CardBody } from "../components/Card";

function Projects() {
  return (
    <div className="container">
      <div className="content-wrap">
        <div className="row">
          <div className="col-12">
            <h1 className="title">Portfolio</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="title">Group Projects</h2>
          </div>

          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="card align-items-stretch">
              <CardHeader>Project 1: Bouffage</CardHeader>
              <CardBody>
                <a
                  className="image-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://johnphtdo.github.io/Bouffage/index.html"
                  alt="Project 1:Bouffage"
                >
                  <img
                    className="project-image img-fluid"
                    src={require("../images/Bouffage.png")}
                    alt="Bouffage"
                  ></img>
                </a>
                <p>
                  The problem that we focused on in this project was people
                  unable to find recipes that will help with their weight loss
                  or with their dietary or health concerns and for recipes to
                  make drinks at home.
                </p>
                <hr></hr>
                <p>
                  Technolgies used: HTML5, CSS3, Bootstrap 4, JavaScript, and
                  jQuery.
                </p>
                <ul>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Johnphtdo/Bouffage"
                    >
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Johnphtdo"
                    >
                      John Do
                    </a>
                  </li>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/adamnorton2024"
                    >
                      Adam Norton
                    </a>
                  </li>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Mozzer2323"
                    >
                      Lowden Hall
                    </a>
                  </li>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/butlerjelisa21"
                    >
                      Jelisa Butler
                    </a>
                  </li>
                </ul>
              </CardBody>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="card align-items-stretch">
              <CardHeader>Project 2: SomeRecipes</CardHeader>
              <CardBody>
                <a
                  className="image-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://group-project-jtjdke.herokuapp.com/add-recipe"
                  alt="Project 2:SomeRecipes"
                >
                  <img
                    className="project-image img-fluid"
                    src={require("../images/SomeRecipes.png")}
                    alt="Some Recipes"
                  ></img>
                </a>
                <p>
                  For this project, the target audience were people that cook at
                  home. We wanted to create a web application that will allow
                  them to view and share recipes amongst each other. We created
                  an API to store the information, allowing authorized users to
                  post into the API with their recipes.
                </p>
                <hr></hr>
                <p>
                  Technolgies used: HTML5, CSS3, Bootstrap 4, JavaScript,
                  jQuery, Sequelize, MongoDB, Handlebars, and bcrypt.{" "}
                </p>
                <ul>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Johnphtdo/Group-Project-2"
                    >
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Johnphtdo"
                    >
                      John Do
                    </a>
                  </li>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/speechgirl1505"
                    >
                      Kala Elam
                    </a>
                  </li>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/jtsai972/"
                    >
                      Jasmine Tsai
                    </a>
                  </li>
                </ul>
              </CardBody>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="card align-items-stretch">
              <CardHeader>Project 3: Simply Conceptual</CardHeader>
              <CardBody>
                <a
                  className="image-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://simplyconceptual.herokuapp.com/"
                  alt="Project 3:SimplyConceptual"
                >
                  <img
                    className="project-image img-fluid"
                    src={require("../images/SimplyConceptual.png")}
                    alt="Simply Conceptual"
                  ></img>
                </a>
                <p>
                  Simply Conceptual is a web application that is designed by
                  aspiring web developers for aspiring web developers. The issue
                  we wanted to address was that some development concepts were
                  hard to grasp and understand, therefore we created lessons
                  that explained it in simpler terms.
                </p>
                <hr></hr>
                <p>
                  Technolgies used: HTML5, CSS3, Bootstrap 4, JavaScript,
                  MongoDB, bcrypt, and React.{" "}
                </p>
                <ul>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/BontigaoDavid/Project3"
                    >
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Johnphtdo"
                    >
                      John Do
                    </a>
                  </li>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/BontigaoDavid"
                    >
                      David Bontiago
                    </a>
                  </li>
                  <li>
                    <a
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/jtsai972/"
                    >
                      Jasmine Tsai
                    </a>
                  </li>
                </ul>
              </CardBody>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-12">
            <h2 className="title">Solo Projects</h2>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="card align-items-stretch">
              <CardHeader>Word Guess Game</CardHeader>
              <CardBody>
                <a
                  className="image-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://johnphtdo.github.io/Word-Guess-Game//"
                  alt="Project 3:SimplyConceptual"
                >
                  <img
                    className="project-image img-fluid"
                    src={require("../images/Word_Guess_Game.png")}
                    alt="Word Guess Game"
                  ></img>
                </a>
                <p>
                  This project features dynamically updated the HTML and CSS
                  powered by JavaScript Code.
                </p>
                <a
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Johnphtdo/Word-Guess-Game"
                >
                  GitHub Repository
                </a>
              </CardBody>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="card align-items-stretch">
              <CardHeader>Trivia Game</CardHeader>
              <CardBody>
                <a
                  className="image-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://johnphtdo.github.io/TriviaGame/"
                  alt="Trivia Game"
                >
                  <img
                    className="project-image img-fluid"
                    src={require("../images/Trivia_Game.png")}
                    alt="Trivia Game"
                  ></img>
                </a>
                <p>
                  In this project, I utilized JavaScript for the logic and
                  JQuery to manipulate the HTML. JavaScript logic used to
                  compare user input with correct answers to tally up a score.
                </p>
                <a
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Johnphtdo/TriviaGame"
                >
                  GitHub Repository
                </a>
              </CardBody>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="card align-items-stretch">
              <CardHeader>Google Book Search</CardHeader>
              <CardBody>
                <a
                  className="image-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://serene-gorge-22530.herokuapp.com/"
                  alt="Google Book Search"
                >
                  <img
                    className="project-image img-fluid"
                    src={require("../images/Google-Book-Search.png")}
                    alt="Google-Book-Search"
                  ></img>
                </a>
                <p>
                  This Project was created with React, Node, Express, and
                  MongoDB. It allows users to search for books and to save to
                  review for later.
                </p>
                <a
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Johnphtdo/Google-Book-Search"
                >
                  GitHub Repository
                </a>
              </CardBody>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="card align-items-stretch">
              <CardHeader>UTA Lambda Phi Epsilon's Page</CardHeader>
              <CardBody>
                <a
                  className="image-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://johnphtdo.github.io/LPE_template/"
                  alt="UTA Lambda"
                >
                  <img
                    className="project-image img-fluid"
                    src={require("../images/UTA-LPHIE.png")}
                    alt="UTA Lambda"
                  ></img>
                </a>
                <p>
                  This Project was created with React, Node, Express, and
                  MongoDB. The website was intended to be used by the Fraternity
                  Lambda Phi Epsilon. It allows users to access their webpage
                  for information and to search their members that are listed in MongoDB.
                </p>
                <a
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Johnphtdo/UTA_Lambda_Phi_Epsilon"
                >
                  GitHub Repository
                </a>
              </CardBody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

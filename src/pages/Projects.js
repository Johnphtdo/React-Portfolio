import React from "react";
import { CardHeader, CardBody } from "../components/Card";

function Projects() {
  return (
    <div className="container">
      <div className = "content-wrap">
        <div className="row">
          <div className="col-12">
            <h1 className = "title">Portfolio</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className = "title">Group Projects</h2>
            </div>
            
            <div className="col-4">
              <div className="card align-items-stretch">
                <CardHeader>Project 1: Bouffage</CardHeader>
                <CardBody>
                  <a
                    className="image-link"
                    href="https://johnphtdo.github.io/Bouffage/index.html"
                    alt="Project 1:Bouffage"
                  ><img className = "project-image img-fluid" src = {require("../images/Bouffage.png")} alt = "Bouffage"></img></a>
                  
                  <ul>
                      <li><a className = "github-link" href= "https://github.com/Johnphtdo">John Do</a></li>
                      <li><a className = "github-link" href= "https://github.com/adamnorton2024">Adam Norton</a></li>
                      <li><a className = "github-link" href= "https://github.com/Mozzer2323">Lowden Hall</a></li>
                      <li><a className = "github-link" href= "https://github.com/butlerjelisa21">Jelisa Butler</a></li>
                  </ul>
                </CardBody>
              </div>
            </div>
            <div className="col-4">
              <div className="card align-items-stretch">
                <CardHeader>Project 2: SomeRecipes</CardHeader>
                <CardBody>
                  <a
                    className="image-link"
                    href="https://group-project-jtjdke.herokuapp.com/add-recipe"
                    alt="Project 2:SomeRecipes"
                  ><img className = "project-image img-fluid" src = {require("../images/SomeRecipes.png")} alt = "Some Recipes"></img></a>
                  
                  <ul>
                      <li><a className = "github-link" href= "https://github.com/Johnphtdo">John Do</a></li>
                      <li><a className = "github-link" href= "https://github.com/speechgirl1505">Kala Elam</a></li>
                      <li><a className = "github-link" href= "https://github.com/jtsai972/">Jasmine Tsai</a></li>
                  </ul>
                </CardBody>
              </div>
            </div>
            <div className="col-4">
              <div className="card align-items-stretch">
                <CardHeader>Project 3: Simply Conceptual</CardHeader>
                <CardBody>
                  <a
                    className="image-link"
                    href="https://vast-cliffs-60334.herokuapp.com/"
                    alt="Project 3:SimplyConceptual"
                  ><img className = "project-image img-fluid" src = {require("../images/SimplyConceptual.png")} alt = "Simply Conceptual"></img></a>
                  
                  <ul>
                      <li><a className = "github-link" href= "https://github.com/Johnphtdo">John Do</a></li>
                      <li><a className = "github-link" href= "https://github.com/BontigaoDavid">David Bontiago</a></li>
                      <li><a className = "github-link" href= "https://github.com/jtsai972/">Jasmine Tsai</a></li>
                  </ul>
                </CardBody>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-12">
              <h2 className = "title">Solo Projects</h2>
            </div>
            <div className="col-4">
              <div className="card align-items-stretch">
                <CardHeader>Word Guess Game</CardHeader>
                <CardBody>
                  <a
                    className="image-link"
                    href="https://johnphtdo.github.io/Word-Guess-Game//"
                    alt="Project 3:SimplyConceptual"
                  ><img className = "project-image img-fluid" src = {require("../images/Word_Guess_Game.png")} alt = "Word Guess Game"></img></a>
                  <p>This project features dynamically updated the HTML and CSS powered by JavaScript Code.</p>
                 
                </CardBody>
              </div>
            </div>
            <div className="col-4">
              <div className="card align-items-stretch">
                <CardHeader>Trivia Game</CardHeader>
                <CardBody>
                  <a
                    className="image-link"
                    href="https://johnphtdo.github.io/TriviaGame/"
                    alt="Trivia Game"
                  ><img className = "project-image img-fluid" src = {require("../images/Trivia_Game.png")} alt = "Trivia Game"></img></a>
                  <p>In this project, I utilized JavaScript for the logic and JQuery to manipulate the HTML. JavaScript logic used to compare user input with correct answers to tally up a score.</p>
                 
                </CardBody>
              </div>
            </div>
            <div className="col-4">
              <div className="card align-items-stretch">
                <CardHeader>Google Book Search</CardHeader>
                <CardBody>
                  <a
                    className="image-link"
                    href="https://serene-gorge-22530.herokuapp.com/"
                    alt="Google Book Search"
                  ><img className = "project-image img-fluid" src = {require("../images/Google-Book-Search.png")} alt = "Google-Book-Search"></img></a>
                  <p>This Project was created with React, Node, Express, and MongoDB. It allows users to search for books and to save to review for later.</p>
                
                </CardBody>
              </div>
            </div>
            
          </div>
          </div>
    </div>
  );
}

export default Projects;
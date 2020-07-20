import React from 'react';
import "./style.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
        <div className = "App bg-img">
        <NavBar/>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path ="/about" component ={About}/>
          <Route exact path ="/portfolio" component ={Projects}/>
        </Switch>
      </div>
        <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {
  return (
    <Router>
      <div className = "App justify-content-stretch">
        <NavBar/>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path ="/about" component ={About}/>
          <Route exact path ="/portfolio" component ={Projects}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;

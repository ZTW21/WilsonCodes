import React from 'react'
import './App.css';
import Home from "./Home.js";
import Privacy from "./Privacy.js";
import Support from "./Support.js";
import {Route, Link} from 'react-router-dom';
import Navbar from "./Navbar"


function App() {
  return (
  <div className="App">
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/support" component={Support} />
  </div>
  );
}

export default App;

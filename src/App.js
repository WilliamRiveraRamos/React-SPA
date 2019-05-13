
import React, { Component } from 'react';

import {
    Route,
    NavLink,
    HashRouter,
  } from 'react-router-dom';

  import Home from './Home';
  import Blog from './Blog';
  import About from './About';
  import Contact from './Contact';

  class App extends Component {
    render() {
      return (
        <HashRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">        
            <NavLink className="navbar-brand" to="/">React.js SPA</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
                    
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                <NavLink className="nav-item nav-link" to="/Blog">Blog</NavLink>
                <NavLink className="nav-item nav-link" to="/About">About</NavLink>
                <NavLink className="nav-item nav-link" to="/Contact">Contact</NavLink>
              </div>
            </div>
          </nav>

          <div className="container">
            <h1 className="mt-3 MainTitle">
              <img src="/react-logo.png" alt="React JS logo" width="64" height="64" className="mr-2" />
                React SPA
            </h1>
          </div>
          
          <div>
            <Route exact path="/" component = { Home } />           
            <Route path="/blog" component = { Blog } />
            <Route path="/about" component = { About } />
            <Route path="/contact" component = { Contact } />
          </div>

          <Footer />

          </HashRouter>        
        )
      }
    }

    const Footer = () => {
      return(
        <footer>
          <p>&copy;2019</p>
        </footer>
      )
    }
    export default App;
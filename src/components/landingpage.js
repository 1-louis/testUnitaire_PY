import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid container className="landing-grid">
          <Grid item xs={12}>
            <AppBar position="static" className="header-color">
              <Toolbar>
                  <Typography variant="h6" style={{ flexGrow: 1 }}>
                  </Typography>
                  <Link style={{textDecoration: 'none', color: 'white', marginRight: '1em'}} to="/">Accueil</Link>
                  <Link style={{textDecoration: 'none', color: 'white', marginRight: '1em'}} to="/resume">Resume</Link>
                  <Link style={{textDecoration: 'none', color: 'white', marginRight: '1em'}} to="/aboutme">About Me</Link>
                  <Link style={{textDecoration: 'none', color: 'white', marginRight: '1em'}} to="/projects">Projects</Link>
                  <Link style={{textDecoration: 'none', color: 'white'}} to="/contact">Contact</Link>
                </Toolbar>
              </AppBar>
            <img
              src="/images/IMG-20231104-copie.jpg"
              alt="avatar"
              className="avatar-img"  />

            <div className="banner-text">
                   <h1 className="banner-title">  Architecture et Développement Logiciel </h1> 
            <hr/> 
            <span>CONTRAT EN ALTERNANCE</span>
          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | ASP.NET | Symfony</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Landing;

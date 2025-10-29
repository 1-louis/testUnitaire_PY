import React from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

function App() {
  return (
     <div className="demo-big-content">
      <AppBar position="static" className="header-color">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>
          </Typography>
                <Link style={{textDecoration: 'none', color: 'white', marginRight: '1em'}} to="/">Accueil</Link>
                <Link style={{textDecoration: 'none', color: 'white', marginRight: '1em'}} to="/resume">Resume</Link>
                <Link style={{textDecoration: 'none', color: 'white', marginRight: '1em'}} to="/aboutme">About Me</Link>
                <Link style={{textDecoration: 'none', color: 'white', marginRight: '1em'}} to="/projects">Projects</Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/contact">Contact</Link>
        </Toolbar>
      </AppBar>
      <main>
        <div className="page-content" />
        <Container>
            <Main/>
        </Container>
      </main>
      
    </div>
  );
}

export default App;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
     
    <Grid className="About-grid"> 
        <Cell col={8}>
        <div><h1>A propos de moi</h1></div> 
          <h4 style={{marginTop:'0px'}}>{this.props.aboutName}</h4>
          <p>Je poursuis actuellement un Mastère en management en architecture et Développement Logiciel à l’IMIE Paris, avec une spécialisation en Intelligence Artificielle et DevOps. J’ai choisi ce parcours car je crois profondément que <b>la data et l’IA </b> transforment notre manière de travailler, de décider et d’innover. Je souhaite mettre cette conviction au service de vos projets, en rejoignant vos équipes en alternance.</p>
          <p>Lors de mes expériences précédentes, j’ai travaillé sur des applications web et des bases de données complexes, réalisé des dashboards analytiques connectés à des APIs et déployé des solutions sur Microsoft Azure. Ces projets m’ont appris l’importance de la rigueur technique, mais aussi de la <b> collaboration avec les équipes métiers</b>, pour que la technologie réponde réellement aux besoins.</p>
          <p>Ce que j’aime dans ce métier, c’est justement cette passerelle entre la technique et l’humain : comprendre une problématique métier, l’analyser, proposer une solution et la voir se concrétiser. SQL, C#, bases de données ou méthodologies agiles sont pour moi des outils ; ce qui me motive avant tout, c’est de contribuer à des projets qui apportent une vraie valeur.</p>
          <p>Je me reconnais dans les qualités que vous recherchez : autonomie, esprit d’équipe, sens de l’organisation. J’y ajoute ma curiosité et mon envie d’apprendre, car pour moi, une alternance est avant tout <b>une aventure partagée</b>, où l’on progresse ensemble.</p>
          {/* <p>{this.props.aboutDescription4}</p> */}
        </Cell>
    </Grid>
     
    )
  }
}

export default About;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid container>
          <Grid item md={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="/images/IMG-20231104-WA0008.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Léonard LOUIS</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Actuellement étudiant à l'école
              d'informatique IMIE Paris en Expert
              en Architecture et Développement
              Logiciel, je suis à la recherche d'une
              alternance. 
              </p>
              <p>
                J’ai piloté des projets robustes en e
                commerce, gestion hôtelière et
                Dashboard analytique et suivi une
                formation dans l’architecture
                logicielle. Je suis aujourd’hui prêt à
                collaborer avec vos équipes .</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>9 rue karine ruby Les Mureaux</p>
            <h5>Phone</h5>
            <p>(+33) 658 911 054 </p>
            <h5>Email</h5>
            <p>l.louis@outlook.fr</p>
            <h5>Web</h5>
            <p>lelotech.net</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Grid>
          <Grid item md={8} className="resume-right-col">
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="IMIE Paris"
              schoolDescription="Ecole supérieure d'informatique"
              schoolDescription1="Développement AI ET DEVOPS BY"
              schoolDescription2="Concevoir et modéliser l’architecture logicielle"
              schoolDescription3="UML, JAVA, Python, DevOps, IA"
               />

               <Education
                 startYear={"Décembre 2022 – "}
                 endYear={'Octobre 2023'}
                 schoolName=" Simplon Colombes"
                 schoolDescription="Développeur Web et Web mobile (CDA) bac+2 obtenu"
                 schoolDescription1="HTML5, CSS3, JavaScript, MySQL, Bootstrap, ASP.NET,Csharp"
                schoolDescription2="Conception  de sites web et desktop , Csharp ASP.NET"
                schoolDescription3="Méthode Agile SCRUM"
                  />
                <Education
                 startYear={"Décembre 2018 – "}
                 endYear={'Octobre 2021'}
                 schoolName=" IMIE levallois perret"
                 schoolDescription="Développeur Web et Web mobile (DWWM) bac+2 obtenu"
                 schoolDescription1="HTML5, CSS3, JavaScript, PHP, MySQL, Bootstrap,REACT JS,Ionic, REACT NATIVE"
                schoolDescription2="Conception de sites web et mobile ,javascript PHP, REACT,react native , ionic"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

 
            <Experience
              startYear={"Janvier 2024 –"}
              endYear={"Mars 2025"}
              jobName="Concepteur Développeur d'Applications"
              jobEntreprise="HL Technologies"
              jobDescription="Création, et mise à jour  de site Web Symfony  5 et 6 mise à jour logiciel composeur et PHP"
              jobDescription2="Conception de site de vente en ligne et  déploiement  du site"
              />
            <Experience
            
              startYear={"Décembre 2022 –"}
              endYear={"Décembre 2023"}
              jobName=" Concepteur Développeur d'Applications"
              jobEntreprise=" APSIDE  Paris  bois colonbre"
              jobDescription=" Développement backend en ASP.NET C# pour un site de gestion hôtelière "
              jobDescription1="Création de base de données, élaboration de procédures et de requêtes SQL complexes."
              jobDescription2=" Déploiement d'applications de site web sur Microsoft Azure."
              jobDescription3="Mise en place de requêtes en vue d’assurer l’affichage statistique du site."
              jobDescription4="Tests automatisés des fonctionnalités développées "
              
              />

              <Experience
                startYear={"Mars 2020"}
                endYear={ "Décembre 2021"}
                jobName=" Développeur fullstack Symfony PHP"
                jobEntreprise="TUCANIA"
                jobDescription="Réalisation d’un dashboard analytique connecté aux APIs UptimeRobot et Google Analytics"
                jobDescription2="Intégration des recommandations RGPD, gestion des cookies"
                jobDescription3="Développement backend en PHP"
                jobDescription4="Requêtes SQL en vue de d’extraire informations demandées, tests Panther"
                />
                <Experience
                startYear={"Mars 2020"}
                endYear={ "Décembre 2021"}
                jobName=" Réceptionniste de nuit"
                jobEntreprise="Hôtel MONTEMPO"
                jobDescription=" Accueil des clients, prise de réservation"
                jobDescription2="Service client, information, renseignement des différentes prestations"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={86}
                />
                <Skills
                skill="php"
                progress={95}
                />
                <Skills
                skill="symfony"
                progress={90}
                />
                <Skills
                skill="Csharp"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Resume;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { List, ListItem } from '@material-ui/core';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid container className="contact-grid">
          <Grid item xs={6}>
            <h2>Léonard LOUIS</h2>
            <img
              src="/images/IMG-20231104-copie.jpg"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>💻 Développeur Web polyvalent, je conçois des applications web de A à Z avec une approche orientée performance et simplicité.</p>
             <p>Formé au développement  chez (Simplon/IMIE), j’ai acquis des compétences solides en Symfony, PHP, Java, HTML/CSS, JavaScript et CSharp, asp.NET dans la gestion de projets web. </p><p>J’ai aussi une sensibilité graphique me permettant de créer des interfaces claires, accessibles et modernes.</p>

          </Grid>
          <Grid item xs={6}>
            <h2>Contactez moi</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <div style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+33) 658 911 054
                  </div>
                </ListItem>

                <ListItem>
                  <div style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </div>
                </ListItem>

                <ListItem>
                  <div style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    l.louis@outlook.fr
                  </div>
                </ListItem>

                {/* <ListItem>
                  <div style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </div>
                </ListItem> */}


              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Contact;

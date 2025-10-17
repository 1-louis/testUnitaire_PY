import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Léonard LOUIS</h2>
            <img
              src="/images/IMG-20231104-copie.jpg"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>💻 Développeur Web polyvalent, je conçois des applications web de A à Z avec une approche orientée performance et simplicité.</p>
             <p>Formé au développement  chez (Simplon/IMIE), j’ai acquis des compétences solides en Symfony, PHP, Java, HTML/CSS, JavaScript et CSharp, asp.NET dans la gestion de projets web. </p><p>J’ai aussi une sensibilité graphique me permettant de créer des interfaces claires, accessibles et modernes.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contactez moi</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+33) 658 911 054
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    l.louis@outlook.fr
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem> */}


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Education extends Component {
  render() {
    return(
      <Grid container>
        <Grid item md={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Grid>
        <Grid item md={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
          <p>{this.props.schoolDescription1}</p>
          <p>{this.props.schoolDescription2}</p>
          <p>{this.props.schoolDescription3}</p>
          <p>{this.props.schoolDescription4}</p>
        </Grid>
      </Grid>
    )
  }
}

export default Education;

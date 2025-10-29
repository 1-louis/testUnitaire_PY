import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Experience extends Component {
  render() {
    return(
      <Grid container>
        <Grid item md={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Grid>
        <Grid item md={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <h3 style={{marginTop:'0px'}}>{this.props.jobDateWorking}</h3>
          <h5 style={{marginTop:'0px'}}>{this.props.jobEntreprise}</h5>
          <p>{this.props.jobDescription}</p>
          <p>{this.props.jobDescription1}</p>
          <p>{this.props.jobDescription2}</p>
          <p>{this.props.jobDescription3}</p>
          <p>{this.props.jobDescription4}</p>
         
        </Grid>
      </Grid>
    )
  }
}

export default Experience;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

class Skills extends Component {
  render() {
    return(
      <Grid container>
        <Grid item xs={12}>
          <div style={{display: 'flex'}}>{this.props.skill} <LinearProgress variant="determinate" value={this.props.progress} style={{margin: 'auto', width: '75%'}} /> </div>
        </Grid>
      </Grid>
    )
  }
}

export default Skills;

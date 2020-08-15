import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <h4 style={{ marginTop: '0px' }}>{this.props.projectName}</h4>
          <p>{this.props.projectDescription1}</p>
          <p>{this.props.projectDescription2}</p>
          <p>{this.props.projectDescription3}</p>
          <p>{this.props.projectDescription4}</p>
          <p>{this.props.projectDescription5}</p>
          <p>{this.props.projectDescription6}</p>
        </Cell>
      </Grid>
    );
  }
}
export default Experience;

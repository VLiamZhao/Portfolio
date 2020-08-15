import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://i.imgur.com/EYjkkuT.png?3'
              alt='avatar'
              className='avatar-img'
            />
            <div className='banner-text'>
              <h1>Software Development Engineer</h1>
              <hr />
              <p>
                Java | Python | Spring Boot | HTML/CSS | JavaScript | Node.js |
                SQL | AWS | Azure
              </p>
              <div className='social-links'>
                {/*LinkedIn*/}
                <a
                  href='https://www.linkedin.com/in/liam-zhao/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/*Github*/}
                <a
                  href='https://github.com/VLiamZhao'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>

                {/*Facebook*/}
                <a
                  href='https://www.facebook.com/zhao.can.906'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-facebook-square' aria-hidden='true' />
                </a>

                {/*Freecodecamp*/}
                <a
                  href='https://www.freecodecamp.org/learn'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-free-code-camp' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;

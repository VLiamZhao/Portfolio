import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contect extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Can (Liam) Zhao</h2>
            <img
              src='https://i.imgur.com/EYjkkuT.png?3'
              alt='avatar'
              style={{ height: '250px' }}
            />
            <p
              style={{
                fontSize: '15px',
                width: '75%',
                margin: 'auto',
                paddingTop: '2em',
                textAlign: 'justify',
              }}
            >
              Seeking a full-time Software Engineer position. Expected to start
              in 10/2020.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list' style={{ margin: '50px 0 0 0' }}>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontsize: '35px', fontFamily: 'Anton' }}
                  >
                    <i
                      className='fa fa-phone-square'
                      aria-hidden='true'
                      style={{ margin: '0 9px 0 0' }}
                    />
                    (202) 386-2560
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontsize: '35px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true' />
                    canzhao216@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontsize: '35px', fontFamily: 'Anton' }}
                  >
                    <i
                      className='fa fa-skype'
                      aria-hidden='true'
                      style={{ margin: '0 7px 0 0' }}
                    />
                    canzhao216@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contect;

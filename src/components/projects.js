import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='grids'>
          <div className='projects-grid'>
            <Card
              className='card'
              shadow={5}
              style={{ minWidth: '450', margin: 'auto' }}
            >
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background:
                    'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover',
                }}
              >
                Project Sharing Platform
              </CardTitle>
              <CardText>
                A Spring Boot based application that helps students to connect
                with IT companies.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href='https://github.com/VLiamZhao/Project-Sharing-Platform'>
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a href='http://168.61.221.213:3000/'>Demo</a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </div>
          <div className='projects-grid'>
            <Card
              className='card'
              shadow={5}
              style={{ minWidth: '450', margin: 'auto' }}
            >
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background:
                    'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover',
                }}
              >
                Car Maintenance Web Application
              </CardTitle>
              <CardText>
                A Spring Boot and Hibernate based Car Maintenance Service Web
                Application.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href='https://github.com/VLiamZhao/Car-Maintenance-Service'>
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a href='https://github.com/VLiamZhao/Car-Maintenance-Service'>
                    Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div className='projects-grid'>
            <Card
              className='card'
              shadow={5}
              style={{ minWidth: '450', margin: 'auto' }}
            >
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background:
                    'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover',
                }}
              >
                Dev Connector
              </CardTitle>
              <CardText>
                A full stack social network app built by React, Redux, Node,
                Express & MongoDB
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href='https://github.com/VLiamZhao/Developer-Connector'>
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a href='https://obscure-sea-57622.herokuapp.com/'>Demo</a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Java</Tab>
          <Tab>React</Tab>
          <Grid>
            <Cell col={12}>
              <div className='content'>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </Tabs>
      </div>
    );
  }
}

export default Projects;

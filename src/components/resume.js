import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src='https://i.imgur.com/EYjkkuT.png?3'
                alt='avatar'
                style={{
                  height: '250px',
                  borderRadius: '50%',
                  margin: '30px 0 0 0',
                }}
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Can Zhao</h2>
            <h4 style={{ color: 'grey' }}>Junior Software Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>2400 Virginia Ave NW Washington DC</p>
            <h5>Phone</h5>
            <p>(202) 386-2560</p>
            <h5>Email</h5>
            <p>canzhao216@gmail.com</p>
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2020}
              schoolName='George Washington University'
              schoolDescription='M.S. in Computer Science'
            />
            <Education
              startYear={2003}
              endYear={2007}
              schoolName='Jilin University'
              schoolDescription='B.Eng. in Electronic Information Science & Technology'
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Project Experience</h2>
            <Experience
              projectName='Project Sharing Platform Web Application'
              projectDescription1='•	Built a web application by using Spring Boot and Hibernate to better connect graduating students with IT companies'
              projectDescription2='•	Designed and implemented the database. Simplified and streamlined the database operations with Hibernate'
              projectDescription3='•	Designed and implemented role based JWT Stateless authentication security workflow'
              projectDescription4='•	Implement the large file management by using Azure Storage Service'
              projectDescription5='•	Deployed the backend service by using Docker and Azure Virtual Machine'
              projectDescription6='•	Worked as the Lead of this project and was responsible for the overall design and module division'
            />
            <Experience
              projectName='Car Maintenance Service Web Application'
              projectDescription1='•	Built a web application by using Spring Boot and Web Flow with functionalities including service listing and searching'
              projectDescription2='•	Designed and implemented the database by using Docker PostgreSQL image'
              projectDescription3='•	Implemented communication between two microservices by using AWS SQS to decouple the microservice structure'
              projectDescription4='•	Deployed the application and database on the Cloud by using AWS EC2 and RDS web service'
            />
            <Experience
              projectName='React, and Node.js based Social Network Web Application'
              projectDescription1='•	Built a full stack social network app that includes forum posts, comment, following and profiles'
              projectDescription2='•	Designed and implemented the database by using MongoDB'
              projectDescription3='•	Designed and implemented JWT Stateless authentication security workflow'
              projectDescription4='•	Created an extensive backend API with Express and tested API with Postman'
              projectDescription5='•	Integrated React with the backend and deployed to Heroku with a post-build script by using Git'
              projectDescription6='•	Used Redux for state management and Created container components that integrate with Redux'
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill='Java&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              progress={100}
            />
            <Skills
              skill='Python&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              progress={80}
            />
            <Skills skill='JavaScript&nbsp;' progress={70} />
            <Skills skill='Spring Boot' progress={90} />
            <Skills
              skill='SQL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              progress={90}
            />
            <Skills
              skill='Git&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              progress={80}
            />
            <Skills
              skill='AWS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              progress={80}
            />
            <Skills
              skill='Azure&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              progress={80}
            />
            <Skills skill='HTML/CSS' progress={80} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

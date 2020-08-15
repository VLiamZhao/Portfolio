import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className='aboutme-all'>
        <h2>About Me</h2>
        <div className='about-content'>
          <p>
            I am interested in software development, possess a solid knowledge
            of tools and frameworks, and is familiar with AWS and Azure web
            service. Over the past few years, I have accumulated experience in
            developing several full-stack projects, mainly responsible for
            database design and back-end development.
          </p>
          <p>
            {' '}
            I have a strong desire and passion for programming and new
            technologies, and I also have a clear understanding of the logic of
            computer system architecture, as well as excellent communication
            skills. I seek out new topics and techniques to study to increase my
            knowledge and skills. While part of a team, I am enthusiastic about
            helping people through challenges and providing support.
          </p>
          <p>
            {' '}
            All in all, I am a self-driven person who pursues the ability to
            create an impact in my software career.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;

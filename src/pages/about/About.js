import React from 'react';
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from './style';
import codingSvg from '../../assets/coding.svg';

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer : <span>MnrGdkl</span>{' '}
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Munir G.</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          {' '}
          I know JavaScript, ReactJS, Django, NodeJS, SQL, Python, Linux, Git/GitHub.
        </h4>
        <h2>
          <a href="mailto:munirgedikli@hotmail.com">Send email</a> :
          munirgedikli@hotmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
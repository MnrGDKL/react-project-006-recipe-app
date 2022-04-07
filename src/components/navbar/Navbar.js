import React from 'react';
import { Link } from 'react-router-dom';
import { Links, Main, Username } from './style';

const Navbar = () => {
  const loginName = "<MnrGdkl/>"
  return (
    <Main>
      <Username>
        <Link to="/react-project-006-recipe-app/home"> {loginName} <span>Recipe</span> </Link> 
      </Username>
      <Links>
        <Link to="/react-project-006-recipe-app/about">About</Link>
        <a href="https://github.com/mnrgdkl" target="_blank" rel="noreferrer">GitHub</a>
        <Link to="/react-project-006-recipe-app/">Logout </Link>
      </Links>
    </Main>
  )
}
export default Navbar
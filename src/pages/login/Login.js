import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MealSvg from "../../assets/meal.svg";
import {MainContainer, LoginContainer, Header, FormContainer} from "./style";

const userName = "munir";
const passWord = "1251";

const Login = () => {
  const loginName = "<MnrGdkl/> Recipe";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === userName && password === passWord){
      navigate("/react-project-006-recipe-app/home");
    }else{
      alert("Username or Password is incorrect");
      setUsername("");
      setPassword("");
    }
  }
  
  return (
    <MainContainer>
      <LoginContainer>
        <Header>
          <img src={MealSvg} alt="" />
          <h1>{loginName}</h1>
        </Header>
        <div>
          <FormContainer onSubmit={handleSubmit}>
            <input required type="text" 
                   placeholder="username" 
                   value={username}
                   onChange={(e)=> setUsername(e.target.value)}/>
            <input required type="password" 
                   placeholder='password' 
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" >Login</button>
          </FormContainer>
        </div>
      </LoginContainer>
    </MainContainer>
  )
}

export default Login
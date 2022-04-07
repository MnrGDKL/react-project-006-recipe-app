import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Details from '../pages/details/Details';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Navbar from '../components/navbar/Navbar';

const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/react-project-006-recipe-app/" element={<Login/>} />   
            <Route path="/react-project-006-recipe-app/home" element={<Home/>} />
            <Route path="/react-project-006-recipe-app/about" element={<About/>} />
            <Route path="/react-project-006-recipe-app/details" element={<Details/>} />
            <Route path="*" element={<Login/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter
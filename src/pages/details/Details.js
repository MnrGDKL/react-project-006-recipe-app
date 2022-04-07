import React from 'react'
import { useLocation } from 'react-router-dom';
import dietSvg from '../../assets/diet.svg';
import {
  MainContainer,
  DetailsContainer, 
  NutrientsContainer, 
  Header,
  Nutrients,
  ImgContainer,
  Ingredients
        } from "./style";

const Details = () => {

  const location = useLocation();
  const details = location.state.Recipe;
  return (
    <MainContainer>
      <DetailsContainer>
        <Header>
          <h1>{details.label}</h1>
          <img src={dietSvg} alt=""/>
        </Header>
        <NutrientsContainer>
          <div>
            <h3>Nutrients</h3>
            <Nutrients>
              {Object.values(details.totalNutrients).map((value,index) => {
                return (
                  <p key={index}> 
                    {value.label} :
                    {value.quantity.toFixed(0)} {" "}
                    {value.unit}
                  </p> || <p>No nutrients</p>
                  )
                  })
              }
              </Nutrients>
          </div>
          <ImgContainer>
            <img src={details.image} alt="" />
          </ImgContainer>
          <Ingredients>
            {details.ingredientLines.map((value,index) => {
              return (
                <li key={index}>
                  {value}
                </li>
              )})}
          </Ingredients>
        </NutrientsContainer>
    </DetailsContainer>
  </MainContainer>
  )
}

export default Details
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {EachRecipeCard} from './style';


const RecipeCard = ({key, Recipe}) => {

  let navigate = useNavigate()

  const detailedPage = () => {
    navigate("/react-project-006-recipe-app/details", {state:{Recipe}});
  }


  return (
    <EachRecipeCard key={key}>
      <h3>{Recipe.label}</h3>
      <img src={Recipe.image} alt=""/>
      <button onClick={detailedPage}>Show More</button>
    </EachRecipeCard>
  )
}

export default RecipeCard
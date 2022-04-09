import axios from 'axios';
import React from 'react'
import Form from '../../components/header/Form'
import Header from '../../components/header/Header'
import RecipeCard from '../../pages//home/RecipeCard'
import homeSvg from '../../assets/home.svg'
import { 
  HomeContainer,
  RecipeCardContainer,
  ImgDiv, HomeImg
} from './style';

const Meals = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_KEY = "4aa3fe5bcfb6f8619200006e08d5802b";
const APP_ID = "1bc69301";

const Home = () => {
  const [meal, setMeal] = React.useState(Meals[0]);
  const [query, setQuery] = React.useState('');
  const [recipes, setRecipes] = React.useState("");
  
  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const Data = async () => {
    if (query) {
      const res = await axios.get(url);
      
      setRecipes(res.data.hits);
      setQuery("");
    }
    else {
      alert("Please fill the search field");
    }
  }
  
  return (
    <HomeContainer>
      <Header/>
      <Form
        SelectMeals = {Meals}
        setMeal = {setMeal}
        setQuery = {setQuery}
        query = {query}
        Data = {Data}/>
      <RecipeCardContainer>
        {recipes 
          ? (recipes.map((recipe, index) =>
          <RecipeCard key={index} Recipe={recipe.recipe}/>
          )) 
          : (<ImgDiv>
              <HomeImg src={homeSvg} alt="" />
             </ImgDiv>)
        }
      </RecipeCardContainer>
    </HomeContainer>
  )
}

export default Home
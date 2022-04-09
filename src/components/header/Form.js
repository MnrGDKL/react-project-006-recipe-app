import React from 'react'
import {FormButton, FormContainer, FormInput, FormSelect} from './style'

const Form = ({SelectMeals, setMeal, Data, setQuery, query}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormInput type="text" placeholder="Search" value={query} 
              onChange={(e)=> setQuery(e.target.value)}/>
        <FormButton type="submit"
                onClick={Data}>Search</FormButton>
        <FormSelect onChange={(e)=> setMeal(e.target.value)} >
          {SelectMeals.map((meal, index) =>
          (<option key={index} value={meal}>{meal}</option>))}
        </FormSelect>
      </form>
    </FormContainer>
  )
}

export default Form


import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
`;


export const  RecipeCardContainer = styled.div`
  width: calc(100% - 5vw);
  height: fit-content;
  margin: 20px auto;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const EachRecipeCard = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgb(225, 241, 221);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3px;
  box-shadow: 5px 5px 5px black;
  &:hover {
    box-shadow: none;
    transition: box-shadow 1s;
  }
  img {
    height: 150px;
    border-radius: 10px;
  }
  button {
    background-color: rgb(0, 173, 181);
    height: 2rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const ImgDiv = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const HomeImg = styled.img`
  width: 400px;
  margin: 0 auto;
`;




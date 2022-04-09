import styled from "styled-components";


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  min-width: 400px;
  height: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: calc(100% - 10vw);
  min-width: 400px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 150px;

  img {
    width: 150px;
  }
`;

export const NutrientsContainer = styled.div`
  background-color: rgb(225, 241, 221);
  width: calc(100% - 2rem);
  border-radius: 5px;
  h3 {
    text-decoration: underline;
    text-transform: uppercase;
  }

`;

export const Nutrients = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem auto;

    
  p {
    font-size: 1.2rem;
    text-align: justify;
    padding-left: 2rem;
    margin: 0;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    p {font-size: 1rem;}
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgContainer = styled.div`
  width: 300px;
  min-width: 300px;
  margin: 10px auto;
  border: 1px solid rgb(0, 173, 181);
  padding: 1rem;
  border-radius: 10px;
  img {
    border-radius: 5px;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  
  li {
    list-style-type: decimal;
    margin: 5px auto;
    text-align: left;
    font-size: 1.2rem;
    width: 50%;
    line-height: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;



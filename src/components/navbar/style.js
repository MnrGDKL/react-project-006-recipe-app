import styled from "styled-components";

export const Main = styled.div`
  background-color: wheat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #E1F1DD;
  text-transform: capitalize;

  font-family: 'Girassol', cursive;
   & a {
    color: #02455E;
    text-decoration: none;
    & span {
    color: #00ADB5;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100px;
`;

export const Username = styled.div`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 0 .5rem;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  width: 400px;
  padding: 0 .5rem;
  
  a {
    text-decoration: none;
    text-transform: capitalize;
    color: #02455E;

    &:hover {
       color: #00ADB6;
       font-weight: bolder;
      }
    &:active {
      color: #00ADB6;
  }
`;
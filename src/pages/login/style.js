import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://picsum.photos/1600/900');
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const LoginContainer = styled.div`
width: 550px;
min-width: 550px;
height: 550px;
background-color: rgba(41, 144, 145, 0.5);
border-radius: 50%;
border: 2px solid #e1f1dd;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Header = styled.div`
  color: white;
  font-family: 'Girassol', sans-serif;

  img {
    width: 150px;
  }

  h1 {
    font-size: 2.5rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  input {
    height: 50px;
    font-size: 2rem;
    width: 250px;
    border-radius: 10px;
    font-family: 'Girassol', sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    color: white;
    margin: 1rem;
    text-align: center;
  }

  button {
    font-size: 2rem;
    font-family: 'Girassol', sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    cursor: pointer;
    margin: 1rem;
    border-radius: 10px;
    text-decoration: none;
    color: white;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
  }
}
`;



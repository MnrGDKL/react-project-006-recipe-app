import styled from "styled-components";

export const  FoodApp= styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  font-family: "Segoe UI",;
  margin: 1rem;
`;

export const FormContainer = styled.div`
  width: 450px;
  height: 45px;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
  margin: auto;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  
`;

export const FormInput = styled.input`
  width: 180px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-family: "Arial";
  font-size: 1.2rem;
  
`;

export const FormButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-family: "Arial";
  font-size: 1.2rem;
  background-color: rgb(225, 241, 221);

  &:hover {
   background-color: rgb(0, 173, 181);
   transition: background-color 1s;
   cursor: pointer;
  
`;

export const FormSelect = styled.select`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-family: "Arial";
  font-size: 1.2rem;
  
`;




// StudentSignInStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentSignInContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(55deg,  #191a53, #FFA07A,  #191a53); /* Gradient background */
  min-height: 97vh;
  font-family: "Montserrat", sans-serif;
  border-radius: 1%;
`;



export const Headings = styled.p `

  margin: 0;
  font-weight: 700;

`;


export const BelowTag = styled.p`
    margin: 0;
    margin-top: 30px;
    text-align: center;


`;

export const Edit = styled.span`

margin: 0;
font-weight: 700;
`;





export const Logo = styled.div`

  width: 100%;
  margin: auto;
  margin-bottom: 20px;

`;
 

export const LogoIn = styled.img`

    width: 100%;
    
`;


export const Liner = styled.hr`

  margin-bottom: 40px;
  width: 100%;
  opacity: 50%;


`;




export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 300px; /* Limit form width */
  padding: 20px 50px;
  padding-bottom: 50px;
  border: 1px solid #ccc;
  background-color: white;
  margin-top: 10px;
  border-radius:  10%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
`;
 




export const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;




export const SubmitButton = styled(Link)`

  width: 100%;
  padding: 12px;
  margin-top: 18px;
  border: none;
  border-radius: 8px;
  background-color: #191a53;
  color: white;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;


  &:hover {
    background-color: #FF6347;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;




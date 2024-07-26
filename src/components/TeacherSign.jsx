import React, { useState } from 'react'
import {
    StudentSignInContainer,
    FormContainer,
    InputField,
    SubmitButton,
    Headings,
    Logo,
    LogoIn,
    Liner
} from '../styles/StudentSignInStyles';

import SBanner from '../assets/SBanner.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const TeacherSign = () => {

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
   

  const handleSubmit = async (e) => {

    e.preventDefault();

    setErrorMessage(""); // Clear any previous error messages
    try {
      console.log("Sending request to backend");
      const response = await axios.post('http://localhost:3000/api/v1/teachers/login', { username, password });
      console.log("Response received from backend:", response);
      
      if (response.data.status) {
        navigate('/Teacher/Dashboard');
      } else {
        setErrorMessage(response.data.message || "Login failed");
      }
    } catch (err) {
      setErrorMessage("An error occurred during login. Please try again.");
      console.error("Error during login:", err);
    }
  };

  

  return (
    
    <StudentSignInContainer>
        <FormContainer>
          <Logo>

            <LogoIn src={SBanner} />

          </Logo>
          <Headings> Welcome Back!</Headings>

        <Liner />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <InputField
            
            type='email'
            id="username"
            autoComplete="off"
            placeholder='Email'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            
            
            />
            <InputField
            
            type='password'
            id="password"
            autoComplete="off"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        
            />
            <SubmitButton type="button" onClick={handleSubmit}>Sign In</SubmitButton>
        </FormContainer>
    </StudentSignInContainer>
    

  )
}


export default TeacherSign;
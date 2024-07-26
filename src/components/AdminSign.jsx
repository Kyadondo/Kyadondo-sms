import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  StudentSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
  Headings,
  Logo,
  LogoIn,
  Liner,
  BelowTag,
  Edit
} from '../styles/StudentSignInStyles';
import SBanner from '../assets/SBanner.jpg';

export const AdminSign = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages
    try {
      console.log("Sending request to backend");
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', { username, password });
      console.log("Response received from backend:", response);
      
      if (response.data.status) {
        navigate('/Admin/Dashboard');
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
      <FormContainer onSubmit={handleSubmit}>
        <Logo>
          <LogoIn src={SBanner} />
        </Logo>
        <Headings> Welcome Back! Admin</Headings>
        <Liner />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <InputField
          type="email"
          id="username"
          autoComplete="off"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <InputField
          type='password'
          id="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="button" onClick={handleSubmit}>Sign In</SubmitButton>
        <BelowTag> Kyadondo Technical Institute <Edit>Busabala</Edit></BelowTag>
      </FormContainer>
    </StudentSignInContainer>
  );
}

export default AdminSign;

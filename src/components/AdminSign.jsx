import React, { useState,  useRef, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthProvider.jsx'
import api from '../api/api.js'

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
import axios from 'axios';




const LOGIN_URL = '/AdminAuth';


export const AdminSign = () => {

    const { setAuth } = useContext(AuthContext);
  
    const userRef = useRef();
    const errRef = useRef();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [ErrMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
      
      userRef.current.focus();

    }, [])


    useEffect(() => {
      setErrMsg('');

    }, [email, password])


   


    const HandleSignInClick = () =>{
        

       console.log('Admin Logged in', { email, password});


    };




    const handleSubmit = async (e) => {
      e.preventDefault();

  

    }

  return (
    <StudentSignInContainer> 
      <p ref={errRef} className={ErrMsg ? "errmsg" : " offscreen"} aria-live="assertive">{ErrMsg} </p>
        <FormContainer onSubmit={handleSubmit}>
          <Logo>

            <LogoIn src={SBanner} />

          </Logo>
          <Headings> Welcome Back! Admin</Headings>

        <Liner />
            <InputField
            
            type="email"
            id="emailId"
            ref={userRef}
            autoComplete="off"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            <SubmitButton to="/Admin/Dashboard" type="button" onClick={HandleSignInClick}>Sign In</SubmitButton>

            <BelowTag> Kyadondo Technical Institute <Edit>Busabala</Edit></BelowTag>
        </FormContainer>
    </StudentSignInContainer>
    

  )
}


export default AdminSign;
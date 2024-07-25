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

export const AdminSign = () => {

  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   


    const HandleSignInClick = () =>{
        
       console.log('Teaccher Logged In Success', { email, password});
    };


  return (
    
    <StudentSignInContainer>
        <FormContainer>
          <Logo>

            <LogoIn src={SBanner} />

          </Logo>
          <Headings> Welcome Back!</Headings>

        <Liner />
            <InputField
            
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            
            
            />
            <InputField
            
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        
            />
            <SubmitButton to="/Teacher/Dashboard" type="button" onClick={HandleSignInClick}>Sign In</SubmitButton>
        </FormContainer>
    </StudentSignInContainer>
    

  )
}


export default AdminSign;
import React, { useState } from 'react'
import {
    StudentSignInContainer,
    FormContainer,
    InputField,
    SubmitButton
} from '../styles/StudentSignInStyles';

export const StudentSign = () => {

  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   


    const HandleSignInClick = () =>{
        
       console.log('Student Has Logged In', { email, password});
    };


  return (
    
    <StudentSignInContainer>
        <h2>Student Login</h2>
        <FormContainer>
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
            <SubmitButton to="/Student/Dashboard" type="button" onClick={HandleSignInClick}>Login as Student</SubmitButton>
        </FormContainer>
    </StudentSignInContainer>

  )
}


export default StudentSign;
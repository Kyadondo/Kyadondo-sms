import React from 'react'
import { useEffect, useState } from 'react';
import './EnrollmentForm'
import styled from 'styled-components'
import DefaultProfile from '../../assets/DefaultProfile.png';
import './Enroll.css'
import { blue } from '@mui/material/colors';




export const RegistrationContainer = styled.section`
    

    width: 100%;

`
;


export const Selector = styled.select`
  
    outline: none;
    font-size: .8rem;
    border-radius: .2rem;
    border: 1px solid rgb(113, 101, 101);
    padding: 20px;
    background-color: transparent;
    margin: 8px;
    width: 321px;



`;


export const Btn = styled.button`
  
  
    font-size: .8rem;
    outline: none;
    border-radius: .2rem;
    padding: 20px;
    margin: 8px;
    margin-left: 100px;
    margin-right: 100px;
    width: 321px;
    cursor: pointer;
    margin-top: 8px;
    background-color: #0e365d;
    color: white;




`;





















export const ImageUp = styled.label`

    display: block;
    width: 120px;
    background-color: #000000;
    color: white;
    padding: 12px;
    margin: 10px auto;
    border-radius: 5px;
    cursor: pointer;


`
;


export const ImageContainer = styled.div`


    width: 200px;
    background-color:#ffffff;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    


`;


export const UserProfile = styled.img`

    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 30px;



`


















export const RegistrationForm = styled.form`

width: 100%;
padding-left: 18px;

`
;


export const Details = styled.section`



`
;


export const PersonalDetails = styled.section`
    


`;


export const ThreeDetails = styled.div`

display: flex;
flex-wrap: wrap;



`;


export const Inputter = styled.input`
   
   outline: none;
    font-size: .8rem;
    border-radius: .2rem;
    border: 1px solid rgb(113, 101, 101);
    padding: 20px;
    background-color: transparent;
    margin: 8px;
    width: 280px;




`;



export const Labels = styled.label`
    
    margin: .5rem 1rem;
    font-size: .9rem;
    font-weight: 600;



`;

export const Ruler = styled.hr`
    
    width: 200px;
    height: 1px;
    background-color: #d2d2d2;
    margin: 1rem 0;
    border: none;


`
;




export const UpdateStudentInfor = ({ student }) => {
    
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add more fields as needed
  });

  // Update form data when selected student changes
  useEffect(() => {
    if (student) {
      setFormData({
        firstName: student.firstName || '',
        lastName: student.lastName || '',
        dateOfBirth: student.dateOfBirth|| '',
        gender: student.gender|| '',
        phoneNumber: student.phoneNumber|| '',
        email: student.email|| '',
        parentName: student.parentName|| '',
        parentNumber: student.parentNumber|| '',
        religion: student.religion|| '',
        previousSchool: student.previousSchool|| '',
        level: student.level|| '',
        award: student.award || '',
        program: student.program|| '',
        academicYear: student.academicYear|| '',
        modeOfStudy: student.modeOfStudy|| '',
        enrollmentStatus: student.enrollmentStatus|| '',
        paymentPlan: student.paymentPlan|| '',
        studentID: student.studentID|| '',
        country: student.country|| '',
        district: student.district|| '',
        subcounty: student.subcounty|| '',
        village: student.village|| '',
        nationalIDNumber: student.nationalIDNumber|| '',
        passportNumber: student.passportNumber|| '',
        expiryDate: student.expiryDate|| '',
        username: student.username|| '',
        password: student.password|| '',
        confirmPassword: student.confirmPassword
    

        // Update with other fields from student object as needed
      });
    }
  }, [student]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your update logic here, e.g., call an API to update the student data
    console.log('Updated data:', formData);
    // Reset form or update state as needed after successful update
  };
  
    return (
      <RegistrationContainer>
        <Details>
          <RegistrationForm>
            <h4>Personal Details</h4>
            <section className="personal-details">
              <ThreeDetails>
              
          </ThreeDetails>

          <ThreeDetails>
            <Labels for="name">
              <p>First Name</p>
              <Inputter type="text" name="firstName"  value={formData.firstName}  placeholder="Enter First name"/>
            </Labels>
            <Labels for="fName">
              <p> Last Name </p>
              <Inputter type="text" name="lastName" value={formData.lastName} placeholder="Enter Last name"/>
            </Labels>
            <Labels for="mName">
              <p>Date of Birth</p>
              <Inputter type="date" name="dateOfBirth"  value={formData.dateOfBirth} placeholder="Enter mother name"/>
            </Labels>
          </ThreeDetails>

          <ThreeDetails>
            <Labels for="DOB">
              <p>Gender</p>
              <Selector 
              name="gender"
              value={formData.gender}
              >
                <option>Male</option>
                <option>Female</option>
              </Selector>
            </Labels>
            <Labels for="aadharNo">
              <p>Phone Number</p>
              <Inputter type="text"  name="phoneNumber" value={formData.phoneNumber} placeholder="Enter Phone number"/>
            </Labels>
            <Labels for="email">
              <p>Email</p>
              <Inputter type="email"  name="email" value={formData.email} placeholder="Enter your email"/>
            </Labels>
          </ThreeDetails>

          <ThreeDetails>
            <Labels for="ph">
              <p>Parent's Name</p>
              <Inputter type="text" name="parentName" value={formData.parentName} placeholder="Enter Parent's Name"/>
            </Labels>

            <Labels for="gender">
              <p> Parent's Number</p>
              <Inputter type="text" name="parentNumber"  value={formData.parentNumber} placeholder="Enter Parent's Number"/>
            </Labels>

            <Labels for="address">
              <p> Religion </p>
              <Inputter type="text"  name="religion" value={formData.religion} placeholder="Enter your Religion"/>
            </Labels>
          </ThreeDetails>

        
        </section>

        <Ruler/>

        <h4>Education Details </h4>
        <section class="identity-details">
          <ThreeDetails>
            <Labels for="stream">
              <p> Previous School </p>
              <Inputter type="text" name="previousSchool" value={formData.previousSchool} placeholder="Enter Previous School"/>
            </Labels>
            <Labels for="previousClass">
              <p> Level </p>
              <Selector
               name="level"
               value={formData.level}
               >
                <option>Primary Leaving Examination</option>
                <option>Uganda Certificate of Education</option>
                <option>Uganda Advanced Certificate of Education</option>
              </Selector>
            </Labels>
            <Labels for="hobbies">
              <p>Award </p>
              <Selector
              name="award"
              value={formData.award}
              >
                <option>Primary Leaving Examination Slip</option>
                <option>Uganda Certificate of Education Slip</option>
                <option>Uganda Advanced Certificate of Education Slip</option>
              </Selector>
            </Labels>
          </ThreeDetails>
  

    </section>
    <Ruler/>
    <h4>Enrollment Details </h4>
        <section class="identity-details">
          <ThreeDetails>
            <Labels for="stream">
              <p> Program </p>
              <Inputter type="text"  name="program" value={formData.program} placeholder="Program  "/>
            </Labels>
            <Labels for="previousClass">
              <p> Academic Year </p>
              <Inputter type="password" name="academicYear" value={formData.academicYear} placeholder=" Academic Year"/>
            </Labels>
            <Labels for="hobbies">
              <p>Mode Of Study</p>
              <Selector
               name="modeOfStudy"
               value={formData.modeOfStudy}
              >
                <option>Full Time</option>
                <option>Part Time</option>

              </Selector>
            </Labels>
          </ThreeDetails>
          <ThreeDetails>
            <Labels for="stream">
              <p>Enrollment Status </p>
              <Selector
              name="enrollmentStatus"
              value={formData.enrollmentStatus}
              >
                <option>New Student</option>
                <option>Continuing Student</option>
              </Selector>
            </Labels>
            <Labels for="previousClass">
              <p> Payment Plan </p>
              <Selector
              name="paymentPlan"
              value={formData.paymentPlan}
              >
                <option>Private </option>
                <option>Scholarship</option>

              </Selector>
            </Labels>
            <Labels for="hobbies">
              <p>Student ID </p>
              <Inputter type="password"  name="studentID" value={formData.studentID} placeholder="Student ID"/>
            </Labels>
          </ThreeDetails>
      
      


    </section>

    <Ruler/>



    <h4>Address Details </h4>
        <section class="identity-details">
          <ThreeDetails>
            <Labels for="stream">
              <p> Country</p>
              <Inputter type="text" name="country" value={formData.country} placeholder="Enter Previous School"/>
            </Labels>
            <Labels for="previousClass">
              <p> District </p>
              <Inputter type="text" name="district" value={formData.district} placeholder="Enter Education Level"/>
            </Labels>
            <Labels for="hobbies">
              <p>Sub-County </p>
              <Inputter type="text" name="subCounty" value={formData.subcounty} placeholder="Enter subCounty"/>
            </Labels>
            
          </ThreeDetails>

          <ThreeDetails>
            <Labels for="stream">
              <p> Village</p>
              <Inputter type="text" name="village" value={formData.village} placeholder="Enter Your Village"/>
            </Labels>
          
            
          </ThreeDetails>
          
    </section>

    <Ruler/>
    <h4>Indentification Details <span><h4>Provide One</h4></span> </h4>
        <section class="identity-details">
          <ThreeDetails>
            <Labels for="stream">
              <p> National ID Number </p>
              <Inputter type="text" name="nationalIDNumber" value={formData.nationalIDNumber} placeholder="Enter National ID Number "/>
            </Labels>
            <Labels for="previousClass">
              <p> Passport Number </p>
              <Inputter type="password" id="PassportNumber" value={formData.passportNumber} placeholder="Enter Passport Number"/>
            </Labels>
            <Labels for="hobbies">
              <p>Expiry Date </p>
         
              <Inputter type="password" name="expiryDate" value={formData.expiryDate} placeholder="Expiry Date"/>

            </Labels>
          </ThreeDetails>
      
      


    </section>
        <Ruler/>
    <h4>Student Login Details </h4>
        <section class="identity-details">
          <ThreeDetails>
            <Labels for="stream">
              <p> Username </p>
              <Inputter type="text" name="username" value={formData.username} placeholder="Enter Student UserName"/>
            </Labels>
            <Labels for="previousClass">
              <p> Password </p>
              <Inputter type="password" name="password" value={formData.password} placeholder="Enter Student Password"/>
            </Labels>
            <Labels for="hobbies">
              <p>Confirm Password </p>
              <Inputter type="password" name="confirmPassword"  placeholder="Confirm Password"/>
            </Labels>
          </ThreeDetails>
          <p>
           <span style={{fontWeight: 'bold'}}>
            NOTE*
            </span>
            <br/>
            <br/>
             If asked you will need to provide more details.
          </p>
 

          <ThreeDetails>
            <Labels for="stream">
              <Btn>
                SAVE CHANGES
              </Btn>
              <Btn>
                CANCEL
              </Btn>
            </Labels>

          </ThreeDetails>
    </section>
  
    </RegistrationForm> 
</ Details>

    </RegistrationContainer>

  )
}

export default UpdateStudentInfor;
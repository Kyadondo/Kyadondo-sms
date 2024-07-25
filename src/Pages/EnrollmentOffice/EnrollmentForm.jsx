import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import './EnrollmentForm'
import styled from 'styled-components'
import DefaultProfile from '../../assets/DefaultProfile.png';
import './Enroll.css'
import { blue } from '@mui/material/colors';
import Swal from 'sweetalert2';


import api from '../../../api.js'



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
    width: 270px;

`;


export const Btn = styled.button`
  
  
    font-size: .8rem;
    outline: none;
    border-radius: .2rem;
    padding: 20px;
    margin: 8px;
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
    width: 230px;

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


export const EnrollmentForm = () => {

  

  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    email: '',
    parentName: '',
    parentNumber: '',
    religion: '',
    previousSchool: '',
    level: '',
    award: '',
    program: '',
    academicYear: '',
    modeOfStudy: '',
    enrollmentStatus: '',
    paymentPlan: '',
    studentID: '',
    country: '',
    district: '',
    subCounty: '',
    village: '',
    nationalIDNumber: '',
    passportNumber: '',
    expiryDate: '',
    username: '',
    password: '',
    confirmPassword: '',
  });


  const formRef = useRef(null);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentData({
        ...studentData,
        [name]: value,
    });
};

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
      const response = await api.post('v1/students/', studentData, {
          headers: {
              'Content-Type': 'application/json',
          },
      });
      console.log('Student created:', response.data);
      
      // Show success SweetAlert

      Swal.fire({
          title: 'Success!',
          text: 'Student Enrolled Successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
      });


      // Reset form fields
      if (formRef.current) {
          formRef.current.reset();
      }
      

  } catch (error) {
      console.error('Error creating student:', error);
      // Handle error (show error message, etc.)
      Swal.fire({
          title: 'Error!',
          text: 'Failed to add student. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
      });
  }
};




    return (
      <RegistrationContainer>
        <Details>
          <RegistrationForm     ref={formRef}  onSubmit={handleSubmit}>
            <h4>Personal Details</h4>
            <section className="personal-details">
              <ThreeDetails>
           

            
          </ThreeDetails>

          <ThreeDetails>
            <Labels for="name">
              <p>First Name</p>
              <Inputter
                    type="text"
                    name="firstName"
                    value={studentData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter First name"
                    required
               />

            </Labels>

            <Labels for="lName">
              <p> Last Name </p>
              <Inputter
                    type="text"
                    name="lastName"
                    value={studentData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Last name"
                    required
               />
            </Labels>

            <Labels htmlFor="dob">
                  <p>Date of Birth</p>
              <Inputter
                    type="date"
                    name="dateOfBirth"
                    value={studentData.dateOfBirth}
                    onChange={handleInputChange}
                    placeholder="Enter Date of Birth"
                    required
                />
              </Labels>
          </ThreeDetails>


         <ThreeDetails>
                <Labels htmlFor="gender">
                  <p>Gender</p>
                  <Selector
                    name="gender"
                    value={studentData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Selector>
                </Labels>
                <Labels htmlFor="phoneNumber">
                  <p>Phone Number</p>
                  <Inputter
                    type="text"
                    name="phoneNumber"
                    value={studentData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Phone number"
                    required
                  />
                </Labels>
                <Labels htmlFor="email">
                  <p>Email</p>
                  <Inputter
                    type="email"
                    name="email"
                    value={studentData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </Labels>
              </ThreeDetails>


              <ThreeDetails>
          <Labels htmlFor="parentName">
            <p>Parent's Name</p>
            <Inputter
              type="text"
              name="parentName"
              id="ParentName"
              placeholder="Enter Parent's Name"
              onChange={handleInputChange}
              required
            />
          </Labels>

          <Labels htmlFor="parentNumber">
            <p>Parent's Number</p>
            <Inputter
              type="text"
              name="parentNumber"
              id="ParentNumber"
              placeholder="Enter Parent's Number"
              onChange={handleInputChange}
              required
            />
          </Labels>

          <Labels htmlFor="religion">
            <p>Religion</p>
            <Inputter
              type="text"
              name="religion"
              id="Religion"
              placeholder="Enter Religion"
              onChange={handleInputChange}
              required
            />
          </Labels>
        </ThreeDetails>

        
        </section>

        <Ruler/>

        <h4>Education Details </h4>
        <section class="identity-details">
          <ThreeDetails>
          <Labels htmlFor="previousSchool">
            <p>Previous School</p>
            <Inputter
              type="text"
              name="previousSchool"
              id="PrevSchool"
              placeholder="Enter Previous School"
              onChange={handleInputChange}
              required
            />
          </Labels>

          <Labels htmlFor="level">
            <p>Level</p>
            <Selector
              name="level"
              onChange={handleInputChange}
              value={studentData.level}
              required
            >
              <option value="">Select Level</option>
              <option value="Primary Leaving Examination">
                Primary Leaving Examination
              </option>
              <option value="Uganda Certificate of Education">
                Uganda Certificate of Education
              </option>
              <option value="Uganda Advanced Certificate of Education">
                Uganda Advanced Certificate of Education
              </option>
            </Selector>
          </Labels>


          <Labels htmlFor="award">
            <p>Award</p>
            <Selector
              name="award"
              onChange={handleInputChange}
              value={studentData.award}
              required
            >
              <option value="">Select Award</option>
              <option value="Primary Leaving Examination Slip">
                Primary Leaving Examination Slip
              </option>
              <option value="Uganda Certificate of Education Slip">
                Uganda Certificate of Education Slip
              </option>
              <option value="Uganda Advanced Certificate of Education Slip">
                Uganda Advanced Certificate of Education Slip
              </option>
            </Selector>
          </Labels>
          </ThreeDetails>
  

    </section>
    <Ruler/>
    <h4>Enrollment Details </h4>
        <section class="identity-details">
          <ThreeDetails>
          <Labels htmlFor="program">
            <p>Program</p>
            <Inputter
              type="text"
              name="program"
              id="Program"
              placeholder="Enter Program"
              onChange={handleInputChange}
              required
            />
          </Labels>

           <Labels htmlFor="academicYear">
            <p>Academic Year</p>
            <Inputter
              type="text"
              name="academicYear"
              id="AcademicYear"
              placeholder="Enter Academic Year"
              onChange={handleInputChange}
              required
            />
          </Labels>

            <Labels htmlFor="modeOfStudy">
            <p>Mode Of Study</p>
            <Selector
              name="modeOfStudy"
              onChange={handleInputChange}
              value={studentData.modeOfStudy}
              required
            >
              <option value="">Select Mode Of Study</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </Selector>
          </Labels>

          </ThreeDetails>
          <ThreeDetails>
            
          <Labels htmlFor="enrollmentStatus">
            <p>Enrollment Status</p>
            <Selector
              name="enrollmentStatus"
              onChange={handleInputChange}
              value={studentData.enrollmentStatus}
              required
            >
              <option value="">Select Enrollment Type</option>
              <option value="New Student">New Student</option>
              <option value="Continuing Student">Continuing Student</option>
            </Selector>
          </Labels>

           
          <Labels htmlFor="paymentPlan">
            <p>Payment Plan</p>
            <Selector
              name="paymentPlan"
              onChange={handleInputChange}
              value={studentData.paymentPlan}
              required
            >
              <option value="">Select Payment Plan</option>
              <option value="Private">Private</option>
              <option value="Scholarship">Scholarship</option>
            </Selector>
          </Labels>

          <Labels htmlFor="studentID">
            <p>Student ID</p>
            <Inputter
              type="text"
              name="studentID"
              id="StudentID"
              placeholder="Enter Student ID"
              onChange={handleInputChange}
              required
            />
          </Labels>


          </ThreeDetails>
      
      


    </section>

    <Ruler/>



    <h4>Address Details </h4>
        <section class="identity-details">
          <ThreeDetails>

           <Labels htmlFor="country">
            <p>Country</p>
            <Inputter
              type="text"
              name="country"
              id="Country"
              placeholder="Enter Country"
              onChange={handleInputChange}
              required
            />
          </Labels>


            <Labels htmlFor="district">
            <p>District</p>
            <Inputter
              type="text"
              name="district"
              id="District"
              placeholder="Enter District"
              onChange={handleInputChange}
              required
            />
          </Labels>



            <Labels htmlFor="subCounty">
            <p>Sub-County</p>
            <Inputter
              type="text"
              name="subCounty"
              id="Sub-County"
              placeholder="Enter Sub-County"
              onChange={handleInputChange}
              required
            />
          </Labels>
            
          </ThreeDetails>

          <ThreeDetails>
            
          <Labels htmlFor="village">
            <p>Village</p>
            <Inputter
              type="text"
              name="village"
              id="Village"
              placeholder="Enter Village"
              onChange={handleInputChange}
              required
            />
          
          </Labels>
            
          </ThreeDetails>
          
    </section>

    <Ruler/>
    <h4>Indentification Details <span><h4>Provide One</h4></span> </h4>
        <section class="identity-details">
          <ThreeDetails>
          <Labels htmlFor="nationalIDNumber">
            <p>National ID Number</p>
            <Inputter
              type="text"
              name="nationalIDNumber"
              id="NationalIDNumber"
              placeholder="Enter National ID Number"
              onChange={handleInputChange}
              required
            />
          </Labels>


           <Labels htmlFor="passportNumber">
            <p>Passport Number</p>
            <Inputter
              type="text"
              name="passportNumber"
              id="PassportNumber"
              placeholder="Enter Passport Number"
              onChange={handleInputChange}
              required
            />
          </Labels>


         <Labels htmlFor="expiryDate">
            <p>Expiry Date</p>
            <Inputter
              type="text"
              name="expiryDate"
              id="ExpiryDate"
              placeholder="Enter Expiry Date"
              onChange={handleInputChange}
              required
            />
          </Labels>


          </ThreeDetails>
      
    </section>
        <Ruler/>
    <h4>Student Login Details </h4>
        <section class="identity-details">
          <ThreeDetails>
                 <Labels htmlFor="username">
            <p>Username</p>
            <Inputter
              type="text"
              name="username"
              id="Username"
              placeholder="Enter Username"
              onChange={handleInputChange}
              required
            />
          </Labels>


               <Labels htmlFor="password">
            <p>Password</p>
            <Inputter
              type="password"
              name="password"
              id="Password"
              placeholder="Enter Password"
              onChange={handleInputChange}
              required
            />
          </Labels>


             <Labels htmlFor="confirmPassword">
            <p>Confirm Password</p>
            <Inputter
              type="password"
              name="confirmPassword"
              id="ConfirmPassword"
              placeholder="Confirm Password"
              onChange={handleInputChange}
              required
            />
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
              <Btn type="submit">
                ADD STUDENT
              </Btn>
            </Labels>

          </ThreeDetails>
    </section>
  
    </RegistrationForm> 
</ Details>

    </RegistrationContainer>

  )
}

export default EnrollmentForm;
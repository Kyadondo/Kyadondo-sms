import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import api from '../../../api/api.js';
import  '../../EnrollmentOffice/Enroll.css';

export const RegistrationContainer = styled.section`
    width: 100%;
`;

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
`;

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
`;

export const RegistrationForm = styled.form`
    width: 100%;
    padding-left: 18px;
`;

export const Details = styled.section``;

export const PersonalDetails = styled.section``;

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
`;

export const EnrollmentForm = () => {
    const [teacherData, setTeacherData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        phoneNumber: '',
        email: '',
        country: '',
        district: '',
        subCounty: '',
        village: '',
        nationalID: '',
        passportNumber: '',
        expiryDate: '',
        classId: ''
    });

   
    const [classes, setClasses] = useState([]);

    
     useEffect(() => {
       const fetchClasses = async () => {
         try {
           const response = await api.get('/api/v1/Classes/getAll');
           if (response.data && Array.isArray(response.data.classes)) {
             setClasses(response.data.classes);
           } else {
             console.error('Expected an array of classes, but received:', response.data);
           }
         } catch (error) {
           console.error('Error fetching classes:', error);
           Swal.fire({
             title: 'Error!',
             text: 'Please Connect to the Internet. Please try again.',
             icon: 'error',
             confirmButtonText: 'OK',
           });
         }
       };
       fetchClasses();
     }, []);


    const resetForm = () => {
        setTeacherData({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            gender: '',
            phoneNumber: '',
            email: '',
            country: '',
            district: '',
            subCounty: '',
            village: '',
            nationalID: '',
            passportNumber: '',
            expiryDate: '',
            classId: ''
        });
    };


    
    const validateForm = () => {
        const errors = {};

        if(!teacherData.firstName){
            errors.firstName = 'First Name is Required';
        }
        if(!teacherData.lastName){
            errors.lastName = 'Last Name is Required';
        }
        if(!teacherData.dateOfBirth){
            errors.dateOfBirth = 'Date of Birth is Required';
        }
        if(!teacherData.gender){
            errors.gender= 'Gender is Required';
        }
        if(!teacherData.phoneNumber){
            errors.phoneNumber = 'Phone Number is Required';
        }
        if(!teacherData.email){
            errors.email = 'Email is Required';
        }
        if(!teacherData.country){
            errors.country = 'Country is Required';
        }
        if(!teacherData.district){
            errors.district= 'District is Required';
        }
        if(!teacherData.subCounty){
            errors.subCounty= 'Sub County is Required';
        }
        if(!teacherData.village){
            errors.village = 'Village is Required';
        }
        if(!teacherData.nationalID){
            errors.nationalID = 'National ID is Required';
        }
        if(!teacherData.expiryDate){
            errors.expiryDate = 'Expiry Date is Required';
        }
     {   if(!teacherData.classId){
           errors.classId= ' Class is Required';
       }}
    return errors;

    };



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'passportNumber') {
          const numericValue = value.replace(/[^0-9]/g, '');
          setTeacherData({ ...teacherData, passportNumber: numericValue });
        } else {
          setTeacherData({ ...teacherData, [name]: value });
        }
      };



    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
          try {
            const response = await api.post('/api/v1/Teachers/', teacherData);
            if (response.status === 200) {
              Swal.fire({
                title: 'Success!',
                text: 'Teacher added successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
              });
              resetForm();
            } else {
              console.error('Error creating teacher:', response.data);
              Swal.fire({
                title: 'Error!',
                text: 'Failed to add teacher. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
              });
      
            }
        } catch (error) {
          console.error('Error creating teacher:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to add teacher. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      } else {
        console.error('Form validation errors:', errors);
        Swal.fire({
          title: 'Error!',
          text: 'Please fix the form errors and try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    };
    

    return (
        <RegistrationContainer>
            <Details>
                <RegistrationForm onSubmit={handleSubmit}>
                    <h4>Personal Details</h4>
                    <section className="personal-details">
                        <ThreeDetails>
                            <Labels htmlFor="firstName">
                                <p>First Name</p>
                                <Inputter
                                    type="text"
                                    name="firstName"
                                    value={teacherData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="Enter First name"
                                    required
                                />
                            </Labels>
                            <Labels htmlFor="lastName">
                                <p>Last Name</p>
                                <Inputter
                                    type="text"
                                    name="lastName"
                                    value={teacherData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Last name"
                                    required
                                />
                            </Labels>
                            <Labels htmlFor="dateOfBirth">
                                <p>Date of Birth</p>
                                <Inputter
                                    type="Date"
                                    name="dateOfBirth"
                                    value={teacherData.dateOfBirth}
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
                                    value={teacherData.gender}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </Selector>
                            </Labels>
                            <Labels htmlFor="phoneNumber">
                                <p>Phone Number</p>
                                <Inputter
                                    type="text"
                                    name="phoneNumber"
                                    value={teacherData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="Enter Phone number"
                                    required
                                />
                            </Labels>
                            <Labels htmlFor="email">
                                <p>Email</p>
                                <Inputter
                                    type="text"
                                    name="email"
                                    value={teacherData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </Labels>
                        </ThreeDetails>
                    </section>
                    <Ruler />
                    <h4>Address Details </h4>
                    <section className="identity-details">
                        <ThreeDetails>
                            <Labels htmlFor="country">
                                <p>Country</p>
                                <Inputter
                                    type="text"
                                    name="country"
                                    value={teacherData.country}
                                    onChange={handleInputChange}
                                    placeholder="Enter Country"
                                    required
                                />
                            </Labels>
                            <Labels htmlFor="district">
                                <p>District</p>
                                <Inputter
                                    type="text"
                                    name="district"
                                    value={teacherData.district}
                                    onChange={handleInputChange}
                                    placeholder="Enter District"
                                    required
                                />
                            </Labels>
                            <Labels htmlFor="subCounty">
                                <p>Sub-County</p>
                                <Inputter
                                    type="text"
                                    name="subCounty"
                                    value={teacherData.subCounty}
                                    onChange={handleInputChange}
                                    placeholder="Enter Sub-County"
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
                                    value={teacherData.village}
                                    onChange={handleInputChange}
                                    placeholder="Enter Village"
                                    required
                                />
                            </Labels>
                        </ThreeDetails>
                    </section>
                    <Ruler />
                    <h4>Identification Details <span><h4>Provide One</h4></span> </h4>
                    <section className="identity-details">
                        <ThreeDetails>
                            <Labels htmlFor="nationalID">
                                <p>National ID Number</p>
                                <Inputter
                                    type="text"
                                    name="nationalID"
                                    value={teacherData.nationalID}
                                    onChange={handleInputChange}
                                    placeholder="Enter National ID Number"
                                    required
                                />

                            </Labels>
                            <Labels htmlFor="passportNumber">
                                <p>Passport Number</p>
                                <Inputter
                                    type="text"
                                    name="passportNumber"
                                    value={teacherData.passportNumber}
                                    onChange={handleInputChange}

                                    placeholder="Enter Passport Number"
                                    
                                />


                            </Labels>
                            <Labels htmlFor="expiryDate">
                                <p>Expiry Date</p>
                                <Inputter
                                    type="date"
                                    name="expiryDate"
                                    value={teacherData.expiryDate}
                                    onChange={handleInputChange}
                                    placeholder="Enter Expiry Date"
                                    required
                                />
                            </Labels>
                        </ThreeDetails>
                    </section>
                    <Ruler />
                   <h4>Assign Class </h4>
                    <section className="identity-details">
                        <ThreeDetails>
                            <Labels htmlFor="classId">
                                <p>Classes</p>
                                <Selector
                                    name="classId"
                                    value={teacherData.classes}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Class</option>
                                    {classes.map((classItem) => (
                                        <option key={classItem._id} value={classItem._id}>
                                            {classItem.className}
                                        </option>
                                    ))}
                                </Selector>
                            </Labels>
                        </ThreeDetails>
                    </section>
                    <p>
                        <span style={{fontWeight: 'bold'}}>
                            NOTE*
                        </span>
                        <br/>
                        <br/>
                        If asked you will need to provide more details.
                    </p>
                    <ThreeDetails>
                        <Labels htmlFor="stream">
                            <Btn type="submit">
                                ADD TEACHER
                            </Btn>
                        </Labels>
                    </ThreeDetails>
                </RegistrationForm> 
            </Details>
        </RegistrationContainer>
    )
}

export default EnrollmentForm;

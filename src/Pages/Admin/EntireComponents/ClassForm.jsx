import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import api from '../../../api/api.js';

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

export const ClassForm = () => {
  const [classData, setClassData] = useState({
    className: '',
    classCode: '',
    department: '',
    classTime: '',
    classRoom: '',
  });

  const resetForm = () => {
    setClassData({
      className: '',
      classCode: '',
      department: '',
      classTime: '',
      classRoom: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/api/v1/Classes/', classData);
      console.log('Class created:', response.data);
      Swal.fire({
        title: 'Success!',
        text: 'Class added successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      resetForm();  // Reset form after successful submission
    } catch (error) {
      console.error('Error creating class:', error);
      if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
        console.error('Headers:', error.response.headers);
      }
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add class. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClassData({ ...classData, [name]: value });
  };

  return (
    <RegistrationContainer>
      <Details>
        <RegistrationForm onSubmit={handleSubmit}>
          <h4>Class Details</h4>
          <ThreeDetails>
            <Labels htmlFor="name">
              <p>Class Name</p>
              <Inputter
                type="text"
                name="className"
                value={classData.className}
                onChange={handleInputChange}
                placeholder="Class Name"
                required
              />
            </Labels>
            <Labels htmlFor="lName">
              <p>Class Code</p>
              <Inputter
                type="text"
                name="classCode"
                value={classData.classCode}
                onChange={handleInputChange}
                placeholder="Class Code"
                required
              />
            </Labels>
            <Labels htmlFor="dob">
              <p>Department</p>
              <Inputter
                type="text"
                name="department"
                value={classData.department}
                onChange={handleInputChange}
                placeholder="Department"
                required
              />
            </Labels>
          </ThreeDetails>
          <ThreeDetails>
            <Labels htmlFor="ClassTime">
              <p>Class Time</p>
              <Inputter
                type="text"
                name="classTime"
                value={classData.classTime}
                onChange={handleInputChange}
                placeholder="Enter Class Time"
                required
              />
            </Labels>
            <Labels htmlFor="Classroom">
              <p>Classroom</p>
              <Inputter
                type="text"
                name="classRoom"
                value={classData.classRoom}
                onChange={handleInputChange}
                placeholder="Enter Classroom"
                required
              />
            </Labels>
          </ThreeDetails>
          <Ruler />
          <ThreeDetails>
            <Labels htmlFor="stream">
              <Btn type="submit">Add Class</Btn>
            </Labels>
          </ThreeDetails>
        </RegistrationForm>
      </Details>
    </RegistrationContainer>
  );
};

export default ClassForm;

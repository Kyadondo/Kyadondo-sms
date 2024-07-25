import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { AdminDashboardContainer, Content } from '../../styles/NewDashboardStyles';
import { CardContainer, EnrollCard } from '../../styles/DashboardStyles';

export const Student = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/students/getall')
      .then(response => {
        if (!response.ok) {
          throw new Error('API returned an error');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (!data.success || !Array.isArray(data.students)) {
          throw new Error('API did not return an array');
        }
        setStudents(data.students);
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  }, []);
  
  

  return (
    <AdminDashboardContainer>
      <Sidebar/>
      <Content>
        <CardContainer>
      
          <div className="Sep">
            <h2>Students</h2>
            <EnrollCard>
            {error ? (
              <p style={{ color: 'red', padding: 20, fontSize: 20 }}>{"You're not Connect to the Internet"}</p>
            ) : students.length === 0 ? (
              <p style={{ color: 'red', padding: 20, fontSize: 20 }} >No students found</p>
            ) : (

            
              <table className="Format">
              <thead>
                <tr>
                <th>Student ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>Level</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Program</th>

                  {/* Add other column headers as needed */}
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td className="StudentAdm">{student.studentID}</td>
                    <td className="StudentAdm">{student.firstName}</td>
                    <td className="StudentAdm">{student.lastName}</td>
                    <td className="StudentAdm">{student.gender}</td>
                    <td className="StudentAdm">{student.level}</td>
                    <td className="StudentAdm">{student.phoneNumber}</td>
                    <td className="StudentAdm">{student.email}</td>
                    <td className="StudentAdm">{student.program}</td>
                    {/* Add other table data as needed */}
                  </tr>
                ))}
              </tbody>
            </table>

            )}
             </EnrollCard> 
          </div>
         
        </CardContainer>
      </Content>
    </AdminDashboardContainer>
  );
};

export default Student;

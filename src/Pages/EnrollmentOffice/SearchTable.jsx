import React from 'react'
import './StudentQ.css'
import { useState, useEffect } from 'react';
import { fetchAllStudents } from '../../api/api.js';

export const SearchTable = ({ onSelectStudent }) => {



  const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    
    const fetchData = async () => {
        try {
            const response = await fetchAllStudents();
            setStudents(response.data.students);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleRowClick = (student) => {
        onSelectStudent(student); // Pass selected student to parent component
      };



  return (
    <>
 <div className="table-container">
            <table className="Search_Table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student)  => (
                        <tr key={student.id} onClick={() => handleRowClick(student)}>
                            <td>{student.studentID}</td> 
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </>
  )
}


export default SearchTable;
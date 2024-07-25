import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UploadMarks.css';

function UploadMarks() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [subject, setSubject] = useState('');
  const [mark, setMark] = useState('');
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    // Fetch students from the backend
    axios.get('http://localhost:3000/api/v1/students/getall')
      .then(response => {
        console.log('Response data:', response.data); // Log the response for debugging
        if (response.data.success && Array.isArray(response.data.students)) {
          setStudents(response.data.students);
        } else {
          console.error('Expected an array of students but got:', response.data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        setLoading(false);
      });
  }, []);

  const handleStudentChange = (event) => {
    const selectedStudentId = event.target.value;
    const selectedStudent = students.find(student => student._id === selectedStudentId);
    setStudentId(selectedStudentId);
    setStudentName(`${selectedStudent.firstName} ${selectedStudent.lastName}`);
    console.log('Selected student:', selectedStudentId); // Log selected student
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMarkChange = (event) => {
    setMark(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMark = { studentName, subject, mark };
    setMarks([...marks, newMark]);
    // API call to upload mark can be implemented here later
  };

  return (
    <div className="upload-marks">
      <h2>Upload Marks</h2>
      {loading ? (
        <p>Loading students...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="student-select">
            <label>Select Student:</label>
            <select value={studentId} onChange={handleStudentChange}>
              <option value="" disabled>Select a student</option>
              {students.map((student) => (
                <option key={student._id} value={student._id}>
                  {student.firstName} {student.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="subject-select">
            <label>Select Subject:</label>
            <select value={subject} onChange={handleSubjectChange}>
              <option value="" disabled>Select a subject</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
            </select>
          </div>
          <div className="mark-input">
            <label>Enter Mark:</label>
            <input className="LowerMarks" type="number" value={mark} onChange={handleMarkChange} />
          </div>
          <button type="submit">
            Upload Marks
          </button>
        </form>
      )}
      <div className="mark-history">
        <h2>Mark History</h2>
        <ul>
          {marks.map((mark, index) => (
            <li key={index}>{mark.studentName} - {mark.subject} - {mark.mark}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UploadMarks;

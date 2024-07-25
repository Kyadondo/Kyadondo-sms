import React, { useState } from 'react';
import '../Admin.css'


const complaintsData = [
  {
    id: 1,
    studentName: 'John Doe',
    complaint: 'Teacher was late to class,  Failure to comply may result in denied inbox access, Teacher was late to class,  Failure to comply may result in denied inbox access,Teacher was late to class,  Failure to comply may result in denied inbox access',
    date: '2022-01-01'
  },
  {
    id: 2,
    studentName: 'Jane Smith',
    complaint: 'Noisy classroom',
    date: '2022-01-15'
  },
  // Add more data here...
];

const ComplaintsSection =() => {

        
const [complaints, setComplaints] = useState(complaintsData);

const handleResolve = (id) => {
    setComplaints(complaints.filter((complaint) => (complaint.id) !== id));
  };



    
  return (

    <div className="ComplaintSection">
      <h2>Complaints</h2>
      <ul>


        {complaints.map(complaint => (
          <li key={(complaint.id)}>
            <p><span>Student:</span> {complaint.studentName}</p>
            <p> <span>Complaint:</span> {complaint.complaint}</p>
            <p> <span> Date: </span> {complaint.date}</p>
            <button onClick={() => handleResolve((complaint.id))}>Resolve</button>
          </li>
        ))}
      </ul>



    </div>

  );
};


export default ComplaintsSection;

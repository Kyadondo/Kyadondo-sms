import React from 'react'
import  Sidebar from './Sidebar'
import { useState, useEffect } from 'react'

import {
    StudentDashboardContainer,
    SectionTitle,
    EnrollCard
 

  

} from '../../styles/DashboardStyles'





import {


  Content,
  Section,
  CardContainer,


} from '../../styles/StudentsStyles'

import UpdateStudentInfor from './UpdateStudentInfor'
import { blue } from '@mui/material/colors'
import SearchTable from './SearchTable'








export const UpdateInfo= () => {


  const [selectedStudent, setSelectedStudent] = useState(null);
  const handleSelectStudent = (student) => {
    setSelectedStudent(student); // Set the selected student in state
  };


  return (


    
    <StudentDashboardContainer>
      <Sidebar/>

      <Content>
        <Section>
          <SectionTitle>Update Student Information</SectionTitle>
          <CardContainer>
          
          <EnrollCard className="Contain" style={
            { backgroundColor: blue, 
              height: 400, 
              marginBottom: 20,
              paddingLeft: 20, 
              paddingTop: 20,
              overflow: 'auto',
             }
            
            
            }>

          <h4>Select Student</h4>

          <SearchTable onSelectStudent={handleSelectStudent} />
          </EnrollCard>
        </CardContainer>
          <CardContainer>
          
            <EnrollCard>


            {selectedStudent && (
            <div>
                <h2>Selected Student:</h2>
                <UpdateStudentInfor student={selectedStudent} /> {/* Pass selected student data to form */}
            </div>
            )}
     
            </EnrollCard>
          </CardContainer>
        </Section>
 
      </Content>
    </StudentDashboardContainer>
    
  )
}


export default UpdateInfo;
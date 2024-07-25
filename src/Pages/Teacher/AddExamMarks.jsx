import React from 'react'
import Sidebar from './Sidebar';
import './TeacherStyles.css'
import {
   TeacherDashboardContainer,
   Content,
   Section,
   CardContainer,
  AddMarksCard

} from '../../styles/DashboardStyles';
import UploadMarks from './UploadMarks';
import './UploadMarks.css'

export const AddExamMarks = () => {
  return (
    
    <TeacherDashboardContainer>
      <Sidebar />
      <Content>
      <Section>

          <h2>Students Examination</h2>
      </Section>

      
        <AddMarksCard className="MainCard">
              <UploadMarks/>
        </AddMarksCard>
    
      </Content>

    </TeacherDashboardContainer>
  )
}

export default AddExamMarks;
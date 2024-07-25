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
import UploadCourseWork from './UploadCourseWork';

export const AddCoursework = () => {
  return (
    
    <TeacherDashboardContainer>
      <Sidebar />
      <Content>
      <Section>

          <h2>Students Coursework</h2>
      </Section>
      
        <AddMarksCard>
          <UploadCourseWork/>
        </AddMarksCard>
    
      </Content>

    </TeacherDashboardContainer>
  )
}

export default AddCoursework;
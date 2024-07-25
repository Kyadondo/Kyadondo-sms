import React from 'react'
import  Sidebar from './Sidebar'
import axios from 'axios'


import {
    StudentDashboardContainer,
    SectionTitle,
    EnrollCard
 

  

} from '../../styles/DashboardStyles'





import {

  StudentsContainer,
  Content,
  Section,
  CardContainer,


} from '../../styles/StudentsStyles'

import  SBanner from '../../assets/SBanner.jpg'
import User_Logo from '../../assets/User_Logo.png'
import EnrollmentForm from './EnrollmentForm'








export const Dashboard = () => {


  return (


    
    <StudentDashboardContainer>
      <Sidebar/>

      <Content>
        <Section>
          <SectionTitle>Add New Student</SectionTitle>
          <CardContainer>
            
            <EnrollCard>

              <EnrollmentForm/>
     
            </EnrollCard>
          </CardContainer>
        </Section>
 
      </Content>
    </StudentDashboardContainer>
    
  )
}


export default Dashboard;
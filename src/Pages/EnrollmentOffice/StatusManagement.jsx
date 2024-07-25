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

import UpdateAccountStatus from './UpdateAccountStatus'








export const StatusManagement = () => {

  return (

    <StudentDashboardContainer>
      <Sidebar/>
      <Content>
        <Section>
          <SectionTitle>Student Account Status Management</SectionTitle>
          <CardContainer>
            <EnrollCard style={{paddingLeft: 20,
              paddingBottom: 30
            }}>

            <UpdateAccountStatus/>

            </EnrollCard>
          </CardContainer>
        </Section>
      </Content>
    </StudentDashboardContainer>
    
  )
}


export default StatusManagement;
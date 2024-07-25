import React from 'react'
import {
  AdminDashboardContainer,
  Content
} from '../../styles/NewDashboardStyles'
import { CardContainer, EnrollCard } from '../../styles/DashboardStyles';
import Sidebar from './Sidebar.jsx';



export const Exams = () => {
  return (
    <AdminDashboardContainer>
      <Content>
        <Sidebar/>
        
      </Content>
    </AdminDashboardContainer>
  )
}

export default Exams;
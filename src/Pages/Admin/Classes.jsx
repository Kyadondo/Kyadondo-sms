import React from 'react'
import Sidebar from './Sidebar'
import {
  AdminDashboardContainer,
  Content
} from '../../styles/NewDashboardStyles'
import { CardContainer, EnrollCard } from '../../styles/DashboardStyles';
import ClassForm from './EntireComponents/ClassForm.jsx'

export const Classes = () => {
  return (
    <AdminDashboardContainer>
      <Sidebar/>
      <Content>
      <CardContainer>
          <div className="Sep">
          <h2>Add New Classes</h2>
         
            <EnrollCard>
        
              <ClassForm/>

            </EnrollCard>
            <EnrollCard>
        
              

            </EnrollCard>
          </div>
        </CardContainer>
      </Content>
    </AdminDashboardContainer>
  )
  
}

export default Classes;
import React from 'react'
import Sidebar from './Sidebar'
import  './Admin.css'
import {

    AdminDashboardContainer,
    Content,
    SectionTitle,


} from '../../styles/NewDashboardStyles'
import EnrollmentForm from './EntireComponents/EnrollmentForm';
import { CardContainer, EnrollCard } from '../../styles/DashboardStyles';


export const Teachers = () => {
  
  return (
    <AdminDashboardContainer>
     <Sidebar/>
        <Content>
       <CardContainer>
          <div className="Sep">
          <h2>Add New Lecturer</h2>
         
            <EnrollCard>
        
          <EnrollmentForm/>

          </EnrollCard>
          </div>
        </CardContainer>
        </Content>
    </AdminDashboardContainer>
  )
};

export default Teachers;
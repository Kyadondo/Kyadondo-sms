import React from 'react'
import {
  AdminDashboardContainer,
  Content
  
} from '../../styles/NewDashboardStyles'
import Sidebar from './Sidebar';

export const AddUser = () => {
  return (
    <AdminDashboardContainer>
      <Content>
        <Sidebar/>
      </Content>
    </AdminDashboardContainer>
  )
}

export default AddUser;
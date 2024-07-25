import React from 'react'
import {
  AdminDashboardContainer,
  Content
} from '../../styles/NewDashboardStyles'
import Sidebar from './Sidebar'

export const Profile = () => {
  return (
    <AdminDashboardContainer>
      <Content>
        <Sidebar/>
      </Content>
    </AdminDashboardContainer>
  )
}

export default Profile;
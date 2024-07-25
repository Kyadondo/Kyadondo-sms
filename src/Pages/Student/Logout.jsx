import React from 'react'
import Sidebar from './Sidebar';
import  { 
  StudentDashboardContainer,
  Content,
  TopContenter,
  User,
  TopParagraph


} from '../../styles/DashboardStyles';
import User_Logo from '../../assets/User_Logo.png'


export const Logout = () => {
  return (

    <StudentDashboardContainer>
      <Sidebar/>
      <Content>
      <TopContenter>
          <User src={User_Logo} alt=''/>
          <TopParagraph>
            KIWEEWA GODFREY
          </TopParagraph>
          <TopParagraph>
            NATIONAL DIPLOMA IN INFORMATION TECHNOLOGY
          </TopParagraph>

      </TopContenter>
      </Content>
      
    </StudentDashboardContainer>
  )
}

export default Logout;

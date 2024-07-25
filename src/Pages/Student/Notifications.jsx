import React from 'react'
import  Sidebar from './Sidebar'
import EnrollmentTable from './EnrollmentTable'

import {
    StudentDashboardContainer,
    Content,
    Section,
    SectionTitle,
    CardContainer,
    User,
    TopParagraph,
    TopContenter,
    EnrollmentCard,


  

} from '../../styles/DashboardStyles'


import User_Logo from '../../assets/User_Logo.png'
import './Notification.css'; 








export const Enrollment = () => {


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
        <Section>
          <SectionTitle>
            Notifications
          </SectionTitle>
    
          <CardContainer>
            <EnrollmentCard>

            <div class="chat-message">
                <div class="sender-info">
                  <span class="username">Bursar</span>
                </div>
                <div class="message-content">
                  Hi there! How are you today? A Late payment Penalty has been added to Your Account. 
                </div>
              </div>

              <div class="chat-message">
                <div class="sender-info">
                  <span class="username">Academic Registrar</span>
                </div>
                <div class="message-content">
                  Hello! Please provide your Birth Certificate before tomorrow Evening
                  
                </div>
              </div>
            </EnrollmentCard>
          </CardContainer>
         
         
        </Section>
        
      </Content>
    </StudentDashboardContainer>
    
  )
}


export default Enrollment;
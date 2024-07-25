import React from 'react'
import Sidebar from './Sidebar';
import { 
  CardContainer,
  EnrollmentCard,
  TopContenter,
  StudentDashboardContainer,
  Content,
  Section,
  SectionTitle,
  TeacherDashboardContainer
} from '../../styles/DashboardStyles'

export const Notifcations = () => {
  return (
    <TeacherDashboardContainer>
    <Sidebar/>

    <Content>
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
  </TeacherDashboardContainer>
  )
}


export default Notifcations;


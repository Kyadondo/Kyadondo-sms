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
import EnrollmentTableIn from './EnrollmentTableIn'








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
          <SectionTitle>External Enrollments</SectionTitle>
          <CardContainer>
            <EnrollmentCard>

              <EnrollmentTable>

              </EnrollmentTable>

            </EnrollmentCard>
          </CardContainer>
          <SectionTitle>Internal Enrollments</SectionTitle>
          <CardContainer>
          <EnrollmentCard>

          <EnrollmentTableIn>
              
              </EnrollmentTableIn>
          </EnrollmentCard>
          
          </CardContainer>
        </Section>
        
      </Content>
    </StudentDashboardContainer>
    
  )
}


export default Enrollment;
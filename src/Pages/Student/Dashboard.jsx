import React from 'react'
import  Sidebar from './Sidebar'
import Complaints from './Complaints'
import Notifications from './Notifications'
import Results from './Results'
import TableBelow from './TableBelow'


import {
    StudentDashboardContainer,
    Content,
    Section,
    SectionTitle,
    CardContainer,
    Card,
    CardContent,
    CardTitle,
    StyledParagraph,
    User,
    TopParagraph,
    TopContenter,
    LowerCard

  

} from '../../styles/DashboardStyles'

import  SBanner from '../../assets/SBanner.jpg'
import User_Logo from '../../assets/User_Logo.png'
import ProfileCard from './ProfileCard'
import CourseWorkCard from './CourseWorkCard'








export const Dashboard = () => {


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
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>PROFILE</CardTitle>
              <hr/>
              <CardContent>
                <ProfileCard/>
              </CardContent>
            </Card>
            <Card>
              <CardTitle>COURSEWORK</CardTitle>
              <hr/>
              <CardContent>

               <CourseWorkCard>

               </CourseWorkCard>

              </CardContent>
            </Card>
          </CardContainer>
        </Section>
        <Section>
        <LowerCard>

        <TableBelow/>
        </LowerCard>
        
       


        </Section>
      </Content>
    </StudentDashboardContainer>
    
  )
}


export default Dashboard;
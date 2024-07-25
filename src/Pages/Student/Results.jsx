import React from 'react'
import  Sidebar from './Sidebar'


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
import ResultsTableInternal from './ResultsTableInternal'
import CourseWorkMarksTable from './CourseWorkMarksTable'
import UbtebResultsTable from './UbtebResultsTable'









export const Results = () => {


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
          <SectionTitle>Performance Overview</SectionTitle>
          <CardContainer>
            <EnrollmentCard>

             <ResultsTableInternal/>

            </EnrollmentCard>
          </CardContainer>
          <SectionTitle>
              CourseWork Results
            </SectionTitle>

          <CardContainer>
           
            <EnrollmentCard>
           
             <CourseWorkMarksTable/>

            </EnrollmentCard>
          </CardContainer>
          <SectionTitle>
             External Results
            </SectionTitle>
          <CardContainer>
         
            <EnrollmentCard>
           

             <UbtebResultsTable/>

            </EnrollmentCard>
          </CardContainer>
        </Section>
        
      </Content>
    </StudentDashboardContainer>
    
  )
}


export default Results;
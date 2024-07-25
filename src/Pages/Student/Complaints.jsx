import React from 'react'
import Sidebar from './Sidebar';
import  { 
  StudentDashboardContainer,
  Content,
  TopContenter,
  User,
  TopParagraph,
  Section,
  CardContainer,
  Card,
  SectionTitle


} from '../../styles/DashboardStyles';
import User_Logo from '../../assets/User_Logo.png'


export const Complaints = () => {
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
          Submit Complaint
        </SectionTitle>
        <CardContainer>
         <TopContenter>


          <div className="complaint-section">
              <form className="complaint-form">
                <label htmlFor="recipient">Recipient:</label>
                <select id="recipient" name="recipient">
                  <option value="principal">Principal</option>
                  <option value="teacher">Teacher</option>
                  <option value="department_head">Department Head</option>
                </select>

                <label htmlFor="complaint-details">Complaint Details:</label>
                <textarea
                  id="complaint-details"
                  name="complaint-details"
                  rows="5"
                />

                <label htmlFor="complaint-file">Attach File (Optional):</label>
                <input type="file" id="complaint-file" name="complaint-file" />

                <button type="submit">Submit Complaint</button>
              </form>

        </div>


        </TopContenter>
        </CardContainer>
      </Section>
      </Content>
      
    </StudentDashboardContainer>
  )
}

export default Complaints;

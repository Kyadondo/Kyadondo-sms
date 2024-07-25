import React, {useState} from 'react'
import Sidebar from './Sidebar'
import './TeacherStyles.css'
import Calendar from 'react-calendar'
import {
  Content,
  TeacherDashboardContainer,
  TopParagraph,
  Section,
  CardContainer,
  TeacherCard,
  CardTitle,
  CardContent,
  StudentsCard
} from '../../styles/DashboardStyles'
import AreaCharts  from './AreaCharts'



export const Dashboard = () => {

  const [date, setDate] = useState(new Date());

  const onchange = date =>{
    setDate(date);
  }



  return (
    <TeacherDashboardContainer>
      <Sidebar/>
      <Content>
    
      <Section>

        <h2>Welcome, Kiweewa Godfrey!</h2>
        <p>You have 4 classes and 43 students.</p>
    
      </Section>
      <CardContainer>
        <TeacherCard>
          <CardTitle>
            CALENDER
          </CardTitle>
          <hr></hr>
          <CardContent>

          <Calendar onChange={onchange} value={date}
          
          />
              
          </CardContent>
        </TeacherCard>
        <TeacherCard>
          <CardTitle>
            MY CLASSES
          </CardTitle>
          <hr></hr>

        </TeacherCard>
   
      </CardContainer>
      <CardContainer>

        <Section> 

          <h3>
            My Students
          </h3>
          < StudentsCard className="StCard">
          <table className="MyStudentsTbl">
            <tr>
              <th className="First">Student ID</th>
              <th>Name</th>
              <th>Registration Number</th>
              <th className="Ender">Program</th>
            </tr>
            <tr>
              <td>156</td>
              <td>Kiweewa Godfrey</td>
              <td>22F/KTI/NDICT/156</td>
              <td>NDICT</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Patrick Obadia</td>
              <td>22F/KTI/NDICT/003</td>
              <td>NDICT</td>
            </tr>
            <tr>
              <td>125</td>
              <td>Namatovu Proby</td>
              <td>23A/KTI/NDICT/125</td>
              <td>NDICT</td>
            </tr>
            <tr>
              <td>100</td>
              <td>Sokiri Paul</td>
              <td>23A/KTI/NCICT/100</td>
              <td>NCICT</td>
            </tr>
            <tr>
              <td>156</td>
              <td>Kiweewa Godfrey</td>
              <td>22F/KTI/NDICT/156</td>
              <td>NDICT</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Patrick Obadia</td>
              <td>22F/KTI/NDICT/003</td>
              <td>NDICT</td>
            </tr>
            <tr>
              <td>125</td>
              <td>Namatovu Proby</td>
              <td>23A/KTI/NDICT/125</td>
              <td>NDICT</td>
            </tr>
            <tr>
              <td>100</td>
              <td>Sokiri Paul</td>
              <td>23A/KTI/NCICT/100</td>
              <td>NCICT</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Patrick Obadia</td>
              <td>22F/KTI/NDICT/003</td>
              <td>NDICT</td>
            </tr>
            <tr>
              <td>125</td>
              <td>Namatovu Proby</td>
              <td>23A/KTI/NDICT/125</td>
              <td>NDICT</td>
            </tr>
            <tr>
              <td>100</td>
              <td>Sokiri Paul</td>
              <td>23A/KTI/NCICT/100</td>
              <td>NCICT</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Patrick Obadia</td>
              <td>22F/KTI/NDICT/003</td>
              <td>NDICT</td>
            </tr>
            <tr>
              <td>100</td>
              <td>Sokiri Paul</td>
              <td>23A/KTI/NCICT/100</td>
              <td>NCICT</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Patrick Obadia</td>
              <td>22F/KTI/NDICT/003</td>
              <td>NDICT</td>
            </tr>
          </table>
          </StudentsCard>
        </Section>
      </CardContainer>
      <CardContainer>
        <Section>
          <h3>
            Performance Analyse 
          </h3>
         
           
        
        </Section>
      </CardContainer>

    
        </Content>
    </TeacherDashboardContainer>
  )
}

export default Dashboard;
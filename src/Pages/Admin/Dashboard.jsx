import React from 'react'
import { useState, useEffect  } from 'react'
import Sidebar from './Sidebar'
import  './Admin.css'
import Swal from 'sweetalert2';
import {countStudents, countTeachers, countClasses } from '../../api/api.js'


import 'intro.js/introjs.css';

import {

    AdminDashboardContainer,
    Content,
    TopContent,
    Section,
    SectionTitle,
    CardContainer,
    Card,
    CardContent,
    CardTitle,
    BottomContent,
    AnalyseCard,
    TextArea,
    Button,
    AnnounceCard,
    AnnouceContent,
    ComplaintCard

} from '../../styles/NewDashboardStyles'



import {
  User,
  TopParagraph

} from '../../styles/DashboardStyles'


import Calendar from 'react-calendar'
import AreaCharts from '../Teacher/AreaCharts'
import User_Logo from '../../assets/User_Logo.png'
import ComplaintsSection from './EntireComponents/ComplaintSection';

export const Dashboard = () => {
  
 
  const [announcements, setAnnouncements] = useState([]);
  const [date, setDate] = useState(new Date());

  const onchange = date =>{
    setDate(date);
  }


  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const [announcement, setAnnouncement] = useState('');

  const handleChange = (event) => {
    setAnnouncement(event.target.value);
  };


  const handleSubmit = () => {
    // Use SweetAlert for announcement submission
    Swal.fire({
      title: 'Announcement Sent',
      text: `Announcement: ${announcement}`,
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      
      setAnnouncements([...announcements, announcement]);
      setAnnouncement('');


    });
  };


  const [studentsCount, setStudentsCount] = useState(0);
  const [teachersCount, setTeachersCount] = useState(0);
  const [classesCount, setClassesCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const students = await countStudents();
      const teachers = await countTeachers();
      const classes = await countClasses();
      setStudentsCount(students.data.count);
      setTeachersCount(teachers.data.count);
      setClassesCount(classes.data.count);
    };
    fetchCounts();
  }, []);










  return (
    <AdminDashboardContainer>
     <Sidebar/>
        <Content>
          <TopContent>

            <Section>
              <SectionTitle>   OverView </SectionTitle>
              <CardContainer>
                <Card>
                  <CardTitle>Students</CardTitle>
                  <CardContent>
                    {studentsCount}
                  
                  </CardContent>
                </Card>
             <Card>
                    <CardTitle>Teachers</CardTitle>
                    <CardContent>
                   {teachersCount}
                    </CardContent>
                </Card>
               <Card>
                  <CardTitle>Classes</CardTitle>
                  <CardContent>
                  {classesCount}
                  </CardContent>
                </Card>
              </CardContainer>

          <Section>
          
            

               <AreaCharts/> 


        

            </Section>
            </Section>
            <Section>
              <SectionTitle>Event Calender </SectionTitle>
              <CardContainer>
                  <Card >
                  <CardContent>
                  <Calendar onChange={onchange} value={date} />
                  </CardContent>
                </Card>
                <Card >
                  <CardContent>
                    
                      <User src={User_Logo} alt="" />
                      <CardTitle>Time</CardTitle>
                     {currentTime.toLocaleTimeString()}
                     <TopParagraph>
                      Kiweewa Godfrey<br></br>
                      ADMIN

                     </TopParagraph>
                     
                  </CardContent>
                </Card>
              </CardContainer>

            </Section>
            
          </TopContent>
          <BottomContent>
            <Section>
              <Section>
                  
                 <CardContainer>
                  <AnnounceCard>
                    <CardTitle>
                      Announcements
                    </CardTitle>
                    <CardContent>
                    <TextArea
                      value={announcement}
                      onChange={handleChange}
                      placeholder="Type your announcement here..."
                      >
                  
                  </TextArea>
                  <Button onClick={handleSubmit}>Send Announcement</Button>
                    </CardContent>
                  </AnnounceCard>
                  <AnnounceCard className="OtherCard"> 
                    
                    <CardTitle>Recent Announcements</CardTitle>
                    <AnnouceContent className="Announce">
                      {announcements.map((ann, index) => (
                        <p key={index}>{ann}</p>
                      ))}
                    </AnnouceContent>
                  
                  </AnnounceCard>
                 </CardContainer>
              </Section>
            </Section>
          </BottomContent>
          <BottomContent>
         <Section>
              <SectionTitle>Complaints</SectionTitle>
              <CardContainer>
               <ComplaintCard>
                    <ComplaintsSection/>
               </ComplaintCard>
              </CardContainer>
            </Section>
          </BottomContent>

          <BottomContent>
          <Section>
              <SectionTitle>Analytics</SectionTitle>
              <CardContainer>
               <ComplaintCard>
                
               </ComplaintCard>
              </CardContainer>
            </Section>
          </BottomContent>
        
        
        </Content>
    </AdminDashboardContainer>
  )
}

export default Dashboard
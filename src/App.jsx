import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import  Home  from './components/Home';
import TeacherSign from './components/TeacherSign';
import StudentSign from './components/StudentSign';
import AdminSign from './components/AdminSign';



import StudentDashboard from './Pages/Student/Dashboard';
import Enrollment from './Pages/Student/Enrollment';
import Results from './Pages/Student/Results';
import Notifications from './Pages/Student/Notifications';
import Complaints from './Pages/Student/Complaints';
import Logout from './Pages/Student/Logout';




import EnrollStudent from './Pages/EnrollmentOffice/EnrollStudent'
import UpdateInfo from './Pages/EnrollmentOffice/UpdateInfo'
import Reports_Analysis from './Pages/EnrollmentOffice/Reports_Analysis'
import StatusManagement from './Pages/EnrollmentOffice/StatusManagement'
import EnrollmentSign from './components/Enrollment-Sign';



import Dashboard from './Pages/Teacher/Dashboard';
import Notifcations from './Pages/Teacher/Notifcations';
import AddCoursework from './Pages/Teacher/AddCoursework';
import AddExamMarks from './Pages/Teacher/AddExamMarks';
import Log_out from './Pages/Teacher/Log_out';



import AdminDashboard from './Pages/Admin/Dashboard';
import Calender from './Pages/Admin/Calender';
import Classes from './Pages/Admin/Classes';
import Enrollments from './Pages/Admin/Enrollments';
import Exams from './Pages/Admin/Exams';
import Notification from './Pages/Admin/Notification'
import Profile from './Pages/Admin/Profile';
import AddUser from './Pages/Admin/AddUser';
import Teachers from './Pages/Admin/Teachers';
import SignOut from './Pages/Admin/SignOut';
import Students from './Pages/Admin/Students';



export const App = () => {

  return (

    <Router>
      <Routes>

      
        <Route path="/" element = {< Home/>} />
  


       {/* All Pages Routes Are Here*/}

        <Route exact path="/Teacher-Sign" element={<TeacherSign/>}/>
        <Route exact path="/Student-Sign" element={< StudentSign/>} />
        <Route exact path="/Enrollment-Sign" element={<EnrollmentSign/>}/>
        <Route exact path="/AdminSign" element={<AdminSign/>} />
        

         {/* Students Dashboard */}
         

         <Route path="/Student/Dashboard" element={< StudentDashboard />} />
         <Route path="/student/Enrollment" element={< Enrollment />} />
         <Route path="/student/Complaints" element={< Complaints />} />
         <Route path="/student/Notifications" element={< Notifications />} />
         <Route path="/student/Results" element={< Results />} />
         <Route path="/student/Logout" element={< Logout />} />





        {/* Enrollment Routes Down Here */}

        <Route path="/EnrollmentOffice/EnrollStudent" element={<EnrollStudent/>}/>
        <Route path="/EnrollmentOffice/UpdateInfo" element={<UpdateInfo/>}/>
        <Route path="/EnrollmentOffice/Reports_Analysis" element={<Reports_Analysis/>}/>
        <Route path="/EnrollmentOffice/StatusManagement" element={<StatusManagement/>}/>



      {/* Teacher Routes Down Here*/}

      < Route path="/Teacher/Dashboard"  element={<Dashboard/> }/>
      < Route path="/Teacher/AddExamMarks"  element={<AddExamMarks/> }/>
      < Route path="/Teacher/AddCoursework"  element={<AddCoursework/> }/>
      < Route path="/Teacher/Notifications"  element={<Notifcations/> }/>
      < Route path="/Teacher/Log_out"  element={<Log_out/> }/>


      {/* Admin Routes Down Here */}

      < Route path="/Admin/Dashboard" element={<AdminDashboard/> }/>
      < Route path="/Admin/Calender" element={<Calender/> }/>
      < Route path="/Admin/Classes" element={<Classes/> }/>
      < Route path="/Admin/Enrollments" element={<Enrollments/> }/>
      < Route path="/Admin/Exams" element={<Exams/> }/>
      < Route path="/Admin/Notification" element={<Notification/> }/>
      < Route path="/Admin/Profile" element={<Profile/> }/>
      < Route path="/Admin/Teachers" element={<Teachers/> }/>
      < Route path="/Admin/AddUser" element={<AddUser/> }/>
      < Route path="/Admin/SignOut" element={<SignOut/> }/>
      <Route path="Admin/Students" element={<Students />} />



      </Routes>
    </Router>
  )
}


export default App;
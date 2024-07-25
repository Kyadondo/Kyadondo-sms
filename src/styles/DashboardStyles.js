// AdminDashboardStyles.js
import styled from 'styled-components';



export const TeacherCard = styled.div`


  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  width: 400px;
  max-width:485px;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px);
  }
  font-family: "Montserrat", sans-serif;
  

`;


export const StudentsCard = styled.div`

  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  width: 1028px;
  max-width:1100px;
  font-family: "Montserrat", sans-serif;
  height: 400px;
  overflow: auto;
  background-color: #191a530f;

`;


export const AddMarksCard = styled.div`

  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  width: 1028px;
  max-width:1100px;
  font-family: "Montserrat", sans-serif;
  height: 900px;
  overflow: auto;



`;



export const EnrollmentCard = styled.div`




background-color: #ffffff;
color: #191a53;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  width: 380px;
  max-width:870px;
  font-family: "Montserrat", sans-serif;

`;



export const CourseUnits = styled.li`

  text-decoration-style: none;
  padding: 8px;
  color: #191a53;

`;






export const AdminDashboardContainer = styled.div`
  display: flex;
`;


export const StyledParagraph = styled.p`
  
    margin-bottom: 8px;
    color: yellow;
    margin-top: 0;
    

`
;

export const LowerCard = styled.div`
  background-color: #ffffff;
  color: #191a53;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  margin-bottom:5px;
  cursor: pointer;
  max-width: 900px;
  &:hover {
    transform: translateY(-5px);
    
  }


` 
;



export const User = styled.img`

    width: 100px;
    height: auto;
    margin-right: 30px;
    margin-left: 80px;

`;
export const TopParagraph = styled.p`

  font-size: 12px;
  margin-top: 20px;
  font-family: "Montserrat", sans-serif;
  border: 2px solid #191a53;
  border-radius: 10px;
  margin-right: 20px;
  padding: 22px;
  font-weight: 700;
  

`;




export const TopContenter = styled.div`

  width: 870px;
  display: inline-flex;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;


`;






export const EnrollCard = styled.div`

  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  flex: 1;
  max-width:1200px;



`
;



export const Content = styled.div`
  flex: 1;
  padding: 20px;
  padding-left: 0px;
  margin-left: ${({ isOpen }) => (isOpen ? '300px' : '120px')}; /* Adjust margin based on sidebar state */
  transition: margin-left 0.3s ease;
`;

export const TopContent = styled.div`
  display: flex;
  gap: 20px;
  flex: 1; /* Take remaining space */
`;

export const BottomContent = styled.div`
  margin-top: 20px;
  display: flex; /* Make the content side by side */
  gap: 20px; /* Add gap between the components */
`;

export const Section = styled.section`
  margin-bottom: 40px;
  flex: 1; /* Make the sections expand to fill the available space */
  font-family : "Montserrat", sans-serif;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
 
  color: #333333; /* Darker text color */
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  width: 380px;
  max-width:410px;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  color: #191a53; 
  text-align: center;
  margin-top: 0;
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: #555555;
`;

export const StudentDashboardContainer = styled.div`
  display: flex;
  padding-left: 300px;
`;


export const TeacherDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;


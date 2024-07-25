import styled from 'styled-components';
export const TextArea = styled.textarea`

width: 80%;
height: 300px;
padding: 10px;
margin-bottom: 20px;
border: 1px solid #ddd;
border-radius: 5px;
resize: none;
display : inline-block;
outline: none;
box-shadow: inset 0 2px 4px rgba(25, 26, 83, 0.3);
font-family: "Montserrat", sans-serif;

  
`;

export const Button = styled.button`
    font-size: .8rem;
    outline: none;
    border-radius: .2rem;
    padding: 20px;
    margin: 8px;
    width: 321px;
    cursor: pointer;
    background-color: #0e365d;
    color: white;
    &:hover {
      background-color: #0056b3;
    }
`;


export const AnnounceCard = styled.div`

  border-radius: 8px;
  margin-top: 10px;
  transition: transform 0.3s ease-in-out;
  width: 540px;
  height: 500px;


 
`;


export const AnnouceContent = styled.p`

  font-size: 16px;
  color: #555555;
  background-color: #828d9729;
  padding: 3px;
  border-radius: 5px;
  overflow: auto;   
  height: 400px;
  padding-left: 20px;
`
;





export const AdminDashboardContainer = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;

  padding: 20px;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '80px')}; /* Adjust margin based on sidebar state */
  transition: margin-left 0.3s ease;
font-family: "Montserrat", sans-serif;
`;

export const TopContent = styled.div`
  display: flex;
  margin-left: 200px;
  gap: 20px;
  flex: 1; /* Take remaining space */
`;

export const BottomContent = styled.div`
  margin-left: 200px;
  display: flex; /* Make the content side by side */
  gap: 20px; /* Add gap between the components */
`;

export const Section = styled.section`

  flex: 1; /* Make the sections expand to fill the available space */

`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;

  color: #333333; 
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
 
`;

export const ComplaintCard = styled.div`
  background-color: #E5E5E5 ;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  flex: 1;
  width: 100px;
  overflow: auto;

`
;




export const AnalyseCard = styled.div`

  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  width: 538px;
 
 

`;

export const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  max-width: 250px;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 10 px;
  margin-bottom: 5px;
  color: #007bff; 
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: #555555;
`;

export const StudentDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;


export const TeacherDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;


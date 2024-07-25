import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { BsGraphUp, BsPencilSquare, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare , BsExclamationCircle } from 'react-icons/bs';
import { BsDoorOpen } from 'react-icons/bs';

import SBanner from '../../assets/SBanner.jpg';



const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '25px' : '80px')};
  width: 300px;
  height: 100%;
  padding-right: 20px;
  padding-left: 20px;
  background-color: #191a53; /* Dark blue background */
  color: white;
  overflow-y: auto; /* Enable vertical scrolling */
  padding-top: 30px;
  transition: width 0.3s ease; /* Smooth width transition */
  z-index: 100; /* Ensure sidebar stays above content */
  font-family: "Montserrat", sans-serif;
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  font-size: 18px;
  border-bottom: 1px solid #ffffff; /* Darker border */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c02230; /* Darker background on hover */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`;


const SidebarIcon = styled.div`
  margin-right: 10px;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  border-radius: 30px;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #34495e; /* Darker background */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleIcon = styled.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }; 
  return (
    <>
    <SidebarContainer style={{ width: isOpen ? '250px' : '80px' }}>
      <SidebarHeader>Student Portal</SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon><BsGraphUp /></SidebarIcon>
          <StyledLink to="/Student/Dashboard">Dashboard</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsPencilSquare /></SidebarIcon>
          <StyledLink to="/Student/Enrollment">Enrollment</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/Student/Results">Results</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>< BsChatDots /></SidebarIcon>
          <StyledLink to="/Student/Notifications">Notifications</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsExclamationCircle /></SidebarIcon>
          <StyledLink to="/Student/Complaints">Complaints</StyledLink>
        </SidebarNavItem>
       
        <SidebarNavItem>
          <SidebarIcon><BsDoorOpen /></SidebarIcon>
          <StyledLink to="/Student/Logout">Log out</StyledLink>
        </SidebarNavItem>
        
      </SidebarNav>
      <SidebarHeader>
        <Logo src={SBanner} alt="Logo" />
      </SidebarHeader>
      
     
    </SidebarContainer>
     
   </>
  );
};

export default Sidebar;

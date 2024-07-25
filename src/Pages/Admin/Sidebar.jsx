import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { BsGraphUp, BsPencilSquare, BsBook, BsBell, BsGraphDown, BsBuilding, BsPersonFill, BsBoxArrowRight, BsPersonBadge, BsJournalBookmark, BsFileText, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare , BsExclamationCircle, BsClipboard } from 'react-icons/bs';
import { BsDoorOpen } from 'react-icons/bs';

import SBanner from '../../assets/SBanner.jpg';



const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 500px;
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
  padding: 8px;
  font-size: 20px;
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
  padding: 12px 16px;
  font-size: 16px;
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
      <SidebarHeader>Admin Portal</SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon><BsGraphUp /></SidebarIcon>
          <StyledLink to="/Admin/Dashboard">Dashboard</StyledLink>
        </SidebarNavItem>
     
        <SidebarNavItem>
          <SidebarIcon>< BsPersonBadge /></SidebarIcon>
          <StyledLink to="/Admin/Teachers">Lecturers</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsJournalBookmark /></SidebarIcon>
          <StyledLink to="/Admin/Classes">Classes</StyledLink>
        </SidebarNavItem>
     
        <SidebarNavItem>
          <SidebarIcon><BsJournalBookmark /></SidebarIcon>
          <StyledLink to="/Admin/Students"> Students</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsFileText /></SidebarIcon>
          <StyledLink to="/Admin/Exams">Examinations</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>< BsCalendar/></SidebarIcon>
          <StyledLink to="/Admin/Calender">Calender</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBell /></SidebarIcon>
          <StyledLink to="/Admin/Notification">Notifications</StyledLink>
        </SidebarNavItem>
       
        <SidebarNavItem>
          <SidebarIcon><BsPersonFill /></SidebarIcon>
          <StyledLink to="/Admin/Profile">Profile</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBuilding /></SidebarIcon>
          <StyledLink to="/Admin/AddUser">Add Users</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBoxArrowRight /></SidebarIcon>
          <StyledLink to="/Admin/SignOut">Sign Out</StyledLink>
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

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: #333;
  padding: 15px;
  z-index: 10;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const SidebarLink = styled(NavLink)`
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  &.active {
    background: #666;
  }
  &:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Sidebar = () => (
  <SidebarContainer>
    <Navigation>
      <SidebarLink to="/users">Users</SidebarLink>
      <SidebarLink to="/reports">Reports</SidebarLink>
      <SidebarLink to="/analytics">Analytics</SidebarLink>
    </Navigation>
  </SidebarContainer>
);

export default Sidebar;

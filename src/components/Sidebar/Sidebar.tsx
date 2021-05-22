import React from 'react';

import {
  SidebarContainer,
  SidebarContent,
  Title,
  SidebarOptions,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <Title>Marketplace API</Title>

        <SidebarOptions>
          <h1>Dashboard</h1>
          <h1>Products</h1>
          <h1>Cart</h1>
          <h1>About the Project</h1>
        </SidebarOptions>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;

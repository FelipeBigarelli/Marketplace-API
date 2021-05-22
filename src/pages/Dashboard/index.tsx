import React from 'react';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar/Sidebar';
import MenuContent from '../../components/MenuContent/MenuContent';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <MenuContent />
    </Container>
  );
};

export default Dashboard;

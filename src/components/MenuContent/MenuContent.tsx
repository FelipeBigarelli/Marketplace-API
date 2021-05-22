import React from 'react';

import {
  MenuContainer,
  Title,
  MenuContentWelcome,
  MenuCategories,
} from './styles';

const MenuContent: React.FC = () => {
  return (
    <MenuContainer>
      <Title>Dashboard</Title>
      <MenuContentWelcome>
        <h1>Welcome to my Marketplace API!</h1>
        <h2>Here, you can find some categories, like:</h2>

        <MenuCategories>
          <span>Foods</span>
          <span>Electronics</span>
          <span>Clothing</span>
        </MenuCategories>
      </MenuContentWelcome>
    </MenuContainer>
  );
};

export default MenuContent;

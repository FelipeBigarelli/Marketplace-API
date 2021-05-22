import styled from 'styled-components';
import { shade } from 'polished';

export const SidebarContainer = styled.div`
  height: 80%;
  margin: auto 0;
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.85);
  border-radius: 0px 50px 50px 0;
  color: #313138;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 35px;
  font-family: Lobster;
  padding-top: 15px;
`;

export const SidebarOptions = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 75px;

    font-size: 24px;
    font-family: 'Roboto Slab', serif;
    transition: background-color 0.2s;

    border-radius: 10px;

    &:hover {
      background: ${shade(0.2, '#534d79')};
      color: #fff;
    }
  }
`;

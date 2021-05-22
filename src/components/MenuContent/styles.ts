import styled from 'styled-components';

export const MenuContainer = styled.div`
  background: rgba(209, 209, 209, 0.9);
  border-radius: 50px 0 0 50px;
  margin-left: 50px;
  padding: 20px 60px;

  display: flex;
  flex-direction: column;
  flex: 1;

  color: #313138;
`;

export const Title = styled.div`
  font-size: 35px;
  font-family: Lobster;
  padding: 15px 0;
`;

export const MenuContentWelcome = styled.div`
  h1,
  span {
    padding-bottom: 25px;
  }

  h2 {
    padding-bottom: 10px;
  }
`;

export const MenuCategories = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-weight: 500;

    &::before {
      content: '- ';
    }
  }
`;

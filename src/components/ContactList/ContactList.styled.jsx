import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: white;
`;

export const Button = styled.button`
  padding: 5px 10px;
  min-width: 80px;
  font-family: inherit;
  font-size: 16px;

  margin: 0;
  margin-left: auto;

  background-color: white;
  border: 2px black solid;
  border-radius: 5px;

  font-size: 16px;
  font-family: inherit;
`;

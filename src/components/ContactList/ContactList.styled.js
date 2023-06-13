import styled from 'styled-components';

export const List = styled.ul``;

export const ListItems = styled.li`
  padding: 5px 25px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  &::before {
    content: '';
    background: black;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

import styled from 'styled-components';

export const List = styled.ul``;

export const ListItems = styled.li`
  display: flex;
  align-items: center;
  &::before {
    content: '';
    background: black;
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }
`;

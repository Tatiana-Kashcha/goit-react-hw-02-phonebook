import * as s from './ContactListItems.styled';

export const ContactListItems = ({
  user: { name, number, id },
  deleteUser,
}) => {
  return (
    <>
      <s.Name>{name}:</s.Name>
      <s.Number>{number}</s.Number>
      <s.Button onClick={() => deleteUser(id)}>Delete</s.Button>
    </>
  );
};

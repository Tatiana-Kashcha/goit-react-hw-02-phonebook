import { ContactListItems } from '../ContactListItems/ContactListItems';
import * as s from './ContactList.styled';

export const ContactList = ({ data, deleteUser }) => {
  return (
    <s.List>
      {data.map(user => (
        <s.ListItems key={user.id}>
          <ContactListItems user={user} deleteUser={deleteUser} />
        </s.ListItems>
      ))}
    </s.List>
  );
};

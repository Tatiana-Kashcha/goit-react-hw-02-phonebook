import { ContactListItems } from '../ContactListItems/ContactListItems';
import * as s from './ContactList.styled';

export const ContactList = ({ data, deleteUser }) => {
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          <ContactListItems user={user} deleteUser={deleteUser} />
        </li>
      ))}
    </ul>
  );
};

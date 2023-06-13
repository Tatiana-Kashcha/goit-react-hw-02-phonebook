import { ContactListItems } from '../ContactListItems/ContactListItems';

export const List = ({ data, deleteUser }) => {
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

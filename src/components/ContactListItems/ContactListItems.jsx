export const ContactListItems = ({
  user: { name, number, id },
  deleteUser,
}) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </>
  );
};

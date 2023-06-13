export const ContactListItems = ({
  user: { name, number, id },
  deleteUser,
}) => {
  return (
    <>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </>
  );
};

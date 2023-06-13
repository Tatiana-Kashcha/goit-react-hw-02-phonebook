import * as s from './Filter.styled';

export const Filter = ({ filter, handleCangeFilter }) => {
  return (
    <>
      <s.Description>Find contacts by name</s.Description>
      <s.Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. 
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={handleCangeFilter}
      />
    </>
  );
};

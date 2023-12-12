import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const getFilterContacts = () => {
    if (filter === '') return contacts;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilterContacts();

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => {
        return <ContactItem key={id} name={name} id={id} number={number} />;
      })}
    </List>
  );
};

export default ContactList;

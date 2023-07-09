import { List, ListItem, Button, NoContacts } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  if (!filteredContacts?.length) {
    return <NoContacts>No contacts added yet.</NoContacts>;
  }

  return (
    <List>
      {filteredContacts.map(({ id, name, number }, idx) => (
        <ListItem key={id}>
          <div>{idx + 1}.</div>
          {name}: {number}
          <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

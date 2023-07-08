import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import {
  MainContainer,
  MainTitle,
  ContactsTitle,
  FilterTitle,
  NoContacts,
} from './App.styled';

const CONTACTS_LS_KEY = 'contacts';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem(CONTACTS_LS_KEY)) ??
      initialContacts
    );
  });

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = contact => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts.`);
    } else {
      setContacts(state => [{ id: nanoid(), ...contact }, ...state]);
    }
  };

  const handleFilterChange = e => {
    setFilter(e.target.value.trim());
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const removeContact = contactId => {
    setContacts(state => state.filter(({ id }) => id !== contactId));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <MainContainer>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={handleFormSubmit} />
      <ContactsTitle>Contacts</ContactsTitle>
      <FilterTitle>Find contacts by name</FilterTitle>
      <Filter value={filter} onFilterChange={handleFilterChange} />
      {contacts.length ? (
        <ContactList contacts={visibleContacts} onRemove={removeContact} />
      ) : (
        <NoContacts>No contacts added yet.</NoContacts>
      )}
    </MainContainer>
  );
};

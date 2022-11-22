import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

import Form from './Form/Form';
import Filtre from './Filtre/Filtre';
import ContactList from './ContactList/ContactList';
import { fetchContacts } from '../redux/operations';
import { addContact } from '../redux/operations';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filtre = useSelector(state => state.filtre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const checkIfContactExist = (name, phone) => {
    if (
      !contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      dispatch(addContact({ id: nanoid(), name: name, phone: phone }));
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  const createFilteredList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(`${filtre.toLowerCase()}`)
    );
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Form checkIfContactExist={checkIfContactExist} />
        <h2>Contacts</h2>
        <Filtre />
        {contacts && <ContactList createFilteredList={createFilteredList()} />}
      </div>
    </>
  );
}

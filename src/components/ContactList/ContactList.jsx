import ContactListItem from './ContactListItem/ContactListItem';

import css from './ContactList.module.css';

export default function ContactList({ createFilteredList }) {
  return (
    <ul className={css.list}>
      {createFilteredList.map(contact => {
        return ContactListItem(contact);
      })}
    </ul>
  );
}

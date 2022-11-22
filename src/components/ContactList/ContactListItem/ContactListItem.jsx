import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/operations';
const { button, li } = css;

export default function ContactListItem(contact) {
  const dispatch = useDispatch();
  const { id, name, phone } = contact;
  return (
    <li key={id} className={li}>
      {' '}
      {name} : {phone}
      <button
        className={button}
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}

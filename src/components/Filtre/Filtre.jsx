import { useSelector, useDispatch } from 'react-redux';
import { filtreChange } from '../../redux/filterSlice';
import css from './Filtre.module.css';

export default function Filtre() {
  const dispatch = useDispatch();
  const filtre = useSelector(state => state.filtre);
  return (
    <label className={css.label}>
      {' '}
      Search by name
      <input
        value={filtre}
        onChange={event => {
          dispatch(filtreChange(event.currentTarget.value));
        }}
        className={css.input}
        type="text"
        name="filtre"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
}

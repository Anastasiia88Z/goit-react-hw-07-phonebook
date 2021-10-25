import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import * as contactsOperation from '../../redux/contacts-operation';
import s from './Form.module.css';

export function Form() {
  const onSubmit = (name, number) =>
    dispatch(contactsOperation.addContactsAction({ name, number }));
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = uuidv4();
  const telId = uuidv4();

  const handleChange = e => {
    const { name, value = '' } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={nameId}
          onChange={handleChange}
          value={name}
          placeholder="Annie Copeland"
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={telId}
          onChange={handleChange}
          value={number}
          placeholder="227-91-26"
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;

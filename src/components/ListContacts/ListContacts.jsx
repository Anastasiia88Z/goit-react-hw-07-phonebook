import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactsOperations,
  contactsSelectors,
} from '../../redux/contacts/index';

import s from './ListContacts.module.css';
import PropTypes from 'prop-types';

function ListContacts() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          {name} : {number}
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ListContacts;

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContacts: PropTypes.func,
};

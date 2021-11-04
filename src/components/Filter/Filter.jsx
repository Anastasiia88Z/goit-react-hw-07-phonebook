import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts/index';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = event =>
    dispatch(contactsActions.changeFilter(event.target.value));

  const onBlurHandler = () => dispatch(contactsActions.changeFilter(''));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

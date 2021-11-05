import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contacts-operations';
import { contactsActions } from '.';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_state, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.rejected]: () => false,
  [addContacts.fulfilled]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_state, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContacts.pending]: () => null,
  [addContacts.rejected]: (_state, { payload }) => payload,
  [deleteContacts.pending]: () => null,
  [deleteContacts.rejected]: (_state, { payload }) => payload,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({ entities, isLoading, error, filter });

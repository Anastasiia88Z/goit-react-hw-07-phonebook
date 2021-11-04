import { createAction } from '@reduxjs/toolkit';

export const deleteContacts = createAction('contacts/deleteContacts');

export const changeFilter = createAction('contacts/changeFilter');

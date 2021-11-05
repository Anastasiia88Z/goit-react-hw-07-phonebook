import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../service/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      return await contactsApi.addContacts(contact);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contact/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.deleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

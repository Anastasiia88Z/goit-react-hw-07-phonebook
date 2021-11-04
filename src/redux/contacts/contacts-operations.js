import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactApi from '../../service/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactApi.fetchContacts();
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
      return await contactApi.addContacts(contact);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await contactApi.deleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async transaction => {
    const { data } = await axios.post('/transactions', transaction);
    console.log(data);
    return data;
  }
);

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const { data } = await axios.get('/transactions');
    console.log(data);
    return data;
  }
);

export const getStatistics = createAsyncThunk(
  'transactions/getStatistics',
  async () => {
    const { data } = await axios.get('/transactions/stats');
    console.log(data);
    return data;
  }
);

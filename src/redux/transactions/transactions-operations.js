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
  async ({ month, year }) => {
    console.log(month);
    let monthNumber = getNumericMonth(month);
    if (monthNumber === '-1') {
      const now = new Date();
      monthNumber = now.getMonth().toString().padStart(2, '0');
    }
    console.log(monthNumber);
    const { data } = await axios.get(
      // '/transactions/stats'
      `/transactions/stats?year=${year}&month=${monthNumber}`
    );
    console.log(data);
    return data;
  }
);

function getNumericMonth(monthAbbr) {
  return String(
    [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ].indexOf(monthAbbr)
  ).padStart(2, '0');
}

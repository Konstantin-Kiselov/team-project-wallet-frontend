import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getStatisticsSuccess,
  getStatisticsRequest,
  getStatisticsError,
} from './transactions-actions';

axios.defaults.baseURL =
  'https://wallet-team-project-group-3.herokuapp.com/api';

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async transaction => {
    const { data } = await axios.post('/transactions', transaction);
    return data;
  }
);

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const { data } = await axios.get('/transactions');
    return data;
  }
);

export const getStatistics = (month, year) => async dispatch => {
  dispatch(getStatisticsRequest());
  try {
    const { data } = await axios.get(
      `/transactions/stats?month=${month}&year=${year}`
    );

    dispatch(getStatisticsSuccess(data));
  } catch (error) {
    dispatch(getStatisticsError(error.message));
  }
};

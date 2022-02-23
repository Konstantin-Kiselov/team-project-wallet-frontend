import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getStatisticsSuccess,
  getStatisticsRequest,
  getStatisticsError,
} from './transactions-actions';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async transaction => {
    const { data } = await axios.post('/transactions', transaction);
    // console.log(data);
    return data;
  }
);

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const { data } = await axios.get('/transactions');
    // console.log(data);
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

// export const getStatistics = createAsyncThunk(
//   'transactions/getStatistics',
//   async ({ month, year }) => {
//     console.log(month);
//     let monthNumber = getNumericMonth(month);
//     if (monthNumber === '-1') {
//       const now = new Date();
//       monthNumber = now.getMonth().toString().padStart(2, '0');
//     }
//     const { data } = await axios.get(
//       `/transactions/stats?year=${year}&month=${monthNumber}`
//     );
//     console.log(data);
//     return data;
//   }
// );

// function getNumericMonth(monthAbbr) {
//   return String(
//     [
//       'Январь',
//       'Февраль',
//       'Март',
//       'Апрель',
//       'Май',
//       'Июнь',
//       'Июль',
//       'Август',
//       'Сентябрь',
//       'Октябрь',
//       'Ноябрь',
//       'Декабрь',
//     ].indexOf(monthAbbr)
//   );
// }

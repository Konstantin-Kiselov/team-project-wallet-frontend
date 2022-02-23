import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getStatisticsSuccess } from './transactions-actions';

import {
  fetchTransactions,
  addTransaction,
  getStatistics,
} from './transactions-operations';

const allTransactions = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
  //   [fetchTransactionsSuccess]: (_, { payload }) => payload,
});

const addedTransactions = createReducer([], {
  [addTransaction.fulfilled]: (state, { payload }) => [...state, payload],
  //   [addTransactionSuccess]: (state, { payload }) => [...state, payload],
});

const queryStatistics = createReducer([], {
  // [getStatistics.fulfilled]: (_, { payload }) => payload,
  [getStatisticsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [allTransactions.pending]: () => true,
  [allTransactions.fulfilled]: () => false,
  [allTransactions.rejected]: () => false,
  [addedTransactions.pending]: () => true,
  [addedTransactions.fulfilled]: () => false,
  [addedTransactions.rejected]: () => false,
  [queryStatistics.pending]: () => true,
  [queryStatistics.fulfilled]: () => false,
  [queryStatistics.rejected]: () => false,
});

export default combineReducers({
  allTransactions,
  addedTransactions,
  queryStatistics,
  loading,
});

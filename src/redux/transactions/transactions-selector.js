const getAllTransactions = state => state.transactions.allTransactions;
const getAddedTransactions = state => state.transactions.addedTransactions;
const getAllQueryStatistics = state => state.transactions.queryStatistics;

export { getAllTransactions, getAddedTransactions, getAllQueryStatistics };

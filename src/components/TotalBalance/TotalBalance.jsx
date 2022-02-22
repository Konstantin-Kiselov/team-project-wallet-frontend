import s from './TotalBalance.module.css';
import { useMemo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { fetchTransactions } from '../../redux/transactions/transactions-operations';
import { getAllTransactions } from '../../redux/transactions/transactions-selector';

export default function TotalBalance() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const transactions = useSelector(getAllTransactions);
  const data = useMemo(() => transactions, [transactions]);
  const balance = data.length === 0 ? 0 : data[data.length - 1].total;

  return (
    <div className={s.balanceLabel}>
      <p className={s.balanceText}>ВАШ БАЛАНС:</p>
      <p className={s.balanceValue}>
        <span>$</span> {balance}
      </p>
    </div>
  );
}

import React from 'react';
import s from '../NoTransactions/NoTransactions.module.css';

export default function NoTransactions() {
  return (
    <div className={s.empty}>
      Нет данных по операциям. Добавьте транзакции :)
    </div>
  );
}

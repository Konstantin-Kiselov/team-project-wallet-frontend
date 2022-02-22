import styles from './Currency.module.css';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchBankData } from '../../services/bankAPI';

function Currency() {
  const [actualCurrencies, setActualCurrencies] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    fetchBankData()
      .then(response => {
        setActualCurrencies(
          response.filter(
            item =>
              item.ccy === 'USD' || item.ccy === 'EUR' || item.ccy === 'RUR'
          )
        );
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headBlock}></div>
      {status === 'pending' && (
        <div className={styles.loader}>
          <CircularProgress
            sx={{
              color: '#FFFFFF',
              timeout: '3000',
            }}
            size="100px"
          />
        </div>
      )}
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.tableRow}>Валюта</th>
            <th>Покупка</th>
            <th>Продажа</th>
          </tr>
        </thead>
        {status === 'resolved' && (
          <tbody>
            {actualCurrencies.map(item => {
              return (
                <tr key={item.ccy} className={styles.tableRow}>
                  <td>{item.ccy}</td>
                  <td className={styles.buyCell}>{item.buy.slice(0, 5)}</td>
                  <td className={styles.saleCell}>{item.sale.slice(0, 5)}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Currency;

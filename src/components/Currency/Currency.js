import Media from 'react-media';
import styles from './Currency.module.css';
import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import decorationMob from './Vector 7_mob.png';
import decorationTab from './Vector 7_tablet.png';
import decorationDesc from './Vector7_desc.png';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { fetchBankData } from '../../services/bankAPI';

function Currency() {
  const [actualCurrencies, setActualCurrencies] = useState(null);
  const [status, setStatus] = useState('idle');
  // const [time, setTime] = useState("");

  useEffect(() => {
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
      <div className={styles.decoration}>
        <Media
          queries={{
            small: '(max-width: 599px)',
            medium: '(min-width: 600px) and (max-width: 1199px)',
            large: '(min-width: 1200px)',
          }}
        >
          {matches => (
            <>
              {matches.small && (
                <img src={decorationMob} alt="currency table decoration" />
              )}
              {matches.medium && (
                <img src={decorationTab} alt="currency table decoration" />
              )}
              {matches.large && (
                <img src={decorationDesc} alt="currency table decoration" />
              )}
            </>
          )}
        </Media>
      </div>
      {status === 'pending' && (
        <TailSpin
          type="TailSpin"
          radius={5}
          color="#FFFFFF"
          height={100}
          width={100}
          timeout={3000}
        />
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
            {actualCurrencies.map((item, i) => {
              return (
                <>
                  <tr key={i} className={styles.tableRow}>
                    <td>{item.ccy}</td>
                    <td className={styles.buyCell}>{item.buy.slice(0, 5)}</td>
                    <td className={styles.saleCell}>{item.sale.slice(0, 5)}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Currency;

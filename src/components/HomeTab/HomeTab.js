import { useState, useEffect } from 'react';
import transactions from './transactions.json';
import s from './HomeTab.module.css';

export default function HomeTab() {
  const [status, setStatus] = useState('idle');
  const [transInfo, setTransInfo] = useState(null);

  //   useEffect(() => {
  //     transactions
  //       .map()
  //       .then(response => {
  //         setTransInfo();

  //         setStatus('resolved');
  //       })
  //       .catch(error => {
  //         setStatus('rejected');
  //       });
  //   }, []);

  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead className={s.titles}>
          <tr className={s.row}>
            <th className={s.titles_head}>Дата</th>
            <th className={s.titles_head}>Тип</th>
            <th className={s.titles_head}>Категория</th>
            <th className={s.titles_head}>Комментарий</th>
            <th className={s.titles_head}>Сумма</th>
            <th className={s.titles_head}>Баланс</th>
          </tr>
        </thead>
        <tbody className={s.body}>
          <tr className={s.row}>
            <td aria-label="Дата" className={s.body_item}>
              12.02.1557
            </td>
            <td aria-label="Тип" className={s.body_item}>
              -
            </td>
            <td aria-label="Категория" className={s.body_item}>
              Машина
            </td>
            <td aria-label="Комментарий" className={s.body_item}>
              купили фары
            </td>
            <td aria-label="Сумма" className={s.body_item}>
              3600
            </td>
            <td aria-label="Баланс" className={s.body_item}>
              12900
            </td>
          </tr>
          <tr className={s.row}>
            <td aria-label="Дата" className={s.body_item}>
              12.02.1557
            </td>
            <td aria-label="Тип" className={s.body_item}>
              -
            </td>
            <td aria-label="Категория" className={s.body_item}>
              Машина
            </td>
            <td aria-label="Комментарий" className={s.body_item}>
              купили фары
            </td>
            <td aria-label="Сумма" className={s.body_item}>
              3600
            </td>
            <td aria-label="Баланс" className={s.body_item}>
              12900
            </td>
          </tr>
          <tr className={s.row}>
            <td aria-label="Дата" className={s.body_item}>
              12.02.1557
            </td>
            <td aria-label="Тип" className={s.body_item}>
              -
            </td>
            <td aria-label="Категория" className={s.body_item}>
              Машина
            </td>
            <td aria-label="Комментарий" className={s.body_item}>
              купили фары
            </td>
            <td aria-label="Сумма" className={s.body_item}>
              3600
            </td>
            <td aria-label="Баланс" className={s.body_item}>
              12900
            </td>
          </tr>
          <tr className={s.row}>
            <td aria-label="Дата" className={s.body_item}>
              12.02.1557
            </td>
            <td aria-label="Тип" className={s.body_item}>
              -
            </td>
            <td aria-label="Категория" className={s.body_item}>
              Машина
            </td>
            <td aria-label="Комментарий" className={s.body_item}>
              купили фары
            </td>
            <td aria-label="Сумма" className={s.body_item}>
              3600
            </td>
            <td aria-label="Баланс" className={s.body_item}>
              12900
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

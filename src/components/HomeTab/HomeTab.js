import { useState, useEffect } from 'react';
import transactions from './transactions.json';
import s from './HomeTab.module.css';
import classNames from 'classnames';

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

  // const data = transactions.map()

  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead className={s.titles}>
          <tr className={s.row}>
            <th className={s.titles_head}>Дата</th>
            <th className={classNames(s.titles_head, s.body_item_type)}>Тип</th>
            <th className={classNames(s.titles_head, s.titles_head_category)}>
              Категория
            </th>
            <th className={s.titles_head}>Комментарий</th>
            <th className={classNames(s.titles_head, s.body_item_type)}>
              Сумма
            </th>
            <th className={classNames(s.titles_head, s.body_item_type)}>
              Баланс
            </th>
          </tr>
        </thead>
        <tbody className={s.body}>
          <tr className={s.row}>
            <td aria-label="Дата" className={s.body_item}>
              12.02.1557
            </td>
            <td
              aria-label="Тип"
              className={classNames(s.body_item, s.body_item_type)}
            >
              -
            </td>
            <td
              aria-label="Категория"
              className={classNames(s.body_item, s.body_item_category)}
            >
              Машина
            </td>
            <td aria-label="Комментарий" className={s.body_item}>
              купили фары
            </td>
            <td
              aria-label="Сумма"
              className={classNames(s.body_item, s.body_item_sum)}
            >
              3 600.00
            </td>
            <td
              aria-label="Баланс"
              className={classNames(s.body_item, s.body_item_balance)}
            >
              12 900.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

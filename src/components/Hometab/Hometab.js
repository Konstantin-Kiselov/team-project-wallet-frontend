import s from './Hometab.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import classNames from 'classnames';
import { fetchTransactions } from '../../redux/transactions/transactions-operations';
import {
  getAllTransactions,
  getAddedTransactions,
} from '../../redux/transactions/transactions-selector';

export default function Hometab() {
  const addedTransaction = useSelector(getAddedTransactions);
  const allTransactions = useSelector(getAllTransactions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, addedTransaction]);
  console.log(addedTransaction);

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
          {allTransactions.map(
            ({ _id, income, category, comment, amount, total, createdAt }) => (
              <tr
                key={_id}
                className={income === false ? s.row_red : s.row_green}
              >
                <td aria-label="Дата" className={s.body_item}>
                  {createdAt}
                </td>
                <td
                  aria-label="Тип"
                  className={classNames(s.body_item, s.body_item_type)}
                >
                  {income ? '+' : '-'}
                </td>
                <td
                  aria-label="Категория"
                  className={classNames(s.body_item, s.body_item_category)}
                >
                  {category}
                </td>
                <td aria-label="Комментарий" className={s.body_item}>
                  {comment ? comment : ''}
                </td>
                <td
                  aria-label="Сумма"
                  className={classNames(
                    s.body_item,
                    income ? s.type_green : s.type_red
                  )}
                >
                  {amount}
                </td>
                <td
                  aria-label="Баланс"
                  className={classNames(s.body_item, s.body_item_balance)}
                >
                  {total}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

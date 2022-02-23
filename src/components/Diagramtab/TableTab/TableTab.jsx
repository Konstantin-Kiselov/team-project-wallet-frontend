import s from './TableTab.module.css';
import { useSelector } from 'react-redux';
import { getAllQueryStatistics } from '../../../redux/transactions/transactions-selector';
import DatePicker from '../../DatePicker/DatePicker';

export default function Table() {
  const backgroundColor = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
  ];

  const queryStatistics = useSelector(getAllQueryStatistics);

  return (
    <div className={s.table}>
      <DatePicker />

      <ul className={s.table__stat__list}>
        <li className={s.table__stat__wrapper}>
          <span className={s.table__stat__title}>Категория</span>
          <span className={s.table__stat__title}>Сумма</span>
        </li>

        {queryStatistics.stats &&
          queryStatistics.stats.map((item, index) => {
            return (
              <li className={s.table__stat__item}>
                <span
                  className={s.table__stat__color}
                  style={{ backgroundColor: backgroundColor[index] }}
                ></span>
                <span className={s.table__stat__category}>{item.name}</span>
                <span className={s.table__stat__sum}>{item.amount}</span>
              </li>
            );
          })}
      </ul>

      <ul className={s.table__results__list}>
        <li className={s.table__results__item}>
          <span className={s.table__results__type}>Расходы:</span>
          <span className={s.table__results__expenses}>
            {queryStatistics.expense}
          </span>
        </li>
        <li className={s.table__results__item}>
          <span className={s.table__results__type}>Доходы:</span>
          <span className={s.table__results__income}>
            {queryStatistics.income}
          </span>
        </li>
      </ul>
    </div>
  );
}

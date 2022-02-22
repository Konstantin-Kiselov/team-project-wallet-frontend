import s from './TableTab.module.css';
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatistics } from '../../../redux/transactions/transactions-operations';
import { getAllQueryStatistics } from '../../../redux/transactions/transactions-selector';

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

  const now = new Date();

  const [inputData, setInputData] = useState({
    month: '',
    year: '',
  });

  const queryStatistics = useSelector(getAllQueryStatistics);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistics(inputData));
  }, [dispatch, inputData]);
  // console.log(queryStatistics);

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    setInputData(prev => ({ ...prev, [name]: value }));
  }, []);

  const onClick = useCallback(e => {
    e.currentTarget.value = '';
    const { name, value } = e.currentTarget;
    setInputData(prev => ({ ...prev, [name]: value }));
  }, []);

  return (
    <div className={s.table}>
      <div className={s.table__input__wrapper}>
        <input
          className={s.table__input}
          name="month"
          value={inputData.month}
          list="months"
          placeholder="Месяц"
          onClick={onClick}
          onChange={handleChange}
        />

        <datalist id="months">
          <option value="Январь"></option>
          <option value="Февраль"></option>
          <option value="Март"></option>
          <option value="Апрель"></option>
          <option value="Май"></option>
          <option value="Июнь"></option>
          <option value="Июль"></option>
          <option value="Август"></option>
          <option value="Сентябрь"></option>
          <option value="Октябрь"></option>
          <option value="Ноябрь"></option>
          <option value="Декабрь"></option>
        </datalist>

        {/* <datalist id="months">
         'Здесь будет .map для выбора месяца'
        </datalist> */}

        <input
          className={s.table__input}
          name="year"
          value={inputData.year}
          list="years"
          placeholder="Год"
          onClick={onClick}
          onChange={handleChange}
        />

        <datalist id="years">
          <option value="2022"></option>
          <option value="2021"></option>
          <option value="2020"></option>
        </datalist>

        {/* <datalist id="months">
         'Здесь будет .map для выбора года'
        </datalist> */}
      </div>

      <ul className={s.table__stat__list}>
        <li className={s.table__stat__wrapper}>
          <span className={s.table__stat__title}>Категория</span>
          <span className={s.table__stat__title}>Сумма</span>
        </li>

        {queryStatistics.stats &&
          queryStatistics.stats.map((item, index) => {
            console.log(item);
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

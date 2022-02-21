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

  const [inputData, setInputData] = useState({
    month: '',
    year: '',
  });

  const queryStatistics = useSelector(getAllQueryStatistics);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch, queryStatistics]);
  console.log(queryStatistics);

  const onClick = useCallback(e => {
    e.currentTarget.value = '';
    const {
      currentTarget: { name, value },
    } = e;
    setInputData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleChange = useCallback(e => {
    const {
      currentTarget: { name, value },
    } = e;
    setInputData(prev => ({ ...prev, [name]: value }));
  }, []);

  return (
    <div className={s.table}>
      <div className={s.table__input__wrapper}>
        <input
          className={s.table__input}
          name="months"
          //   value={inputData.month}
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
          name="years"
          //   value={inputData.year}
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

        {/* {queryStatistics &&
          Object.keys(queryStatistics).map((category, index, amount) => ( */}
        <li
          className={s.table__stat__item}
          //  key={index}
        >
          <span
            className={s.table__stat__color}
            style={{ backgroundColor: backgroundColor[0] }}
            // style={{ backgroundColor: backgroundColor[index] }}
          ></span>
          <span className={s.table__stat__category}>Категория_01</span>
          {/* {category} */}
          <span className={s.table__stat__sum}>
            Сумма_01
            {/* {amount} */}
          </span>
        </li>
        <li className={s.table__stat__item}>
          <span
            className={s.table__stat__color}
            style={{ backgroundColor: backgroundColor[1] }}
          ></span>
          <span className={s.table__stat__category}>Категория_02</span>
          <span className={s.table__stat__sum}>Сумма_02</span>
        </li>
        <li className={s.table__stat__item}>
          <span
            className={s.table__stat__color}
            style={{ backgroundColor: backgroundColor[2] }}
          ></span>
          <span className={s.table__stat__category}>Категория_03</span>
          <span className={s.table__stat__sum}>Сумма_03</span>
        </li>
        <li className={s.table__stat__item}>
          <span
            className={s.table__stat__color}
            style={{ backgroundColor: backgroundColor[3] }}
          ></span>
          <span className={s.table__stat__category}>Категория_04</span>
          <span className={s.table__stat__sum}>Сумма_04</span>
        </li>
      </ul>

      <ul className={s.table__results__list}>
        <li className={s.table__results__item}>
          <span className={s.table__results__type}>Расходы:</span>
          <span className={s.table__results__expenses}>
            {/* {totalExpenses} */}
            Сумма расходов
          </span>
        </li>
        <li className={s.table__results__item}>
          <span className={s.table__results__type}>Доходы:</span>
          <span className={s.table__results__income}>
            {/* {totalIncome} */}
            Сумма доходов
          </span>
        </li>
      </ul>
    </div>
  );
}

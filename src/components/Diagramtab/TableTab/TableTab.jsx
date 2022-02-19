import s from './TableTab.module.css';
import { useState, useCallback, useEffect } from 'react';

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

  const [filterData, setFilterData] = useState({
    month: '',
    year: '',
  });

  const onClick = useCallback(e => {
    e.currentTarget.value = '';
    const {
      currentTarget: { name, value },
    } = e;
    setFilterData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleChange = useCallback(e => {
    const {
      currentTarget: { name, value },
    } = e;
    setFilterData(prev => ({ ...prev, [name]: value }));
  }, []);

  return (
    <div className={s.table}>
      <div className={s.filter}>
        <input
          className={s.filter__input}
          name="months"
          //   value={filterData.month}
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
          className={s.filter__input}
          name="years"
          //   value={filterData.year}
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

      <ul className={s.statistics}>
        <li className={s.statistics__title__wrapper}>
          <span className={s.statistics__title__part}>Категория</span>
          <span className={s.statistics__title__part}>Сумма</span>
        </li>

        {/* {categoriesStat &&
          Object.keys(categoriesStat).map((category, index, sum) => ( */}
        <li
          className={s.statistics__item}
          //  key={index}
        >
          <span
            className={s.statistics__color}
            style={{ backgroundColor: backgroundColor[0] }}
          ></span>
          Категория_01
          {/* {category} */}
          <span className={s.statistics__costs}>
            Сумма_01
            {/* {sum} */}
          </span>
        </li>
        <li className={s.statistics__item}>
          <span
            className={s.statistics__color}
            style={{ backgroundColor: backgroundColor[1] }}
          ></span>
          Категория_02
          <span className={s.statistics__costs}>Сумма_02</span>
        </li>
        <li className={s.statistics__item}>
          <span
            className={s.statistics__color}
            style={{ backgroundColor: backgroundColor[2] }}
          ></span>
          Категория_03
          <span className={s.statistics__costs}>Сумма_03</span>
        </li>
        <li className={s.statistics__item}>
          <span
            className={s.statistics__color}
            style={{ backgroundColor: backgroundColor[3] }}
          ></span>
          Категория_04
          <span className={s.statistics__costs}>Сумма_04</span>
        </li>
      </ul>

      <ul className={s.outcome}>
        <li className={s.outcome__item}>
          <span className={s.outcome__type}>Расходы:</span>
          <span className={s.outcome__total__expenses}>
            {/* {totalSpend} */}
            Сумма расходов
          </span>
        </li>
        <li className={s.outcome__item}>
          <span className={s.outcome__type}>Доходы:</span>
          <span className={s.outcome__total__income}>
            {/* {totalIncome} */}
            Сумма доходов
          </span>
        </li>
      </ul>
    </div>
  );
}

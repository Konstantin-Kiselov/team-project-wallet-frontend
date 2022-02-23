import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getStatistics } from '../../redux/transactions/transactions-operations';
import { months } from './monthsOptions';
import s from './DatePicker.module.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function DatePicker() {
  const dispatch = useDispatch();

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const handleChangeMonth = event => {
    setMonth(event.target.value);
  };
  const handleChangeYear = event => {
    setYear(event.target.value);
  };

  useEffect(() => {
    dispatch(getStatistics(month, year));
  }, [dispatch, month, year]);

  return (
    <div className={s.container}>
      <FormControl sx={{ m: 1 }} className={s.formControl}>
        <Select
          className={s.selectDate}
          value={month}
          onChange={handleChangeMonth}
        >
          {months.map((month, index) => {
            return (
              <MenuItem value={index} key={uuidv4()}>
                {month}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} className={s.formControl}>
        <Select
          className={s.selectDate}
          value={year}
          onChange={handleChangeYear}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

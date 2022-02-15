import s from './ModalForm.module.css';
// import InputUnstyled from "@mui/base/InputUnstyled";
// import Select from "./Select";
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '../Button';
// import Data from "../Data";

export default function ModalForm({ onClick, children }) {
  const Today = new Date();
  const [coment, setComent] = useState('');
  const [data, setData] = useState(
    `${Today.getFullYear()}-0${Today.getMonth() + 1}-${Today.getDate()}`
  );
  const [select, setSelect] = useState();

  // const [value, setValue] = React.useState(new Date());
  console.log(data);

  const handleChange = e => {
    if (e.currentTarget.name === 'coment') {
      setComent(e.currentTarget.value);
    }

    if (e.currentTarget.name === 'data') {
      setData(e.currentTarget.value);
    }

    if (e.currentTarget.name === 'select') {
      setSelect(e.currentTarget.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Post request');
    // dispatch(authOperations.logIn({ email, password }));
    // setEmail("");
    // setPassword("");

    onClick(false);
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        {/* <SelectUnstyled components={{ Root, Thumb, Input }} /> */}
        <select value={select} className={s.select} onChange={handleChange}>
          <option value="" disabled checked>
            Выберите категорию
          </option>
          <option value="hurr">Регулярный доход</option>
          <option value="hurr">Нерегулярный доход</option>
        </select>

        <div className={s.inputContainer}>
          <label>
            <input className={s.inputSum} placeholder="0.00"></input>
          </label>
          <TextField
            name="data"
            value={data}
            onChange={handleChange}
            id="date"
            label=""
            type="date"
            // defaultValue="2017-05-24"
            // defaultCalendarMonth
            variant="standard"
            sx={{
              width: 190,
              // height: 34,
              // paddingTop: 5,
              bgcolor: '#FFFFFF',
              // color: "red",
              // border: "3px solid red",
              // outline: "1px solid green",
            }}
            InputLabelProps={{
              shrink: true,
              // variant: "outlined",
            }}
          />
        </div>

        <label>
          <input
            className={s.inputComent}
            placeholder="Комментарий"
            type="tel"
            name="coment"
            value={coment}
            onChange={handleChange}
          ></input>
        </label>

        {/* <Button title={"Добавить"} className={s.buttonAdd} />
      <Button title={"Отмена"} className={s.buttonCancel} /> */}
        <div className={s.buttonContainer}>
          <div className={s.button}>
            <Button
              title={'Добавить'}
              styleButton={true}
              type={'submit'}
              // onClick={handleSubmit}
            />
          </div>
          <Button
            title={'Отмена'}
            styleButton={false}
            type={'button'}
            onClick={() => {
              onClick(false);
            }}
          />
        </div>
      </form>
    </div>
  );
}

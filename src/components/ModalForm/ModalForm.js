import s from './ModalForm.module.css';
// import InputUnstyled from "@mui/base/InputUnstyled";
// import Select from "./Select";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import {
//   ThemeProvider,
//   createTheme,
//   experimental_sx as sx,
// } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '../Button';
// import Data from "../Data";

// import Slider from '@mui/material/Slider';
// import { styled } from '@mui/material/styles';
// const CustomizedTextField = styled(TextField)`
//   color: #20b2aa;
//   border-bottom: 1px solid #e0e;

//   :hover {
//     outline: 0;
//     border-bottom: 1px solid #e01;
//   }
// `;

// const theme = createTheme({
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           border: 0,
//           borderBottom: '1px solid #e0e0e0',
//           outline: 0,

//           // border: `2px dashed #155`,
//           color: '#155',
//         },
//       },
//     },

//     // variants: [
//     //   {
//     //     props: { variant: 'standard' },
//     //     style: {
//     //       border: 0,
//     //       // borderBottom: '1px solid #e0e0e0',
//     //       outline: 0,
//     //       color: '#e0e0e0',
//     //     },
//     //   },
//     // ],
//   },
// });

export default function ModalForm({ onClick, children }) {
  const Today = new Date();
  const [sum, setSum] = useState('');
  const [coment, setComent] = useState('');
  const [data, setData] = useState(
    `${Today.getFullYear()}-0${Today.getMonth() + 1}-${Today.getDate()}`
  );
  const [select, setSelect] = useState();
  const [toggle, setToggle] = useState(false);

  console.log(toggle);
  console.log(data);
  console.log(select);

  const requestBody = { coment, data, select, sum };

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

    if (e.currentTarget.name === 'sum') {
      setSum(e.currentTarget.value);
    }

    if (e.currentTarget.name === 'toggle') {
      setToggle(!toggle);
    }
  };

  const getExpendCategory = () => {
    console.log('Get Expenditure Category');
  };

  toggle && getExpendCategory();

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Post request', requestBody);
    // dispatch(authOperations.logIn({ email, password }));
    // setEmail("");
    // setPassword("");

    onClick(false);
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        {/* /*============================================================ Toggle =================================== */}
        <div className={s.containerToggle}>
          {/* <svg class="theme-switch__icon" role="img" aria-label="Иконка солнца">
        <use href="./images/sprite.svg#sun"></use>
      </svg> */}
          <span className={toggle ? s.noActive : s.profit}>Доход</span>

          <div className={s.switchControl}>
            <input
              checked={toggle}
              // value={value}
              onChange={handleChange}
              className={s.switchToggle}
              type="checkbox"
              name="toggle"
              id="theme-switch-toggle"
              aria-label="Переключить между тёмной и светлой темой"
            />
            <label
              aria-hidden="true"
              className={s.switchTrack}
              for="theme-switch-toggle"
            ></label>
            <div
              aria-hidden="true"
              className={toggle ? s.switchMarkerChecked : s.switchMarker}
            ></div>
          </div>
          <span className={toggle ? s.expenditure : s.noActive}>Расход</span>

          {/* <svg class="theme-switch__icon" aria-label="Иконка луны">
        <use href="./images/sprite.svg#moon"></use>
      </svg> */}
        </div>
        {/* ============================================================== Toggle ===================== */}

        <div className={s.inputContainer}>
          <div className={s.selectContainer}>
            <select
              required
              // defaultValue
              name="select"
              className={s.select}
              placeholder="Выберите категорию"
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Выберите категорию
              </option>
              <option className={s.option} value={select}>
                Регулярный доход
              </option>
              <option className={s.option} value={select}>
                Нерегулярный доход
              </option>
            </select>
          </div>
          <div className={s.sumContainer}>
            <label for="sum">
              <input
                required
                id="sum"
                type="number"
                name="sum"
                value={sum}
                className={s.inputSum}
                placeholder="0.00"
                onChange={handleChange}
              ></input>
            </label>

            {/* <ThemeProvider theme={theme}> */}
            <TextField
              className={s.data}
              name="data"
              value={data}
              onChange={handleChange}
              id="date"
              label=""
              type="date"
              // color="success"
              // sx={{ outline: 'none', border: 0 }}
              // defaultValue="2017-05-24"
              // defaultCalendarMonth
              variant="standard"
              InputLabelProps={{
                shrink: true,
                // variant: "outlined",
              }}
            />
            {/* </ThemeProvider> */}
          </div>
          <label for="coment">
            <input
              id="coment"
              className={s.inputComent}
              placeholder="Комментарий"
              type="text"
              name="coment"
              value={coment}
              onChange={handleChange}
            ></input>
          </label>
        </div>

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

////////////////////////
// {
//   /* <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">
//               Выберите категорию
//             </InputLabel>
//             <Select
//               className={s.select}
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={select}
//               label="Select"
//               onChange={handleChange}
//             >
//               <MenuItem value={10}>Регулярный доход</MenuItem>
//               <MenuItem value={20}>Нерегулярный доход</MenuItem>
//             </Select>
//           </FormControl> */
// }

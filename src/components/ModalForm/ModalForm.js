import s from './ModalForm.module.css';
// import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '../Button';
// import moment from 'moment';
import { getCategory, addTransaction } from '../../services/walletAPI';
import { ReactComponent as Plus } from '../../img/icons/plus.svg';
import { ReactComponent as Minus } from '../../img/icons/minus.svg';
import { ReactComponent as DateIcon } from '../../img/icons/data.svg';

export default function ModalForm({ allCategory, onClick }) {
  // const Today = new Date();
  const today = new Date().toLocaleDateString();
  console.log(today);
  const [sum, setSum] = useState('');
  const [comment, setComment] = useState('');

  // const [data, setData] = useState(
  //   `${Today.getFullYear()}-0${Today.getMonth() + 1}-${Today.getDate()}`
  // );
  const [select, setSelect] = useState('');
  const [toggle, setToggle] = useState(true);
  const [itemselect, setItemselect] = useState(false);
  const [category, setCategory] = useState('');

  console.log(toggle);
  console.log(select);

  const handleChange = e => {
    if (e.currentTarget.name === 'comment') {
      setComment(e.currentTarget.value);
    }

    // if (e.currentTarget.name === 'data') {
    //   setData(e.currentTarget.value);
    // }

    // if (e.currentTarget.name === 'select') {
    //   setSelect(e.currentTarget.value);
    // }

    if (e.currentTarget.name === 'sum') {
      setSum(e.currentTarget.value);
    }

    if (e.currentTarget.name === 'toggle') {
      setToggle(!toggle);
      setSelect('');
    }
  };

  // category sorting
  // Закоментировать
  const allCategory1 = [
    { name: 'Регулярный доход', income: true, id: '1' },
    { name: 'Нерегулярный доход', income: true, id: '2' },
    { name: 'Авто', income: false, id: '3' },
    { name: 'Еда', income: false, id: '4' },
    { name: 'Одежда', income: false, id: '5' },
    { name: 'Комуналка', income: false, id: '6' },
    { name: 'Образование', income: false, id: '7' },
    { name: 'Авто', income: false, id: '3' },
    { name: 'Еда', income: false, id: '4' },
    { name: 'Одежда', income: false, id: '5' },
    { name: 'Комуналка', income: false, id: '6' },
    { name: 'Образование', income: false, id: '7' },
  ];

  let expenditureOptions = [];
  let profitOptions = [];

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Раскоментировать когда будет приходит ответ
  allCategory1.map(element =>
    element.income
      ? profitOptions.push(element)
      : expenditureOptions.push(element)
  );

  // allCategory1.map(element =>
  //   element.income
  //     ? profitOptions.push({ name: element.name, id: element.id })
  //     : expenditureOptions.push({ name: element.name, id: element.id })
  // );

  // allCategory1.map(element =>
  //   element.income
  //     ? profitOptions.push(element)
  //     : expenditureOptions.push(element)
  // );

  console.log('111111111111', allCategory);

  let categoryOptions = [];
  if (!toggle) {
    // profitOptions.map(option => categoryOptions.push(option.name));
    categoryOptions = profitOptions;
  } else {
    // expenditureOptions.map(option => categoryOptions.push(option.name));
    categoryOptions = expenditureOptions;
  }
  console.log(categoryOptions);

  // post request - add transaction
  const requestBody = {
    income: !toggle,
    category: category,
    amount: sum,
    comment: comment,
  };
  console.log(requestBody);

  const handleSubmit = e => {
    e.preventDefault();

    // console.log('Post request', requestBody);
    // dispatch(authOperations.logIn({ email, password }));
    // setEmail("");
    // setPassword("");

    addTransaction(requestBody)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    onClick(false);
  };

  // Удалить
  // const getAllCategory = () => {
  //   getCategory()
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // };

  // toggle && getExpendCategory();

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        {/* /*============================================================ Toggle =================================== */}
        <div className={s.containerToggle}>
          {/* <svg class="theme-switch__icon" role="img" aria-label="Иконка солнца">
        <use href="./images/sprite.svg#sun"></use>
      </svg> */}

          <span className={toggle ? s.noActive : s.profit}>Доход</span>
          <Plus className={s.iconPlus} height={20} width={20} fill="#000000" />

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

          <Minus width={30} height={30} fill="#000000" />
          {/* <svg className={s.iconPlus} role="img" aria-label="iconPlus"> */}
          {/* <use
              className={s.iconPlus}
              href="../../img/sprite.svg#icon-minus"
            ></use> */}
          {/* </svg> */}
        </div>
        {/* ============================================================== Toggle ===================== */}

        <div className={s.inputContainer}>
          {/* ========================= Select =======================*/}
          <div className={s.dropdown}>
            <div
              className={s.dropdownBtn}
              onClick={() => {
                setItemselect(!itemselect);
              }}
            >
              {select ? (
                select
              ) : (
                <span className={s.dropdownBtnText}>Выберите категорию</span>
              )}
            </div>
            {itemselect && (
              <div className={s.dropdownContent}>
                {categoryOptions.map(option => (
                  <div
                    className={s.dropdownItem}
                    onClick={e => {
                      setCategory(option);
                      setSelect(option.name);
                      setItemselect(false);
                    }}
                  >
                    {option.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* ========================= Select =======================*/}

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

            {/* <div> */}
            <div
              className={s.date}
              id="date"
              name="date"
              // value={data}
              // onChange={handleChange}
            >
              {today}
              <DateIcon className={s.dateIcon} width={24} height={24} />
            </div>
            {/* </div> */}
          </div>

          <label for="comment">
            <input
              id="comment"
              className={s.inputComment}
              placeholder="Комментарий"
              type="text"
              name="comment"
              value={comment}
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

//  <div className={s.selectContainer}>
//    <select
//      required
//      // defaultValue
//      name="select"
//      className={s.select}
//      placeholder="Выберите категорию"
//      onChange={handleChange}
//    >
//      <option value="" disabled selected>
//        Выберите категорию
//      </option>
//      <option className={s.option} value={select}>
//        Регулярный доход
//      </option>
//      <option className={s.option} value={select}>
//        Нерегулярный доход
//      </option>
//    </select>
//  </div>;

// const expenditureOptions = ['Авто', 'Еда', 'Одежда', 'Комуналка'];

// const profitOptions = [
//   'Нерегулярный доход',
//   'Регулярный доход',
//   'Нерегулярный доход',
//   'Регулярный доход',
// ];

//  {
//    /* <TextField
//               className={s.data}
//               name="data"
//               value={data}
//               onChange={handleChange}
//               id="date"
//               label=""
//               type="date"
//               // defaultValue="2017-05-24"
//               variant="standard"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             /> */
//  }

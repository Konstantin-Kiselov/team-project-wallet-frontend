import s from './ModalForm.module.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '../Button';
import moment from 'moment';
import { getCategory, addTransaction } from '../../services/walletAPI';
import { Formik } from 'formik';
import modalSchema from '../../validationSchemas/modalSchema';

export default function ModalForm({ allCategory, onClick }) {
  const Today = new Date();
  // const m = moment.now();
  // const a = moment().format('L');
  // console.log(a);
  const [sum, setSum] = useState('');
  const [coment, setComent] = useState('');
  const [data, setData] = useState(
    `${Today.getFullYear()}-0${Today.getMonth() + 1}-${Today.getDate()}`
  );

  // const [data, setData] = useState(a);
  const [select, setSelect] = useState('');
  const [toggle, setToggle] = useState(false);
  const [itemselect, setItemselect] = useState(false);

  console.log(toggle);
  console.log(data);
  console.log(select);

  const allCategory1 = [
    { name: 'Регулярный доход', income: true },
    { name: 'Нерегулярный доход', income: true },
    { name: 'Авто', income: false },
    { name: 'Еда', income: false },
    { name: 'Одежда', income: false },
    { name: 'Комуналка', income: false },
    { name: 'Образование', income: false },
  ];

  let expenditureOptions = [];
  let profitOptions = [];

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Раскоментировать когда будет приходит ответ
  // allCategory.map(element =>
  //   element.income
  //     ? profitOptions.push(element.name)
  //     : expenditureOptions.push(element.name)
  // );

  allCategory1.map(element =>
    element.income
      ? profitOptions.push(element.name)
      : expenditureOptions.push(element.name)
  );

  let categoryOptions = [];
  if (!toggle) {
    categoryOptions = profitOptions;
  } else {
    categoryOptions = expenditureOptions;
  }
  console.log(categoryOptions);

  const requestBody = { coment, data, select, sum };

  const handleChange = e => {
    if (e.currentTarget.name === 'coment') {
      setComent(e.currentTarget.value);
    }

    if (e.currentTarget.name === 'data') {
      setData(e.currentTarget.value);
    }

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

  // const getAllCategory = () => {
  //   getCategory()
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // };

  // toggle && getExpendCategory();

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

  return (
    <div className={s.container}>
      <Formik
        initialValues={{
          sum: '',
          data: '',
          select: '',
        }}
        validateOnBlur
        onSubmit={handleSubmit}
        validationSchema={modalSchema}
      >
        {({
          values,
          errors,
          touched,
          // handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <>
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
              <span className={toggle ? s.expenditure : s.noActive}>
                Расход
              </span>

              <svg className={s.iconPlus} role="img" aria-label="iconPlus">
                {/* <use
              className={s.iconPlus}
              href="../../img/sprite.svg#icon-minus"
            ></use> */}
              </svg>
            </div>

            {/* ============================================================== Toggle ===================== */}

            <div className={s.inputContainer}>
              {/* ========================= Select =======================*/}
              <div className={s.dropdown}>
                <div
                  className={s.dropdownBtn}
                  onBlur={handleBlur}
                  name="select"
                  value={values.select}
                  onClick={() => {
                    setItemselect(!itemselect);
                  }}
                >
                  {select ? (
                    select
                  ) : (
                    <span className={s.dropdownBtnText}>
                      Выберите категорию
                    </span>
                  )}
                </div>
                {itemselect && (
                  <div className={s.dropdownContent}>
                    {categoryOptions.map(option => (
                      <div
                        className={s.dropdownItem}
                        onClick={e => {
                          setSelect(option);
                          setItemselect(false);
                        }}
                      >
                        {option}
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
                    value={values.sum}
                    className={s.inputSum}
                    placeholder="0.00"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  {touched.sum && errors.sum && (
                    <p className={s.error}>{errors.sum}</p>
                  )}
                </label>

                {/* <label for="data">
              <input
                required
                id="data"
                type="data"
                name="data"
                value={data}
                className={s.data}
                // placeholder="0.00"
                onChange={handleChange}
              ></input>
            </label> */}
                <label>
                  <TextField
                    className={s.data}
                    name="data"
                    value={values.data}
                    onChange={handleChange}
                    id="date"
                    label=""
                    type="date"
                    onBlur={handleBlur}
                    // defaultValue="2017-05-24"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  {touched.data && errors.data && (
                    <p className={s.error}>{errors.data}</p>
                  )}
                </label>
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
                disabled={!isValid && !dirty}
                title={'Отмена'}
                styleButton={false}
                type={'button'}
                onClick={() => {
                  onClick(false);
                }}
              />
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}

//////////////////////
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

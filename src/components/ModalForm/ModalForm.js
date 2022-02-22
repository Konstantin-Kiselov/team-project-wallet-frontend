import s from './ModalForm.module.css';
import { useState } from 'react';
import Button from '../Button';
import { addTransaction } from '../../services/walletAPI';
import { ReactComponent as Plus } from '../../img/icons/plus.svg';
import { ReactComponent as Minus } from '../../img/icons/minus.svg';
import { ReactComponent as DateIcon } from '../../img/icons/data.svg';

export default function ModalForm({ allCategory, onClick }) {
  const today = new Date().toLocaleDateString();
  console.log(today);
  const [sum, setSum] = useState('');
  const [comment, setComment] = useState('');
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

  allCategory.map(element =>
    element.income
      ? profitOptions.push(element)
      : expenditureOptions.push(element)
  );

  // allCategory.map(element =>
  //   element.income
  //     ? profitOptions.push({ name: element.name, id: element.id })
  //     : expenditureOptions.push({ name: element.name, id: element.id })
  // );

  console.log(allCategory);

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
    amount: Number(sum),
    comment: comment,
    // data: today,
  };
  console.log(requestBody);

  const handleSubmit = e => {
    e.preventDefault();

    // dispatch(authOperations.logIn({ email, password }));

    addTransaction(requestBody)
      .then(response => console.log('77777777777777777777', response))
      .catch(error => console.log(error.message));

    onClick(false);
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        {/* /*============================================================ Toggle =================================== */}
        <div className={s.containerToggle}>
          <span className={toggle ? s.noActive : s.profit}>Доход</span>
          {!toggle && <Plus className={s.iconPlus} />}

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

          {toggle && (
            <Minus
              className={s.iconMinus}
              width={30}
              height={30}
              fill="#000000"
            />
          )}
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
                      // setCategory(option);
                      setCategory({
                        _id: option._id,
                      });
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
// const Today = new Date();
// const [data, setData] = useState(
//   `${Today.getFullYear()}-0${Today.getMonth() + 1}-${Today.getDate()}`
// );

// mongodb+srv://Kirill:Y1JFioqkTigXn9xQ@cluster0.guodi.mongodb.net/db_wallet?retryWrites=true&w=majority

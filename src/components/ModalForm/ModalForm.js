import s from './ModalForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import { addTransaction } from '../../redux/transactions/transactions-operations';

import { ReactComponent as Plus } from '../../img/icons/plus.svg';
import { ReactComponent as Minus } from '../../img/icons/minus.svg';
import { ReactComponent as DateIcon } from '../../img/icons/data.svg';

export default function ModalForm({ allCategory, onClick }) {
  const dispatch = useDispatch();

  const today = new Date().toLocaleDateString();

  const [sum, setSum] = useState('');
  const [comment, setComment] = useState('');
  const [select, setSelect] = useState('');
  const [toggle, setToggle] = useState(true);
  const [itemselect, setItemselect] = useState(false);
  const [category, setCategory] = useState('');

  const handleChange = e => {
    if (e.currentTarget.name === 'comment') {
      setComment(e.currentTarget.value);
    }

    if (e.currentTarget.name === 'sum') {
      setSum(e.currentTarget.value);
    }

    if (e.currentTarget.name === 'toggle') {
      setToggle(!toggle);
      setSelect('');
    }
  };

  // category sorting
  let expenditureOptions = [];
  let profitOptions = [];

  allCategory.map(element =>
    element.income
      ? profitOptions.push(element)
      : expenditureOptions.push(element)
  );

  console.log(allCategory);

  let categoryOptions = [];
  if (!toggle) {
    categoryOptions = profitOptions;
  } else {
    categoryOptions = expenditureOptions;
  }
  console.log(categoryOptions);

  // post request - add transaction
  const requestBody = {
    income: !toggle,
    category: category,
    amount: Number(sum),
    comment: comment,
  };
  // console.log(requestBody);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addTransaction(requestBody));

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
          {toggle && <Minus className={s.iconMinus} />}
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
                      setCategory(option._id);
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

            <div className={s.date} id="date" name="date">
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

// mongodb+srv://Kirill:Y1JFioqkTigXn9xQ@cluster0.guodi.mongodb.net/db_wallet?retryWrites=true&w=majority
// Закоментировать
// const allCategory1 = [
//   { name: 'Регулярный доход', income: true, id: '1' },
//   { name: 'Нерегулярный доход', income: true, id: '2' },
//   { name: 'Авто', income: false, id: '3' },
//   { name: 'Еда', income: false, id: '4' },
//   { name: 'Одежда', income: false, id: '5' },
//   { name: 'Комуналка', income: false, id: '6' },
//   { name: 'Образование', income: false, id: '7' },
//   { name: 'Авто', income: false, id: '3' },
//   { name: 'Еда', income: false, id: '4' },
//   { name: 'Одежда', income: false, id: '5' },
//   { name: 'Комуналка', income: false, id: '6' },
//   { name: 'Образование', income: false, id: '7' },
// ];

import s from './ButtonAddTransaction.module.css';
import { getCategory } from '../../services/walletAPI';

function ButtonAddTransaction({ onClick }) {
  const onClickBtn = e => {
    // console.log('Get request за категориями дохода');

    getCategory()
      .then(response => console.log(response))
      .catch(error => console.log(error));

    onClick(true);
  };
  return (
    <button type="button" className={s.button} onClick={onClickBtn}></button>
  );
}

export default ButtonAddTransaction;

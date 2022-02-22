import s from './ButtonAddTransaction.module.css';
import { getCategory } from '../../services/walletAPI';
import { ReactComponent as Plus } from '../../img/icons/plus.svg';

function ButtonAddTransaction({ onClick }) {
  const onClickBtn = e => {
    // console.log('Get request за категориями дохода');

    getCategory()
      .then(response => console.log(response))
      .catch(error => console.log(error));

    onClick(true);
  };
  return (
    <button type="button" className={s.button} onClick={onClickBtn}>
      <Plus className={s.iconPlus} />
    </button>
  );
}

export default ButtonAddTransaction;

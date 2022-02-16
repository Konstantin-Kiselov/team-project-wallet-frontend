import s from './ButtonAddTransaction.module.css';
// import GreenCircle from "../GreenCircle";

function ButtonAddTransaction({ onClick }) {
  const onClickBtn = e => {
    console.log('Get request за категориями дохода');
    onClick(true);
  };
  return (
    <button type="button" className={s.button} onClick={onClickBtn}>
      {/* <GreenCircle /> */}
    </button>
  );
}

export default ButtonAddTransaction;

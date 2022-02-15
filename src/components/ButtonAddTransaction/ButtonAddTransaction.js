import s from "./ButtonAddTransaction.module.css";
// import GreenCircle from "../GreenCircle";

function ButtonAddTransaction({ onClick }) {
  return (
    <button type="button" className={s.button} onClick={onClick}>
      {/* <GreenCircle /> */}
    </button>
  );
}

export default ButtonAddTransaction;

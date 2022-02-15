import s from './Button.module.css';
// import GreenCircle from "../GreenCircle";

export default function Button({ title, styleButton, type, onClick }) {
  return (
    <button
      type={type}
      className={styleButton ? s.buttonAdd : s.buttonCancel}
      // className={`${s.button} ${className}`}
      onClick={onClick}
    >
      {title}
      {/* <span className={s.title}>{title}</span> */}
    </button>
  );
}

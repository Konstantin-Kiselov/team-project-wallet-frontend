import s from './ModalContainer.module.css';

export default function ModalContainer({ active, title, children }) {
  return (
    <div className={s.modalContainer}>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  );
}

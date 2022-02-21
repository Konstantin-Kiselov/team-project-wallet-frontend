import s from './ModalLogoutContainer.module.css';

export default function ModalLogoutContainer({ title, children }) {
  return (
    <div className={s.modalContainer}>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  );
}

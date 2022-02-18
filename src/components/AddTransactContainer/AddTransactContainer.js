import s from './AddTransactContainer.module.css';

export default function AddTransactContainer({ title, children }) {
  return (
    <div className={s.container}>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  );
}

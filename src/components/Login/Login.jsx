import s from './Login.module.css';

export default function Login({ children }) {
  return <section className={s.sectionLogin}>{children}</section>;
}

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Link } from 'react-router-dom';
import s from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <div className={s.logo}>Wallet</div>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="on">
        <label className={s.label}>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="username"
            placeholder="E-mail"
          />
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            autoComplete="current-password"
            onChange={handleChange}
            placeholder="Пароль"
          />
        </label>
        <button className={s.button} type="submit">
          ВХОД
        </button>
        <Link to="/register">РЕГИСТРАЦИЯ</Link>
      </form>
    </div>
  );
}

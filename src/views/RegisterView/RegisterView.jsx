import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import TextField from '@mui/material/TextField';

import s from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          sx={{ mb: '40px' }}
          id="standard-basic"
          label="E-mail"
          variant="standard"
        />
        <TextField
          sx={{ mb: '40px' }}
          id="standard-basic"
          label="Пароль"
          variant="standard"
        />
        <TextField
          sx={{ mb: '40px' }}
          id="standard-basic"
          label="Подтвердите пароль"
          variant="standard"
        />
        <TextField id="standard-basic" label="Ваше имя" variant="standard" />
        {/*<label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          e-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className="button" type="submit">
          Sign up
        </button>*/}
      </form>
    </div>
  );
}

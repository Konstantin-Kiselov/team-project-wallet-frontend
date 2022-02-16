import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import { Box, TextField } from '@mui/material';

import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LockIcon from '@mui/icons-material/Lock';

import s from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            mb: '40px',
          }}
        >
          <TextField
            className={s.TextField}
            id="input-with-sx"
            label="E-mail"
            type="email"
            variant="standard"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <LocalPostOfficeIcon
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
              ),
            }}
            placeholder="E-mail"
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField
            className={s.TextField}
            type="password"
            id="input-with-sx"
            label="Пароль"
            variant="standard"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <LockIcon sx={{ color: 'action.active', mr: 1 }} />
              ),
            }}
            placeholder="Пароль"
          />
        </Box>

        {/*<label className={s.label}>
          e-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className="button" type="submit">
          Login
        </button>*/}
      </form>
    </div>
  );
}

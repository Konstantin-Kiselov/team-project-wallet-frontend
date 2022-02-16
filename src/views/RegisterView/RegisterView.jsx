import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import { Box, TextField } from '@mui/material';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LockIcon from '@mui/icons-material/Lock';

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
            sx={{ left: '-30px' }}
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

        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: '40px' }}>
          <TextField
            className={s.TextField}
            type="password"
            id="input-with-sx"
            label="Пароль"
            variant="standard"
            sx={{ left: '-30px' }}
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              ),
            }}
            placeholder="Пароль"
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: '40px' }}>
          <TextField
            className={s.TextField}
            type="password"
            id="input-with-sx"
            label="Подтвердите пароль"
            variant="standard"
            sx={{ left: '-30px' }}
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              ),
            }}
            placeholder="Подтвердите пароль"
          />
        </Box>

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
            label="Ваше имя"
            type="text"
            variant="standard"
            sx={{ left: '-30px' }}
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <LocalPostOfficeIcon
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
              ),
            }}
            placeholder="Ваше имя"
          />
        </Box>

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

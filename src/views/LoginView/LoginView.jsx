import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import { NavLink } from 'react-router-dom';

import { Box, TextField } from '@mui/material';

import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LockIcon from '@mui/icons-material/Lock';

import s from './LoginView.module.css';

import walletIcon from '../../img/log&reg/wallet.svg';
import loginFrame from '../../img/log&reg/login/frame-log.png';
import violetEllipse from '../../img/log&reg/ellipse_violet.svg';
import pinkEllipse from '../../img/log&reg/ellipse_pink.svg';

const setActiveClass = ({ isActive }) => (isActive ? 'active-link' : 'link');

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
    <div className={s.commonContainer}>
      <div className={s.leftSide}>
        <img alt="login frame" src={loginFrame} className={s.frameLog} />
        <img
          alt="violet ellipse"
          src={violetEllipse}
          className={s.violetEllipse}
        />
        <h1 className={s.titleLeftSide}>Finance App</h1>
      </div>

      <div className={s.rightSide}>
        <img alt="pink ellipse" src={pinkEllipse} className={s.pinkEllipse} />
        <div className={s.formContainer}>
          <div className={s.titleRightSideContainer}>
            <img src={walletIcon} alt="wallet icon" />
            <h2 className={s.titleRightSide}>Wallet</h2>
          </div>

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

            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: '40px' }}>
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

            <NavLink
              onClick={''}
              to="/login"
              className={setActiveClass}
              data-name={'login'}
              id="login"
              style={({ isActive }) => ({
                marginBottom: isActive ? '20px' : '0px',
              })}
            >
              Вход
            </NavLink>
            <NavLink
              onClick={''}
              to="/register"
              className={setActiveClass}
              data-name={'register'}
              id="register"
              style={({ isActive }) => ({
                marginTop: isActive ? '20px' : '0px',
                marginBottom: '0px',
              })}
            >
              Регистрация
            </NavLink>

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
      </div>
    </div>
  );
}

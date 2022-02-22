import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth';

import { NavLink } from 'react-router-dom';

import { Formik } from 'formik';
import registerSchema from '../../../validationSchemas/registerSchema.js';

import { Box, TextField, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import PasswordStrengthMeter from '../../Registration/PasswordStrengthMeter/PasswordStrengthMeter';

import s from './RegistrationForm.module.css';

import { motion } from 'framer-motion';

const setActiveClass = ({ isActive }) => (isActive ? 'active-link' : 'link');

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [passwordValues, setPasswordValues] = useState({
    showPassword: false,
    password: '',
  });

  const handleChangePassword = prop => event => {
    setPasswordValues({ ...passwordValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPasswordValues({
      ...passwordValues,
      showPassword: !passwordValues.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = ({ name, email, password }) => {
    dispatch(authOperations.register({ name, email, password }));
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
      }}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
      className={s.form}
      autoComplete="off"
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <>
          {touched.email && errors.email && (
            <p className={s.error}>{errors.email}</p>
          )}
          <motion.Box
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0, type: 'tween' }}
            style={{ marginBottom: '40px', width: '100%' }}
            sx={{
              display: 'flex',
              alignItems: 'flex-end',

              width: '100%',
            }}
          >
            <TextField
              className={s.TextField}
              id="input-with-sx"
              //label="E-mail"
              type="email"
              variant="standard"
              fullWidth
              required
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              sx={{
                mb: '40px',
              }}
              InputProps={{
                style: {
                  color: '#BDBDBD',
                  fontFamily: 'Circe',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '27px',
                },
                startAdornment: (
                  <LocalPostOfficeIcon
                    sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                  />
                ),
              }}
              placeholder="E-mail"
            />
          </motion.Box>
          {touched.password && errors.password && (
            <p className={s.error}>{errors.password}</p>
          )}
          <motion.Box
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.15, type: 'tween' }}
            style={{ width: '100%' }}
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              mb: '40px',
              width: '100%',
            }}
          >
            <TextField
              className={s.TextField}
              type={passwordValues.showPassword ? 'text' : 'password'}
              value={values.password}
              id="input-with-sx"
              //label="Пароль"
              variant="standard"
              fullWidth
              required
              name="password"
              onChange={e => {
                setPassword(e.target.value);
                handleChange(e);
                handleChangePassword('password');
              }}
              onBlur={handleBlur}
              InputProps={{
                style: {
                  color: '#BDBDBD',
                  fontFamily: 'Circe',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '27px',
                },
                startAdornment: (
                  <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                ),

                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {passwordValues.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder="Пароль"
            />
          </motion.Box>

          <PasswordStrengthMeter password={password} />

          {touched.confirmPassword && errors.confirmPassword && (
            <p className={s.error}>{errors.confirmPassword}</p>
          )}
          <motion.Box
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, type: 'tween' }}
            style={{ marginBottom: '40px', width: '100%' }}
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              mb: '40px',
              width: '100%',
            }}
          >
            <TextField
              className={s.TextField}
              type="password"
              id="input-with-sx"
              //label="Подтвердите пароль"
              variant="standard"
              fullWidth
              required
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              sx={{
                mb: '40px',
              }}
              InputProps={{
                style: {
                  color: '#BDBDBD',
                  fontFamily: 'Circe',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '27px',
                },
                startAdornment: (
                  <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                ),
              }}
              placeholder="Подтвердите пароль"
            />
          </motion.Box>
          {touched.name && errors.name && (
            <p className={s.error}>{errors.name}</p>
          )}
          <motion.Box
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.35, type: 'tween' }}
            style={{ marginBottom: '40px', width: '100%' }}
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              mb: '40px',
              width: '100%',
            }}
          >
            <TextField
              className={s.TextField}
              id="input-with-sx"
              //label="Ваше имя"
              type="text"
              variant="standard"
              fullWidth
              required
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              sx={{
                mb: '50px',
              }}
              InputProps={{
                style: {
                  color: '#BDBDBD',
                  fontFamily: 'Circe',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '27px',
                },
                startAdornment: (
                  <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                ),
              }}
              placeholder="Ваше имя"
            />
          </motion.Box>

          <NavLink
            disabled={!isValid && !dirty}
            onClick={''}
            type={`submit`}
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
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type={`submit`}
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
        </>
      )}
    </Formik>
  );
}

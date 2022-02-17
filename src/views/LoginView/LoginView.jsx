import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import loginSchema from '../../validationSchemas/loginSchema';

import { Box, TextField, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LockIcon from '@mui/icons-material/Lock';
import { Formik } from 'formik';

import s from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = ({ email, password }) => {
    // e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    // setEmail('');
    // setPassword('');
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
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
            <>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  // mb: '40px',
                }}
              >
                <AccountCircle
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
                <TextField
                  className={s.TextField}
                  id="input-with-sx"
                  label="E-mail"
                  variant="standard"
                  sx={{ left: '-30px' }}
                  fullWidth
                  name="email"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </Box>
            </>
            {touched.email && errors.email && (
              <p className={s.error}>{errors.email}</p>
            )}
            <>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
                <TextField
                  className={s.TextField}
                  id="input-with-sx"
                  label="Пароль"
                  variant="standard"
                  sx={{ left: '-30px' }}
                  fullWidth
                  required
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </Box>
              {touched.password && errors.password && (
                <p className={s.error}>{errors.password}</p>
              )}
            </>
            {/* <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={`submit`}
            >
              Login
            </button> */}
          </>
        )}
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
        </label>*/}
      </Formik>
    </div>
  );
}

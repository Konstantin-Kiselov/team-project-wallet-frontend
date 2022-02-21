// import { useState } from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Box, TextField, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import loginSchema from '../../validationSchemas/loginSchema';

import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import s from './LoginView.module.css';

import walletIcon from '../../img/log&reg/wallet.svg';
import LogFrame from '../../components/LogFrame/LogFrame';
import violetEllipse from '../../img/log&reg/ellipse_violet.svg';
import pinkEllipse from '../../img/log&reg/ellipse_pink.svg';

import Container from '../../components/Container/Container';
import SectionAuthNav from '../../components/SectionAuthNav';
import SectionLogin from '../../components/Login/Login';

const setActiveClass = ({ isActive }) => (isActive ? 'active-link' : 'link');

export default function LoginView() {
  const dispatch = useDispatch();

  const [passwordValues, setPasswordValues] = useState({
    showPassword: false,
    password: '',
  });
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

  const handleSubmit = ({ email, password }) => {
    // e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    // setEmail('');
    // setPassword('');
  };

  return (
    <SectionLogin>
      <Container>
        <div className={s.commonContainer}>
          <div className={s.leftSide}>
            <LogFrame />
            {/* <img alt="login frame" src={loginFrame} className={s.frameLog} />
            <img
              alt="violet ellipse"
              src={violetEllipse}
              className={s.violetEllipse}
            /> */}

            <h1 className={s.titleLeftSide}>Finance App</h1>
          </div>

          <div className={s.rightSide}>
            <img
              alt="pink ellipse"
              src={pinkEllipse}
              className={s.pinkEllipse}
            />
            <div className={s.formContainer}>
              <div className={s.titleRightSideContainer}>
                <img src={walletIcon} alt="wallet icon" />
                <h2 className={s.titleRightSide}>Wallet</h2>
              </div>

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
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        mb: '20px',
                        width: '100%',
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
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
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
                    </Box>
                    {touched.email && errors.email && (
                      <p className={s.error}>{errors.email}</p>
                    )}

                    <Box
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
                        id="input-with-sx"
                        label="Пароль"
                        variant="standard"
                        fullWidth
                        required
                        name="password"
                        onChange={e => {
                          handleChange(e);
                          handleChangePassword('password');
                        }}
                        onBlur={handleBlur}
                        value={values.password}
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
                            <LockIcon sx={{ color: 'action.active', mr: 1 }} />
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
                    </Box>

                    {touched.password && errors.password && (
                      <p className={s.error}>{errors.password}</p>
                    )}

                    <NavLink
                      disabled={!isValid && !dirty}
                      onClick={handleSubmit}
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
        </label>

        <button className="button" type="submit">
          Login
        </button>*/}
              </Formik>
            </div>
          </div>
        </div>
      </Container>
    </SectionLogin>
  );
}

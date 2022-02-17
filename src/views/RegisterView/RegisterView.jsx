// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import registerSchema from '../../validationSchemas/registerSchema';

import { Formik } from 'formik';
// import { TextField, Box } from '@mui/material/TextField';
import { Box, TextField } from '@mui/material';

import s from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       return setName(value);
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = ({ name, email, password }) => {
    // e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <div>
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
            <Box>
              <TextField
                // sx={{ mb: '40px' }}
                fullWidth
                id="standard-basic"
                label="E-mail"
                variant="standard"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <p className={s.error}>{errors.email}</p>
              )}
            </Box>

            <Box>
              <TextField
                // sx={{ mb: '40px' }}
                id="standard-basic"
                label="Пароль"
                variant="standard"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <p className={s.error}>{errors.password}</p>
              )}
            </Box>

            <Box>
              <TextField
                // sx={{ mb: '40px' }}
                id="standard-basic"
                label="Подтвердите пароль"
                variant="standard"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className={s.error}>{errors.confirmPassword}</p>
              )}
            </Box>
            <Box>
              <TextField
                id="standard-basic"
                label="Ваше имя"
                variant="standard"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && (
                <p className={s.error}>{errors.name}</p>
              )}
            </Box>
          </>
        )}

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
      </Formik>
    </div>
  );
}

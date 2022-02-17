import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not valid, please try again')
    .required('Email address is required'),
  password: yup
    .string()
    .min(6, 'The password must be 6 or more characters.')
    .max(12, 'Password must be no more than 12 characters')
    .required('Password is required'),
});

export default loginSchema;

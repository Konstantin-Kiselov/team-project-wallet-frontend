import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, 'Must be 1 characters or more')
    .max(12, 'Must be 12 characters or less'),

  email: yup
    .string()
    .email('Email is invalid,please try again')
    .required('Email address is required'),
  password: yup
    .string()
    .min(6, 'Password must be 6 characters or more ')
    .max(12, 'Password must be 12 characters or less')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords must match')
    .required('Password confirmation is required'),
});

export default registerSchema;

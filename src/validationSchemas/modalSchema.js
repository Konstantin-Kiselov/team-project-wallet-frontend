import * as yup from 'yup';

const modalSchema = yup.object().shape({
  sum: yup
    .string()
    // .matches(/(UAH|EUR|USD|RUB)/)
    .required('Entering the amount is required'),
  data: yup.date().required('Entering the date is required'),
  select: yup.string().required('Transaction selection is required'),
  coment: yup.string(),
});

export default modalSchema;

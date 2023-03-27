import * as yup from 'yup';

export const profileFormSchema = yup
  .object({
    firstName: yup
      .string()
      .max(40, 'most40')
      .required('required')
      .matches(/^[a-zA-Z ]*$/, 'letters'),
    lastName: yup
      .string()
      .required('required')
      .max(40, 'most40')
      .matches(/^[a-zA-Z ]*$/, 'letters'),
    age: yup.number().positive().integer().required(),
    country: yup.string(),
    city: yup.string(),
    avatar: yup.string(),
    currency: yup.string(),
  })
  .required();

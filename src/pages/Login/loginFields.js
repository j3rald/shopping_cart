import FormikInput from '../../components/Input/FormikInput';

export const loginFields = [
  {
    component: FormikInput,
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    autoComplete: 'email',
    placeholder: 'Email',
    className: 'rounded-t-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: FormikInput,
    name: 'password',
    id: 'password',
    type: 'password',
    'data-value': '',
    autoComplete: 'current-password',
    placeholder: 'Password',
    className: 'rounded-b-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const loginInitialValues =
  loginFields.reduce(
    (p, c) => ({
      ...p,
      [c.name]: c['data-value'],
    }),
    {},
  );

import FormikInput from '../../components/Input/FormikInput';
import FormikSelect from '../../components/select/FormikSelect';
// import Radio from '../../components/Radio';
import Checkbox from '../../components/Checkbox';

export const registerFields = [
  {
    component: FormikInput,
    name: 'name',
    id: 'name',
    'data-value': '',
    autoComplete: 'name',
    placeholder: 'Name',
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
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    autoComplete: 'email',
    placeholder: 'Email',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: FormikSelect,
    name: 'gender',
    id: 'gender',
    type: 'text',
    'data-value': '',
    autoComplete: 'gender',
    placeholder: 'Gender',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
    options: [
      {
        value: 'male',
        text: 'Male',
      },
      {
        value: 'femalte',
        text: 'Female',
      },
    ],
  },
  // {
  //   component: Radio,
  //   label: 'Gender',
  //   name: 'gender1',
  //   'data-value': '',
  //   options: [
  //     {
  //       id: 'male',
  //       text: 'Male',
  //     },
  //     {
  //       id: 'female',
  //       text: 'Female',
  //     },
  //     {
  //       id: 'other',
  //       text: 'Other',
  //     },
  //   ],
  // },
  {
    component: Checkbox,
    label: 'hobbies',
    name: 'hobbies',
    'data-value': [],
    options: [
      {
        id: 'basketball',
        text: 'Basketball',
      },
      {
        id: 'football',
        text: 'Football',
      },
      {
        id: 'volleyball',
        text: 'Volleyball',
      },
      {
        id: 'other',
        text: 'Other',
      },
    ],
  },
  {
    component: FormikInput,
    name: 'password',
    id: 'password',
    type: 'password',
    'data-value': '',
    autoComplete: 'new-password',
    placeholder: 'Password',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: FormikInput,
    name: 'cpassword',
    id: 'cpassword',
    type: 'password',
    'data-value': '',
    autoComplete: 'new-password',
    placeholder: 'Confirm Password',
    className: 'rounded-b-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const registerInitialValues =
  registerFields.reduce(
    (p, c) => ({
      ...p,
      [c.name]: c['data-value'],
    }),
    {},
  );

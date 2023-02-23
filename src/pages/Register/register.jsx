import React from 'react';
import PropTypes from 'prop-types';
import {
  registerFields,
  registerInitialValues,
} from './registerFields';
import CustomForm from '../../components/CustomForm';
// import { useAuthContext } from '../../context/authContext';
import { registerAction } from '../../actions/authActions';

// const wait = time =>
//   new Promise(resolve => {
//     setTimeout(resolve, time);
//   });

function Register({ register }) {
  // const { register } = useAuthContext();

  return (
    <CustomForm
      initialValues={registerInitialValues}
      onSubmit={register}
      fields={registerFields}
      btnText="Register"
    />
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;

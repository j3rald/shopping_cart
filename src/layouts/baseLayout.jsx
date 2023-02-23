import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Errors from '../components/Errors';

export default function baseLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const JSONToken = JSON.parse(token);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: JSONToken,
      });
    }
  }, [dispatch]);

  return (
    <>
      <Outlet />
      <Errors />
    </>
  );
}

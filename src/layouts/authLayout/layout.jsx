import React from 'react';
import {
  Link,
  Navigate,
  Outlet,
} from 'react-router-dom';
import PropTypes from 'prop-types';

function AuthLayout({ user }) {
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              to="register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </Link>
          </p>
        </div>{' '}
        <Outlet />
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  user: PropTypes.shape({}),
};

AuthLayout.defaultProps = {
  user: null,
};

export default AuthLayout;

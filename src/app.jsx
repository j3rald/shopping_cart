import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ErrorWrapper from './ErrorWrapper';
import router from './router';

export default function app() {
  return (
    // <Test />
    <ErrorWrapper>
      <RouterProvider router={router} />
    </ErrorWrapper>
  );
}

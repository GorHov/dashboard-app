import React from 'react';
import { ErrorMessage } from './ErrorMessageStyle';

const ErrorComponent = ({ message }) => {
  return message ? <ErrorMessage>{message}</ErrorMessage> : null;
};

export default ErrorComponent;
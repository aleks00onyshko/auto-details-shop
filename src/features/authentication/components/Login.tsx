import React from 'react';
import {useNavigate, useSubmit} from 'react-router-dom';

import {AuthForm} from './AuthForm.tsx';
import {UserCredentials} from '../types/user-credentials.ts';

export const Login = () => {
  const navigate = useNavigate();
  const submit = useSubmit();

  const handleSubmit = (e: React.SubmitEvent, credentials: UserCredentials) => {
    e.preventDefault();

    submit(
      {...credentials},
      {
        method: 'POST',
        encType: 'application/json',
        action: '/login',
      }
    );
  };

  const loginValidationSchema = {
    username: (val: string) => ({
      valid: val.length >= 6,
      errorMessage: 'Please enter a valid username',
    }),
    password: (val: string) => ({
      valid: val.length >= 6,
      errorMessage: 'Password must be at least 6 characters',
    }),
  };

  return (
    <AuthForm
      title="Login"
      onSubmit={handleSubmit}
      buttonText="Login"
      redirectQuestion="Not Registered yet?"
      redirectLinkText="Register here."
      onRedirect={() => navigate('/register')}
      validationSchema={loginValidationSchema}
    />
  );
};

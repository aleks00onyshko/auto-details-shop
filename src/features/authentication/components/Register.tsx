import React from 'react';
import {useNavigate, useSubmit} from 'react-router-dom';

import {AuthForm} from './AuthForm.tsx';
import {UserCredentials} from '../types/user-credentials.ts';

export const Register = () => {
  const navigate = useNavigate();
  const submit = useSubmit();

  const handleSubmit = (e: React.SubmitEvent, credentials: UserCredentials) => {
    e.preventDefault();

    submit(
      {...credentials},
      {
        method: 'POST',
        encType: 'application/json',
        action: '/register',
      }
    );
  };

  const registerValidationSchema = {
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
      title="Register"
      onSubmit={handleSubmit}
      buttonText="Register"
      redirectQuestion="Already logged in?"
      redirectLinkText="Login here."
      onRedirect={() => navigate('/login')}
      validationSchema={registerValidationSchema}
    />
  );
};

import React, { useMemo, useState } from 'react';

import { FormField } from '@shared/components';

import { UserCredentials } from '../models/user-credentials.ts';

interface AuthFormProps {
  title: string;
  onSubmit: (e: React.SubmitEvent, credentials: UserCredentials) => void;
  buttonText: string;
  redirectQuestion: string;
  redirectLinkText: string;
  onRedirect: () => void;
  validationSchema: Record<string, (value: string) => { errorMessage: string; valid: boolean }>;
}

export const AuthForm = ({
  title,
  buttonText,
  redirectQuestion,
  redirectLinkText,
  onRedirect,
  onSubmit,
  validationSchema,
}: AuthFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({ username: '', password: '' });
  const [errorsMap, setErrorsMap] = useState<Record<string, string>>({});

  const formValid = useMemo(() => {
    const hasErrors = Object.keys(errorsMap).length > 0;
    const missingData = Object.values(formData).some((el) => el.trim() === '');

    return !hasErrors && !missingData;
  }, [errorsMap, formData]);

  const validateField = (name: string, value: string) => {
    const validationResult = validationSchema?.[name]?.(value);

    if (!validationResult) return;

    setErrorsMap((prevErrors) => {
      if (validationResult.valid) {
        const { [name]: _, ...rest } = prevErrors;

        return rest;
      }

      return {
        ...prevErrors,
        [name]: validationResult.errorMessage,
      };
    });
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (errorsMap[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!formValid) return;

    onSubmit(e, { username: formData.username, password: formData.password });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-slate-100 transition-all hover:shadow-slate-200">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">{title}</h1>
          <p className="text-slate-500 font-medium">Join auto parts catalogue network</p>
        </div>

        <form className="space-y-5" onSubmit={(e: React.SubmitEvent) => handleSubmit(e)}>
          <FormField
            label="Username"
            placeholder="Enter your username..."
            name="username"
            value={formData.username}
            error={errorsMap.username}
            onChange={handleFieldChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
          />

          <FormField
            label="Password"
            type="password"
            placeholder="••••••••"
            name="password"
            value={formData.password}
            onChange={handleFieldChange}
            error={errorsMap.password}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
              validateField(e.target.name, e.target.value)
            }
          />

          <button
            type="submit"
            disabled={!formValid}
            className={`w-full text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-slate-200 transition-all active:scale-[0.97] mt-4
                        ${
                          formValid
                            ? 'bg-slate-900 hover:bg-blue-600 text-white active:scale-[0.97] shadow-slate-200'
                            : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                        }`}
          >
            {buttonText}
          </button>
        </form>

        <div className="mt-10 pt-6 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-500 font-medium">
            {redirectQuestion}
            <button
              className="ml-2 text-blue-600 font-bold hover:text-blue-700 cursor-pointer"
              onClick={onRedirect}
            >
              {redirectLinkText}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

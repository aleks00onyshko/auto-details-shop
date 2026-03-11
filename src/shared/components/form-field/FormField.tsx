import React from "react";

interface FormFieldProps {
    label: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    type?: string;
}

export const FormField = ({
                              label,
                              placeholder,
                              name,
                              type = "text",
                              value,
                              error,
                              onChange,
                              onBlur
                          }: FormFieldProps) => {
    return (
        <div className="space-y-1">
            <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`w-full px-5 py-4 rounded-2xl border-2 outline-none transition-all placeholder:text-slate-400 ${
                    error
                        ? 'border-red-500 bg-red-50 focus:ring-4 focus:ring-red-500/10'
                        : 'border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                }`}
                placeholder={placeholder}
            />
            {error && (
                <p className="text-red-500 text-xs font-bold mt-1.5 ml-1 animate-in fade-in slide-in-from-top-1">
                    {error}
                </p>
            )}
        </div>
    );
}
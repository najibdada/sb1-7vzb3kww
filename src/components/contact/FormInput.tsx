import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FormInput({ label, ...props }: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] 
          placeholder:text-gray-400 focus:ring-2 focus:ring-[#00B5E2] 
          focus:border-transparent transition-shadow outline-none"
        {...props}
      />
    </div>
  );
}
import { useField } from 'formik';
import React from 'react';

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id}>{label}</label>
      <input
        className="border border-gray-300 p-2 rounded-sm focus:outline-none"
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;

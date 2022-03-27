import { useField } from 'formik';
import React from 'react';
import Select from 'react-select';

const SelectField = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  const selectedOption = options.find((option) => option.value === field.value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: field.name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <div className="flex flex-col gap-2 mb-6">
      <label htmlFor={props.id}>{label}</label>
      <Select
        {...props}
        {...field}
        options={options}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
      />
      {meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

// function SelectField({ label, ...props }) {
//   const [field, meta] = useField(props);
//   return <div>SelectField</div>;
//   const selectedOption = options.find((option) => option.value === value);

//   const handleSelectedOptionChange = (selectedOption) => {
//     const selectedValue = selectedOption
//       ? selectedOption.value
//       : selectedOption;

//     const changeEvent = {
//       target: {
//         name: name,
//         value: selectedValue,
//       },
//     };
//     field.onChange(changeEvent);
//   };

//   return (
//     <div className="flex flex-col gap-2 mb-4">
//       {label && <label htmlFor={name}>{label}</label>}

//       <Select
//         id={name}
//         {...field}
//         value={selectedOption}
//         onChange={handleSelectedOptionChange}
//         placeholder={placeholder}
//         isDisabled={disabled}
//         options={options}
//       />
//     </div>
//   );
// }

export default SelectField;

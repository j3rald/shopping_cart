import React from 'react';
import clsx from 'clsx';

const FormikSelect = ({
  field,
  form: { touched, errors },
  meta,
  className,
  options,
  ...props
}) => {
  return (
    <div className="-space-y-px rounded-md shadow-sm">
      <div>
        <label
          htmlFor={props.id}
          className="sr-only text-slate-500"
        >
          {props.placeholder}
        </label>
        <select
          id={props.id}
          aria-selected
          className={clsx(
            'custom-menu relative block w-full appearance-none border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
            {
              [className || '']: !!className,
            },
          )}
          {...field}
          {...props}
        >
          <option>{props.placeholder}</option>
          {options.map(item => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.text}
            </option>
          ))}
          {/* <option value="male">Male</option>
          <option value="female">Female</option> */}
        </select>
        {touched[field.name] &&
          errors[field.name] && (
            <p className="text-red-400 text-sm">
              {errors[field.name]}
            </p>
          )}
      </div>
    </div>
  );
};

export default FormikSelect;

import React from 'react';

function Checkbox({
  field: { name, value, onChange }, // { name, value, onChange, onBlur }
  form: {
    touched,
    errors,
    setFieldValue,
    setFieldTouched,
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  label,
  className,
  options,
  ...props
}) {
  return (
    <fieldset>
      <legend>{label}</legend>

      {options.map(x => (
        <div key={x.id}>
          <input
            type="checkbox"
            name={name}
            id={x.id}
            checked={value.some(
              val => val === x.id,
            )}
            onChange={() => {
              const hasValue = value.findIndex(
                val => val === x.id,
              );
              if (hasValue === -1) {
                setFieldValue(name, [
                  ...value,
                  x.id,
                ]);
              } else {
                setFieldValue(name, [
                  ...value.slice(0, index),
                  ...value.slice(index + 1),
                ]);
              }
              //   setFieldValue(name, x.id);
              //   setFieldTouched(name, true);
            }}
          />
          <label htmlFor={x.id}>{x.text}</label>
        </div>
      ))}
      {touched[name] && errors[name] && (
        <p className="text-red-500 text-sm font-medium">
          {errors[name]}
        </p>
      )}
    </fieldset>
  );
}

export default Checkbox;

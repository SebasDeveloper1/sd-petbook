/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useId } from 'react';
import { Typography } from 'components/indexComponents';

export function TextField({
  labelValue = '',
  type = 'text',
  rows = 3,
  min = 0,
  name = '',
  placeholder = '',
  defaultValue = '',
  status = 'normal',
  exceptionMessage = '',
  handleOnChange = () => {},
  handleOnBlur = () => {},
} = {}) {
  const textFieldId = useId();

  const statusTypes = {
    normal: 'input-form p-2',
    warning: 'input-form-warning',
    error: 'input-form-error',
  };

  return (
    <div>
      {labelValue ? (
        <label
          htmlFor={textFieldId}
          className="mb-1 block text-sm font-medium leading-6 text-slate-700"
        >
          {labelValue}
        </label>
      ) : null}

      {type === 'textarea' ? (
        <textarea
          id={textFieldId}
          name={name}
          rows={rows}
          className={
            status
              ? `${statusTypes?.normal} ${statusTypes[status]}`
              : statusTypes?.normal
          }
          placeholder={placeholder}
          value={defaultValue}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
      ) : (
        <input
          id={textFieldId}
          type={type}
          name={name}
          min={min}
          className={
            status
              ? ` ${statusTypes?.normal} ${statusTypes[status]}`
              : statusTypes?.normal
          }
          placeholder={placeholder}
          value={defaultValue}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
      )}

      {exceptionMessage ? (
        <Typography
          variant="span_xs"
          styles={`block px-3 py-2 my-2 rounded-lg font-medium ${
            status === 'warning'
              ? 'bg-yellow-50 text-yellow-600'
              : 'bg-red-50 text-red-500'
          }`}
          value={exceptionMessage}
        />
      ) : null}
    </div>
  );
}

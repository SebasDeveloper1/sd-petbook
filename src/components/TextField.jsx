/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useId } from 'react';
import { Typography } from 'components/indexComponents';

export function TextField({
  labelValue = '',
  type = 'text',
  rows = 3,
  name = '',
  placeholder = '',
  defaultValue = '',
  status = 'normal',
  exceptionMessage = '',
  handlerOnChange = null,
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
          defaultValue={defaultValue}
        />
      ) : (
        <input
          id={textFieldId}
          type={type}
          name={name}
          className={
            status
              ? ` ${statusTypes?.normal} ${statusTypes[status]}`
              : statusTypes?.normal
          }
          placeholder={placeholder}
          value={defaultValue}
          onChange={handlerOnChange}
        />
      )}

      {exceptionMessage ? (
        <Typography
          variant="span_base"
          styles={`block p-1 my-4 rounded-md font-medium ${
            status === 'warning'
              ? 'bg-yellow-100 text-yellow-900'
              : 'bg-red-100 text-red-600'
          }`}
          value={`• ${exceptionMessage}`}
        />
      ) : null}
    </div>
  );
}

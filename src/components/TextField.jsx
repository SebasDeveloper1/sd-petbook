/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useId } from 'react';
import { Typography } from 'components/indexComponents';

export function TextField({
  labelValue = '',
  placeholder = '',
  status = 'normal',
  exceptionMessage = '',
  onChange = null,
} = {}) {
  const textFieldId = useId();

  const statusTypes = {
    normal:
      'appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200',
    error:
      'bg-red-100 placeholder:text-red-600 focus:ring-2 focus:ring-red-600 ring-red-600',
    warning:
      'bg-yellow-50 placeholder:text-yellow-600 focus:ring-2 focus:ring-yellow-500 ring-yellow-500',
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
      <input
        id={textFieldId}
        type="text"
        className={
          status
            ? ` ${statusTypes?.normal} ${statusTypes[status]}`
            : statusTypes?.normal
        }
        placeholder={placeholder}
        onChange={onChange}
      />
      {exceptionMessage ? (
        <Typography
          variant="span_base"
          styles={`block p-1 my-4 rounded-md text-center font-medium ${
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

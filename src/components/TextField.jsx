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
      'mt-2 mb-4  appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200',
    error:
      'bg-red-50 placeholder:text-red-400 focus:ring-2 focus:ring-red-500 ring-red-500',
    warning:
      'bg-yellow-50 placeholder:text-yellow-400 focus:ring-2 focus:ring-yellow-500 ring-yellow-500',
  };

  return (
    <div>
      <label
        htmlFor={textFieldId}
        className="block text-md font-semibold leading-6 text-sky-900"
      >
        {labelValue}
      </label>
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
          styles={`p-1 rounded-md text-center font-medium ${
            status === 'warning'
              ? 'bg-yellow-100 text-yellow-900'
              : 'bg-red-100 text-red-900'
          }`}
          value={`• ${exceptionMessage}`}
        />
      ) : null}
    </div>
  );
}

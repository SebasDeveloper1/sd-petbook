import React, { useId } from 'react';
import { Typography } from 'components/indexComponents';

export function TextSelection({
  labelValue = '',
  selectionName = '',
  placeholder = '',
  options = [],
  status = 'normal',
  exceptionMessage = '',
} = {}) {
  const textSelectionId = useId();
  const statusTypes = {
    normal: 'input-form',
    warning: 'input-form-warning',
    error: 'input-form-error',
  };
  return (
    <div>
      {labelValue ? (
        <label htmlFor={textSelectionId} className="label-input-form">
          {labelValue}
        </label>
      ) : null}
      <select
        id={textSelectionId}
        name={selectionName}
        className={
          status
            ? ` ${statusTypes?.normal} ${statusTypes[status]}`
            : statusTypes?.normal
        }
      >
        <option>{placeholder}</option>
        {options.map((option) => (
          <option key={`option-${option}`}>{option}</option>
        ))}
      </select>
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

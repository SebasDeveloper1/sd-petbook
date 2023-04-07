import React, { useId } from 'react';
import { Typography } from 'components/indexComponents';

export function TextSelection({
  labelValue = '',
  name = '',
  placeholder = '',
  options = [],
  defaultValue = '',
  status = 'normal',
  exceptionMessage = '',
  handleOnChange = () => {},
  handleOnBlur = () => {},
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
        name={name}
        className={
          status
            ? ` ${statusTypes?.normal} ${statusTypes[status]}`
            : statusTypes?.normal
        }
        value={defaultValue}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      >
        <option>{placeholder}</option>
        {options.map((option) => (
          <option key={`option-${option}`}>{option}</option>
        ))}
      </select>
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

/* eslint-disable no-nested-ternary */
import React from 'react';
import { TextField, TextSelection } from 'components/indexComponents';

const componentTypes = {
  TEXT_FIELD: 'textField',
  TEXT_SELECTION: 'textSelection',
};
export function TextFieldGenerator({
  textFieldList = [],
  errors = {},
  values = {},
  handleChange = null,
  handleBlur = null,
  touched = null,
  containerClassName = '',
} = {}) {
  return (
    <>
      {textFieldList.map((item) =>
        item.inputComponent === componentTypes.TEXT_FIELD ? (
          <div key={`input_${item.name}`} className={containerClassName}>
            <TextField
              labelValue={item.labelValue}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              status={
                touched[item.name] && errors[item.name] ? 'error' : 'normal'
              }
              exceptionMessage={
                touched[item.name] && errors[item.name]
                  ? errors[item.name]
                  : null
              }
              defaultValue={values[item.name]}
              handleOnChange={handleChange}
              handleOnBlur={handleBlur}
            />
          </div>
        ) : item.inputComponent === componentTypes.TEXT_SELECTION ? (
          <div key={`input_${item.name}`} className={containerClassName}>
            <TextSelection
              labelValue={item.labelValue}
              name={item.name}
              options={item.options}
              status={
                touched[item.name] && errors[item.name] ? 'error' : 'normal'
              }
              exceptionMessage={
                touched[item.name] && errors[item.name]
                  ? errors[item.name]
                  : null
              }
              defaultValue={values[item.name]}
              handleOnChange={handleChange}
              handleOnBlur={handleBlur}
            />
          </div>
        ) : null
      )}
    </>
  );
}

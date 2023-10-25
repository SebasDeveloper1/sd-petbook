/* eslint-disable no-unused-vars */
import React from 'react';
import { TextFieldGenerator } from 'utils/componentsJSX/TextFieldGenerator ';
import { userformInputList } from 'utils/inputList/petformInputList';

export function OwnerDataForm({
  errors = {},
  initialValues = {},
  handleChange = null,
  handleBlur = null,
  touched = null,
} = {}) {
  return (
    <section className=" md:col-span-2">
      <div className="grid grid-cols-6 gap-6">
        <TextFieldGenerator
          textFieldList={userformInputList}
          errors={errors}
          values={initialValues}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          containerClassName="col-span-6 sm:col-span-2"
        />
      </div>
    </section>
  );
}

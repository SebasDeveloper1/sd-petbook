import React from 'react';
import { Typography } from 'components/indexComponents';
import { TextFieldGenerator } from 'containers/indexContainers';
import { userformInputList } from './formInputList';

export function OwnerDataForm({
  errors = {},
  initialValues = {},
  handleChange = null,
  handleBlur = null,
  touched = null,
} = {}) {
  return (
    <section className=" md:col-span-3">
      <div>
        <div className="py-4 md:px-4 md:pt-0">
          <Typography
            variant="h4"
            value="Información del Propietario"
            styles="mb-4 col-span-3 text-2xl font-medium tracking-tight text-slate-900"
          />
          <div className="grid grid-cols-8 gap-6">
            <TextFieldGenerator
              textFieldList={userformInputList}
              errors={errors}
              values={initialValues}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              containerClassName="col-span-8 sm:col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

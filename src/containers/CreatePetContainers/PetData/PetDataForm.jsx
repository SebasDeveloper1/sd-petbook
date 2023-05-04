import React from 'react';
import { Typography, TextField } from 'components/indexComponents';
import { TextFieldGenerator } from 'containers/indexContainers';
import { petformInputList } from '../formInputList';

export function PetDataForm({
  errors = {},
  initialValues = {},
  handleChange = null,
  handleBlur = null,
  touched = null,
} = {}) {
  return (
    <section className=" md:col-span-2">
      <div className="py-4 md:px-4 md:pt-0">
        <Typography
          variant="h4"
          value="Datos del animal"
          styles="mb-4 col-span-3 text-2xl font-medium tracking-tight text-slate-900"
        />
        <div className="grid grid-cols-6 gap-6">
          <TextFieldGenerator
            textFieldList={petformInputList}
            errors={errors}
            values={initialValues}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            containerClassName="col-span-6 sm:col-span-2"
          />
          <div className="col-span-6 md:col-span-3">
            <TextField
              labelValue="Descripción (Opcional)"
              type="textarea"
              name="petDesc"
              rows={4}
              placeholder="Comportamiento, gustos, rasgos particulares, personalidad, etc."
              status={touched?.petDesc && errors?.petDesc ? 'error' : 'normal'}
              exceptionMessage={
                touched?.petDesc && errors?.petDesc ? errors?.petDesc : null
              }
              defaultValue={initialValues?.petDesc}
              handleOnChange={handleChange}
              handleOnBlur={handleBlur}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <TextField
              labelValue="Observaciones adicionales (Opcional)"
              type="textarea"
              name="petObserv"
              rows={4}
              placeholder="Alergias, Cuidados, discapacidades, etc."
              status={
                touched?.petObserv && errors?.petObserv ? 'error' : 'normal'
              }
              exceptionMessage={
                touched?.petObserv && errors?.petObserv
                  ? errors?.petObserv
                  : null
              }
              defaultValue={initialValues?.petObserv}
              handleOnChange={handleChange}
              handleOnBlur={handleBlur}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

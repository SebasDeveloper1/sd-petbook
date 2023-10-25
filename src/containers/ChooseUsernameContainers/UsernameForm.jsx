import React from 'react';
import { Formik, Form } from 'formik';
import { Typography, Button, TextField } from 'components/indexComponents';
import { validateUsername } from 'utils/inputValidation/UserformValidationFunctions';

export function UsernameForm({ handleSubmitForm } = {}) {
  const handelOnSubmit = (values, { resetForm }) => {
    resetForm();
    handleSubmitForm(values.username);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-8 h-fit p-6 rounded-lg max-w-sm bg-white shadow-2xl z-10">
      <div className="flex flex-col justify-center items-center space-y-3 w-full text-center">
        <Typography
          variant="h3"
          styles="font-black sm:text-5xl bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 to-violet-500"
          value="¡Hola!"
        />
        <span className="block text-5xl">👋</span>
        <Typography
          variant="p_base"
          styles="font-medium text-slate-600"
          value="Antes de continuar por favor  selecciona tu nombre de usuario."
        />
      </div>
      <Formik
        initialValues={{ username: '' }}
        validate={validateUsername}
        onSubmit={handelOnSubmit}
      >
        {({ errors, handleBlur, handleChange, touched, values }) => (
          <Form className="grid grid-cols-1 justify-center items-center gap-10 w-full">
            <TextField
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              status={touched.username && errors.username ? 'error' : 'normal'}
              exceptionMessage={
                touched.username && errors.username ? errors.username : null
              }
              defaultValue={values.username}
              handleOnChange={handleChange}
              handleOnBlur={handleBlur}
            />
            <Button
              type="submit"
              variant="contained"
              styles="mx-w-4"
              value="Registrar"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

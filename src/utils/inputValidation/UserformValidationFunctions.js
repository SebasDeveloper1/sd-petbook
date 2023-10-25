import { existsUsername } from 'fbase/dbFunctions';
import {
  regExpUsername,
  regExpNames,
  regExpCcp,
  regExpCell,
  regExpCountry,
  regExpDeparment,
  regExpCity,
} from 'utils/inputValidation/regularExpressionsList';

const messageList = {
  MSM_USERNAME:
    'El usuario tiene que tener entre 4 y 16 caracteres y solo puede contener números, letras minúsculas o guion bajo.',
  MSM_NAMES: 'Los nombres solo pueden contener letras y espacios.',
  MSM_SURNAMES: 'Los apellidos solo pueden contener letras y espacios.',
  MSM_GENDER: 'Debes seleccionar una de las opciones disponibles.',
  MSM_CELL:
    'El número de celular debe tener más de 10 caracteres y solo puede contener números.',
  MSM_CCP:
    'El código tiene que tener entre 1 y 4 caracteres y solo puede contener números y el carácter +.',
  MSM_COUNTRY: 'El nombre del país solo puede contener letras y espacios.',
  MSM_DEPARTMENT:
    'El nombre del departamento solo puede contener letras y espacios.',
  MSM_CITY: 'El nombre de la ciudad solo puede contener letras y espacios.',
};

export const validateUsername = async (values, uid) => {
  const errors = {};
  if (!regExpUsername.test(values?.username)) {
    errors.username =
      'El usuario tiene que tener entre 4 y 16 caracteres y solo puede contener números, letras minúsculas o guion bajo.';
  }
  const exists = await existsUsername({ username: values?.username });
  if (exists && exists !== uid) {
    errors.username =
      'Este nombre de usuario ya está en uso. Por favor, elija otro.';
  }
  return errors;
};

export const validateInput = ({ values, inputName, regularExp, message }) => {
  const errors = {};
  if (!regularExp.test(values?.[inputName])) {
    errors[inputName] = message;
  }
  return errors;
};

export const validateInputOp = ({ values, inputName, message }) => {
  const errors = {};
  if (values?.[inputName] === '') {
    errors[inputName] = message;
  }

  return errors;
};

// eslint-disable-next-line consistent-return
export const validateEmail = (values) => {
  const errors = {};

  const hasAtSign = (str) => str?.includes('@');

  if ((values?.email && !hasAtSign(values?.email)) || values?.email === '') {
    errors.email = 'El correo electrónico debe contener el carácter @.';
  }

  if (
    values?.ownerEmail &&
    !hasAtSign(values?.ownerEmail || values?.ownerEmail === '')
  ) {
    errors.ownerEmail =
      'El correo electrónico del propietario debe contener el carácter @.';
  }

  return errors;
};

export const validateUserDataForm = async ({ values = {}, uid = '' }) => {
  const errors = {
    ...(await validateUsername(values, uid)),
    ...validateInput({
      values,
      inputName: 'names',
      regularExp: regExpNames,
      message: messageList?.MSM_NAMES,
    }),
    ...validateInput({
      values,
      inputName: 'surnames',
      regularExp: regExpNames,
      message: messageList?.MSM_SURNAMES,
    }),
    ...validateInputOp({
      values,
      inputName: 'gender',
      message: messageList?.MSM_GENDER,
    }),
    ...validateInput({
      values,
      inputName: 'ccp',
      regularExp: regExpCcp,
      message: messageList?.MSM_CCP,
    }),
    ...validateInput({
      values,
      inputName: 'cell',
      regularExp: regExpCell,
      message: messageList?.MSM_CELL,
    }),
    ...validateEmail(values),
    ...validateInput({
      values,
      inputName: 'country',
      regularExp: regExpCountry,
      message: messageList?.MSM_COUNTRY,
    }),
    ...validateInput({
      values,
      inputName: 'department',
      regularExp: regExpDeparment,
      message: messageList?.MSM_DEPARTMENT,
    }),
    ...validateInput({
      values,
      inputName: 'city',
      regularExp: regExpCity,
      message: messageList?.MSM_CITY,
    }),
  };

  return errors;
};

export const validateOwnerPetForm = (values) => {
  const errors = {
    ...validateInput({
      values,
      inputName: 'ownerNames',
      regularExp: regExpNames,
      message: messageList?.MSM_NAMES,
    }),
    ...validateInput({
      values,
      inputName: 'ownerSurnames',
      regularExp: regExpNames,
      message: messageList?.MSM_SURNAMES,
    }),
    ...validateInputOp({
      values,
      inputName: 'ownerGender',
      message: messageList?.MSM_GENDER,
    }),
    ...validateInput({
      values,
      inputName: 'ownerCcp',
      regularExp: regExpCcp,
      message: messageList?.MSM_CCP,
    }),
    ...validateInput({
      values,
      inputName: 'ownerCell',
      regularExp: regExpCell,
      message: messageList?.MSM_CELL,
    }),
    ...validateEmail(values),
    ...validateInput({
      values,
      inputName: 'ownerCountry',
      regularExp: regExpCountry,
      message: messageList?.MSM_COUNTRY,
    }),
    ...validateInput({
      values,
      inputName: 'ownerDepartment',
      regularExp: regExpDeparment,
      message: messageList?.MSM_DEPARTMENT,
    }),
    ...validateInput({
      values,
      inputName: 'ownerCity',
      regularExp: regExpCity,
      message: messageList?.MSM_CITY,
    }),
  };
  return errors;
};

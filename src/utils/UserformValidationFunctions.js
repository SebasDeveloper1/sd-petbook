import { existsUsername } from 'fbase/dbFunctions';
import {
  regExpUsername,
  regExpNames,
  regExpCcp,
  regExpCell,
  regExpCountry,
  regExpDeparment,
  regExpCity,
} from 'utils/regularExpressionsList';

export const validateUsername = async (values, uid) => {
  const errors = {};
  if (!regExpUsername.test(values.username)) {
    errors.username =
      'El usuario tiene que tener entre 4 y 16 caracteres y solo puede contener números, letras minúsculas o guion bajo.';
  }
  const exists = await existsUsername({ username: values.username });
  if (exists && exists !== uid) {
    errors.username =
      'Este nombre de usuario ya está en uso. Por favor, elija otro.';
  }
  return errors;
};
export const validateNames = (values) => {
  const errors = {};
  if (!regExpNames.test(values.names)) {
    errors.names = 'Los nombres solo pueden contener letras y espacios.';
  }
  return errors;
};
export const validateSurnames = (values) => {
  const errors = {};
  if (!regExpNames.test(values.surnames)) {
    errors.surnames = 'Los apellidos solo pueden contener letras y espacios.';
  }
  return errors;
};
export const validateGender = (values) => {
  const errors = {};
  if (values.gender === '') {
    errors.gender = 'Debes seleccionar una de las opciones disponibles.';
  }
  return errors;
};
export const validateCcp = (values) => {
  const errors = {};
  if (!regExpCcp.test(values.ccp)) {
    errors.ccp =
      'El código tiene que tener entre 1 y 4 caracteres y solo puede contener números y el carácter +.';
  }
  return errors;
};
export const validateCell = (values) => {
  const errors = {};
  if (!regExpCell.test(values.cell)) {
    errors.cell =
      'El número de celular debe tener más de 10 caracteres y solo puede contener números.';
  }
  return errors;
};
export const validateEmail = (values) => {
  const errors = {};
  const newarry = [...values.email].some((item) => item === '@');
  if (!newarry || values.email === '') {
    errors.email = 'El correo electrónico debe contener el carácter @.';
  }
  return errors;
};
export const validateCountry = (values) => {
  const errors = {};
  if (!regExpCountry.test(values.country)) {
    errors.country =
      'El nombre del país solo puede contener letras y espacios.';
  }
  return errors;
};
export const validateDepartment = (values) => {
  const errors = {};
  if (!regExpDeparment.test(values.department)) {
    errors.department =
      'El nombre del departamento solo puede contener letras y espacios.';
  }
  return errors;
};
export const validateCity = (values) => {
  const errors = {};
  if (!regExpCity.test(values.city)) {
    errors.city =
      'El nombre de la ciudad solo puede contener letras y espacios.';
  }
  return errors;
};

export const validateUserDataForm = async ({ values = {}, uid = '' }) => {
  const errors = {
    ...(await validateUsername(values, uid)),
    ...validateNames(values),
    ...validateSurnames(values),
    ...validateGender(values),
    ...validateCcp(values),
    ...validateCell(values),
    ...validateEmail(values),
    ...validateCountry(values),
    ...validateDepartment(values),
    ...validateCity(values),
  };

  return errors;
};

export const validateOwnerPetForm = (values) => {
  const errors = {
    ...validateNames(values),
    ...validateSurnames(values),
    ...validateGender(values),
    ...validateCcp(values),
    ...validateCell(values),
    ...validateEmail(values),
    ...validateCountry(values),
    ...validateDepartment(values),
    ...validateCity(values),
  };
  return errors;
};

import {
  regExpNames,
  regExpColor,
  regExpSpecie,
  regExpWeight,
  regExpHeight,
} from 'utils/regularExpressionsList';

export const validateField = (values, fieldName, errorMessage) => {
  const errors = {};
  if (!values[fieldName]) {
    errors[fieldName] = errorMessage;
  }
  return errors;
};
export const validatePetName = (values) => {
  const errors = {};
  if (!regExpNames.test(values.petName)) {
    errors.petName = 'Los nombres solo pueden contener letras y espacios.';
  }
  return errors;
};
export const validatePetRace = (values) => {
  const errors = {};
  if (!values.petRace) {
    errors.petRace =
      'La raza es un campo obligatorio; en caso de no conocerla, puedes introducir "criolla" o "desconocida".';
  }
  return errors;
};
export const validatePetColor = (values) => {
  const errors = {};
  if (!regExpColor.test(values.petColor)) {
    errors.petColor =
      'Los colores solo pueden contener letras, espacios y guiones o slash.';
  }
  return errors;
};
export const validatePetSpecie = (values) => {
  const errors = {};
  if (!regExpSpecie.test(values.petSpecie)) {
    errors.petSpecie =
      'La especie solo puede contener letras y espacios. (Canino, Felino, etc.)';
  }
  return errors;
};
export const validatePetBirthdate = (values) =>
  validateField(
    values,
    'petBirthdate',
    'La fecha de nacimiento es obligatoria. Si no la conoce, puede ingresar una fecha estimada de acuerdo con la edad del animal.'
  );
export const validatePetWeight = (values) => {
  const errors = {};
  if (!regExpWeight.test(values.petWeight)) {
    errors.petWeight =
      'El peso es un campo requerido y solo puede contener números y puntos.';
  }
  return errors;
};
export const validatePetHeight = (values) => {
  const errors = {};
  if (!regExpHeight.test(values.petHeight)) {
    errors.petHeight =
      'La altura es un campo requerido y solo puede contener números y puntos.';
  }
  return errors;
};
export const validatePetSex = (values) =>
  validateField(
    values,
    'petSex',
    'Debes seleccionar una de las opciones disponibles.'
  );
export const validatePetRepStatus = (values) =>
  validateField(
    values,
    'petRepStatus',
    'Debes seleccionar una de las opciones disponibles.'
  );
export const validatePetDataForm = (values) => {
  const errors = {
    ...validatePetName(values),
    ...validatePetRace(values),
    ...validatePetColor(values),
    ...validatePetSpecie(values),
    ...validatePetBirthdate(values),
    ...validatePetWeight(values),
    ...validatePetHeight(values),
    ...validatePetSex(values),
    ...validatePetRepStatus(values),
  };
  return errors;
};

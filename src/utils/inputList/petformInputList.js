export const componentTypes = {
  TEXT_FIELD: 'textField',
  TEXT_SELECTION: 'textSelection',
};

export const petformInputList = [
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Nombre',
    name: 'petName',
    placeholder: 'Merlin',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Raza',
    name: 'petRace',
    placeholder: 'Criollo',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Color',
    name: 'petColor',
    placeholder: 'Dorado/Blanco',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Especie',
    name: 'petSpecie',
    placeholder: 'Canino',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'number',
    labelValue: 'Peso (Kg)',
    name: 'petWeight',
    placeholder: '1.5',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'number',
    labelValue: 'Altura (cm)',
    name: 'petHeight',
    placeholder: '50.5',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'date',
    labelValue: 'Fecha de Nacimiento',
    name: 'petBirthdate',
    placeholder: '',
  },
  {
    inputComponent: componentTypes.TEXT_SELECTION,
    labelValue: 'Sexo',
    name: 'petSex',
    options: ['Macho', 'Hembra'],
  },
  {
    inputComponent: componentTypes.TEXT_SELECTION,
    labelValue: 'Estado Reproductivo',
    name: 'petRepStatus',
    options: ['Esterilizado', 'Sin Esterilizar'],
  },
];

export const userformInputList = [
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Nombres',
    name: 'ownerNames',
    placeholder: 'Jessica Lorena',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Apellidos',
    name: 'ownerSurnames',
    placeholder: 'Casas Garcia',
  },
  {
    inputComponent: componentTypes.TEXT_SELECTION,
    labelValue: 'Género',
    name: 'ownerGender',
    options: ['Masculino', 'Femenino', 'Otro'],
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Código de país',
    name: 'ownerCcp',
    placeholder: '+57',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'tel',
    labelValue: 'Celular y/o WhatsApp',
    name: 'ownerCell',
    placeholder: '1234567890',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Email',
    name: 'ownerEmail',
    placeholder: 'prueba@ejemplo.com',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'País',
    name: 'ownerCountry',
    placeholder: 'Colombia',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Departamento',
    name: 'ownerDepartment',
    placeholder: 'Cundinamarca',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Ciudad',
    name: 'ownerCity',
    placeholder: 'Bogotá',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'text',
    labelValue: 'Dirección (Opcional)',
    name: 'ownerAddress',
    placeholder: 'Call 0 # 0-00 / Casa 0',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'url',
    labelValue: 'Sitio web (Opcional)',
    name: 'ownerWebsite',
    placeholder: 'https://www.facebook.com/ejemplo/',
  },
];

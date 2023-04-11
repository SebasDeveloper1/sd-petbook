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
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'textarea',
    labelValue: 'Descripción (Opcional)',
    name: 'petDesc',
    placeholder:
      'Comportamiento, gustos, rasgos particulares, personalidad, etc.',
  },
  {
    inputComponent: componentTypes.TEXT_FIELD,
    type: 'textarea',
    labelValue: 'Observaciones adicionales (Opcional)',
    name: 'petObserv',
    placeholder: 'Alergias, Cuidados, discapacidades, etc.',
  },
];

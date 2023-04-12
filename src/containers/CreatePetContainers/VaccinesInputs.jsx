/* eslint-disable no-unused-vars */
import React, { useState, useId } from 'react';
import { MdClose } from 'react-icons/md';
import { Typography, TextField, IconButton } from 'components/indexComponents';
import defaultImage from 'images/img-picture.png';

export function VaccinesInputs({
  date = '',
  vaccine = '',
  purpose = '',
  vet = '',
  contact = '',
  image = '',
  onChange = null,
  onRemove = null,
}) {
  const [imageUrl, setImageUrl] = useState(defaultImage);

  const imageId = useId();

  const handleChangeFile = (e) => {
    const { files } = e.target;
    onChange('image', files);
    const tmpPath = URL.createObjectURL(files[0]);
    setImageUrl(tmpPath);
    return files;
  };
  return (
    <article className="overflow-hidden border rounded-md bg-white shadow-lg">
      <div className="flex justify-between items-center px-4 py-2 bg-slate-900">
        <Typography
          variant="h6"
          value="Vacuna"
          styles="text-2xl font-medium tracking-tight text-white"
        />
        <IconButton
          type="button"
          variant="contained¿"
          styles="text-white hover:text-sky-500 "
          value="Eliminar"
          icon={<MdClose />}
          title="Borrar"
          handleOnClick={onRemove}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="col-span-3 md:col-span-1">
          <TextField
            labelValue="Fecha"
            type="date"
            name="date"
            status="normal"
            handleOnChange={(e) => onChange('date', e.target.value)}
            defaultValue={date}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <TextField
            labelValue="Vacuna"
            type="text"
            name="name"
            placeholder="Vacuna"
            status="normal"
            handleOnChange={(e) => onChange('vaccine', e.target.value)}
            defaultValue={vaccine}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <TextField
            labelValue="Propósito"
            type="text"
            name="purpose"
            placeholder="Propósito de la vacuna"
            status="normal"
            handleOnChange={(e) => onChange('purpose', e.target.value)}
            defaultValue={purpose}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <TextField
            labelValue="Veterinario"
            type="text"
            name="vet"
            placeholder="Dr. Smith"
            status="normal"
            handleOnChange={(e) => onChange('vet', e.target.value)}
            defaultValue={vet}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <TextField
            labelValue="Contacto"
            type="text"
            name="vetContact"
            placeholder="Teléfono, Dirección, correo, etc."
            status="normal"
            handleOnChange={(e) => onChange('contact', e.target.value)}
            defaultValue={contact}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <label htmlFor={`petImage_${imageId}`} className="label-input-form">
            Imagen de la etiqueta
            <label
              htmlFor={`petImage_${imageId}`}
              className="overflow-hidden flex justify-between items-center gap-2 w-full min-h-[2.5rem] mt-2 rounded-md ring-1 ring-slate-200 text-sm font-medium text-sky-400 bg-white shadow-sm cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:text-sky-500"
            >
              <span className="pl-4">Sube una foto</span>
              <img
                className="h-10 aspect-square object-cover object-center"
                src={imageUrl || defaultImage}
                alt=""
              />
              <input
                id={`petImage_${imageId}`}
                name={`petImage_${imageId}`}
                type="file"
                accept=".jpg, .jpeg, .png, .webp"
                className="sr-only"
                onChange={(e) => onChange('image', handleChangeFile(e))}
              />
            </label>
          </label>
        </div>
      </div>
    </article>
  );
}

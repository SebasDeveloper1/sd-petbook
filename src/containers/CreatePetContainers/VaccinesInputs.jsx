/* eslint-disable no-unused-vars */
import React from 'react';
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
  return (
    <article className="overflow-hidden border rounded-md bg-white shadow-lg">
      <div className="flex justify-between items-center px-4 bg-slate-900">
        <Typography
          variant="h6"
          value="Vacuna"
          styles="text-2xl font-medium tracking-tight text-white"
        />
        <IconButton
          type="button"
          variant="text"
          styles="text-white hover:text-sky-500 "
          value="Eliminar"
          Icon={<MdClose />}
          title="Borrar"
          handlerOnClick={onRemove}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="col-span-3 md:col-span-1">
          <TextField
            labelValue="Fecha"
            type="date"
            name="date-vaccine"
            status="normal"
            handlerOnChange={(e) => onChange('date', e.target.value)}
            defaultValue={date}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <TextField
            labelValue="Vacuna"
            type="text"
            name="vaccine-name"
            placeholder="Vacuna"
            status="normal"
            handlerOnChange={(e) => onChange('vaccine', e.target.value)}
            defaultValue={vaccine}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <TextField
            labelValue="Propósito"
            type="text"
            name="vaccine-purpose"
            placeholder="Propósito de la vacuna"
            status="normal"
            handlerOnChange={(e) => onChange('purpose', e.target.value)}
            defaultValue={purpose}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <TextField
            labelValue="Veterinario"
            type="text"
            name="vaccine-vet"
            placeholder="Dr. Smith"
            status="normal"
            handlerOnChange={(e) => onChange('vet', e.target.value)}
            defaultValue={vet}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <TextField
            labelValue="Contacto"
            type="text"
            name="vaccine-vet-contact"
            placeholder="Teléfono, Dirección, correo, etc."
            status="normal"
            handlerOnChange={(e) => onChange('contact', e.target.value)}
            defaultValue={contact}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <label htmlFor="vaccine-upload" className="label-input-form">
            Fotografía
            <label
              htmlFor="vaccine-upload"
              className="overflow-hidden flex justify-between items-center gap-2 w-full min-h-[2.5rem] mt-2 rounded-md ring-1 ring-slate-200 text-sm font-medium text-sky-400 bg-white shadow-sm cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:text-sky-500"
            >
              <span className="pl-4">Sube una foto</span>
              <img
                className="h-10 aspect-square object-cover object-center"
                src={defaultImage}
                alt=""
              />
              <input
                id="vaccine-upload"
                name="vaccine-upload"
                type="file"
                className="sr-only"
                onChange={(e) => onChange('image', e.target.value)}
                value={image}
              />
            </label>
          </label>
        </div>
      </div>
    </article>
  );
}

import React from 'react';
import {
  Typography,
  TextField,
  TextSelection,
} from 'components/indexComponents';

export function PetDataForm() {
  return (
    <section className=" md:col-span-2">
      <div>
        <div className="py-4 md:px-4 md:pt-0">
          <Typography
            variant="h4"
            value="Datos del animal"
            styles="mb-4 col-span-3 text-2xl font-medium tracking-tight text-slate-900"
          />
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Nombre"
                type="text"
                name="name-pet"
                placeholder="Merlin"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Raza"
                type="text"
                name="race-pet"
                placeholder="Criollo"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Color"
                type="text"
                name="color-pet"
                placeholder="Dorado/Blanco"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Especie"
                type="text"
                name="specie-pet"
                placeholder="Canino"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextField
                labelValue="Peso (Kg)"
                type="number"
                name="weight-pet"
                placeholder="1.5"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextField
                labelValue="Altura (cm)"
                type="number"
                name="height-pet"
                placeholder="50"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextField
                labelValue="Fecha de Nacimiento"
                type="date"
                name="birthdate-pet"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextSelection
                labelValue="Sexo"
                selectionName="sex-pet"
                options={['Macho', 'Hembra']}
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextSelection
                labelValue="Estado Reproductivo"
                selectionName="reproductive-status-pet"
                options={['Esterilizad', 'Sin Esterilizar']}
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 md:col-span-3">
              <TextField
                labelValue="Descripción (Opcional)"
                type="textarea"
                name="description-pet"
                rows={4}
                placeholder="Comportamiento, gustos, rasgos particulares, personalidad, etc."
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 md:col-span-3">
              <TextField
                labelValue="Observaciones adicionales (Opcional)"
                type="textarea"
                name="observations-pet"
                rows={4}
                placeholder="Alergias, Cuidados, discapacidades, etc."
                status="normal"
                handleOnChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

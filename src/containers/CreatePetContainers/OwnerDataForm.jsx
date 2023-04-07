import React from 'react';
import {
  Typography,
  TextField,
  TextSelection,
} from 'components/indexComponents';

export function OwnerDataForm() {
  return (
    <section className=" md:col-span-3">
      <div>
        <div className="py-4 md:px-4 md:pt-0">
          <Typography
            variant="h4"
            value="Información del Propietario"
            styles="mb-4 col-span-3 text-2xl font-medium tracking-tight text-slate-900"
          />
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Nombres"
                type="text"
                name="name-owner"
                placeholder="Jessica Lorena"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Apellidos"
                type="text"
                name="lastname-owner"
                placeholder="Casas Garcia"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextSelection
                labelValue="Género"
                selectionName="gender-owner"
                options={['Masculino', 'Femenino', 'Otro']}
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Celular y/o WhatsApp"
                type="number"
                name="cell-owner"
                placeholder="1234567890"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Correo Electrónico"
                type="email"
                name="email-owner"
                placeholder="prueba@ejemplo.com"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Sitio web de contacto (Opcional)"
                type="text"
                name="web-owner"
                placeholder="Facebook, Instagram, etc."
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextField
                labelValue="País"
                type="text"
                name="country-owner"
                placeholder="Colombia"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextField
                labelValue="Departamento"
                type="text"
                name="departament-owner"
                placeholder="Cundinamarca"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextField
                labelValue="Ciudad"
                type="text"
                name="city-owner"
                placeholder="Bogotá"
                status="normal"
                handleOnChange={() => {}}
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <TextField
                labelValue="Dirección de residencia"
                type="text"
                name="address-owner"
                placeholder="Call 0 # 0-00 / Casa 0"
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

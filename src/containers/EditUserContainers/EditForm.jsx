import React from 'react';
import defaultImage from 'images/profile-picture.png';
import {
  Typography,
  TextField,
  TextSelection,
  Button,
} from 'components/indexComponents';

export function EditForm() {
  return (
    <form className="w-11/12 p-8 rounded-md shadow-md bg-white">
      <Typography
        variant="h3"
        value="Editar perfil"
        styles="pb-4 text-2xl font-semibold tracking-tight text-slate-900"
      />
      <section className="grid grid-cols-3 gap-8 divide-y md:divide-x md:divide-y-0">
        <div className="col-span-3 md:col-span-1">
          <div className="w-full rounded-md border border-gray-300 text-center hover:bg-slate-50">
            <label
              htmlFor="file-upload"
              className="block w-full p-6 cursor-pointer font-medium text-sky-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:text-sky-500"
            >
              <img
                className="w-44 mb-3 aspect-square m-auto rounded-full object-cover object-center"
                src={defaultImage}
                alt="Perfil"
              />
              <span>Selecciona una foto</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 pt-8 md:pl-8 md:py-0">
          <Typography
            variant="h4"
            value="Tus Datos"
            styles="pb-4 text-2xl font-semibold tracking-tight text-slate-900"
          />
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Nombre de Usuario"
                type="text"
                name="username-user"
                placeholder="Jessica Lorena"
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Nombres"
                type="text"
                name="name-user"
                placeholder="Jessica Lorena"
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Apellidos"
                type="text"
                name="lastname-user"
                placeholder="Casas Garcia"
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextSelection
                labelValue="Género"
                selectionName="gender-user"
                options={['Masculino', 'Femenino', 'Otro']}
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Celular y/o WhatsApp"
                type="number"
                name="cell-user"
                placeholder="1234567890"
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Correo Electrónico"
                type="email"
                name="email-user"
                placeholder="prueba@ejemplo.com"
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Sitio web de contacto (Opcional)"
                type="text"
                name="web-user"
                placeholder="Facebook, Instagram, etc."
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="País"
                type="text"
                name="country-user"
                placeholder="Colombia"
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Departamento"
                type="text"
                name="departament-user"
                placeholder="Cundinamarca"
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Ciudad"
                type="text"
                name="city-user"
                placeholder="Bogotá"
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <TextField
                labelValue="Dirección de residencia"
                type="text"
                name="address-user"
                placeholder="Call 0 # 0-00 / Casa 0"
                status="normal"
                handlerOnChange={() => {}}
              />
            </div>

            <div className="col-span-6">
              <Button
                type="button"
                variant="contained"
                styles="w-fit"
                value="Guardar cambios"
                // handlerOnClick={handlerOnSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

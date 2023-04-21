import React from 'react';
import { Typography } from 'components/indexComponents';

export function AddImagePet({
  handleFileInput = null,
  imageUrl = '',
  handleImageUrl = null,
} = {}) {
  const handleChangeFile = (e) => {
    const { files } = e.target;
    handleFileInput(files);
    const tmpPath = URL.createObjectURL(files[0]);
    handleImageUrl(tmpPath);
  };

  return (
    <section className="flex flex-col gap-y-4 md:col-span-1">
      <div className="flex justify-center rounded-md border border-gray-300">
        <div className="w-full text-center">
          <label
            htmlFor="file-upload"
            className="block w-full p-4 cursor-pointer rounded-md font-medium text-sky-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:text-sky-500"
          >
            <img
              className="w-44 md:w-full mb-2 aspect-square m-auto rounded-md object-cover object-center"
              src={imageUrl}
              alt="Mascota"
            />
            <span>Selecciona una foto de tu mascota</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              accept=".jpg, .jpeg, .png, .webp"
              className="sr-only"
              onChange={handleChangeFile}
              required
            />
          </label>
        </div>
      </div>
      <div className="p-4 rounded-md bg-sky-50 text-sky-600 border border-dashed border-sky-200">
        <Typography
          variant="p_sm"
          value="Por favor, selecciona una foto de tu mascota en posición horizontal o de medidas 1:1(Cuadrada) y que no contenga filtros o accesorios que dificulten su identificación."
          styles="text-2xl tracking-tight"
        />
      </div>
    </section>
  );
}

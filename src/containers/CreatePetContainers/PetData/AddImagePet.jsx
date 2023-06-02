import React, { useState, useEffect } from 'react';
import { Typography } from 'components/indexComponents';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import defaultImagePet from 'images/img-picture.webp';

export function AddImagePet({
  fileInput = {},
  handleFileInput = null,
  imageUrl = '',
  req = false,
} = {}) {
  const [url, setUrl] = useState(defaultImagePet);

  useEffect(() => {
    const fetchImageUrl = async () => {
      setUrl(
        imageUrl?.petImage
          ? await getStorageImageUrl({ path: imageUrl?.petImage })
          : defaultImagePet
      );
    };
    fetchImageUrl();
  }, [imageUrl]);

  const handleChangeFile = (e) => {
    const { files } = e.target;
    handleFileInput({ ...fileInput, petFileInput: files });
    const tmpPath = URL.createObjectURL(files[0]);
    setUrl(tmpPath);
  };

  return (
    <section className="flex flex-col gap-y-4 md:col-span-1">
      <div className="flex justify-center rounded-md border border-gray-300">
        <div className="w-full text-center">
          <label
            htmlFor="pet-file"
            className="block w-full p-4 cursor-pointer rounded-md font-medium text-sky-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:text-sky-500"
          >
            <img
              className="w-44 md:w-full mb-2 aspect-square m-auto rounded-md object-cover object-center"
              src={url}
              alt="Mascota"
              loading="lazy"
            />
            <span>Selecciona una foto de tu mascota</span>
            <input
              id="pet-file"
              name="pet-file"
              type="file"
              accept=".jpg, .jpeg, .png, .webp"
              className="sr-only"
              onChange={handleChangeFile}
              required={req}
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

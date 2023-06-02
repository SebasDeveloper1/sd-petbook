import React, { useState, useEffect } from 'react';
import { Typography } from 'components/indexComponents';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import defaultImageOwner from 'images/profile-picture.webp';

export function AddImageOwner({
  fileInput = {},
  handleFileInput = null,
  imageUrl = {},
} = {}) {
  const [url, setUrl] = useState(defaultImageOwner);
  useEffect(() => {
    const fetchImageUrl = async () => {
      setUrl(
        imageUrl?.ownerImage
          ? await getStorageImageUrl({ path: imageUrl?.ownerImage })
          : defaultImageOwner
      );
    };
    fetchImageUrl();
  }, [imageUrl]);

  const handleChangeFile = (e) => {
    const { files } = e.target;
    handleFileInput({ ...fileInput, ownerFileInput: files });
    const tmpPath = URL.createObjectURL(files[0]);
    setUrl(tmpPath);
  };

  return (
    <section className="flex flex-col gap-y-4 md:col-span-1">
      <div className="flex justify-center rounded-md border border-gray-300">
        <div className="w-full text-center">
          <label
            htmlFor="owner-file"
            className="block w-full p-4 cursor-pointer rounded-md font-medium text-sky-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:text-sky-500"
          >
            <img
              style={{ borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%' }}
              className="w-44  mb-2 aspect-square m-auto rounded-full object-cover object-center"
              src={url}
              alt="Mascota"
              loading="lazy"
            />
            <span>Selecciona una foto</span>
            <input
              id="owner-file"
              name="owner-file"
              type="file"
              accept=".jpg, .jpeg, .png, .webp"
              className="sr-only"
              onChange={handleChangeFile}
            />
          </label>
        </div>
      </div>
      <div className="p-4 rounded-md bg-sky-50 text-sky-600 border border-dashed border-sky-200">
        <Typography
          variant="p_sm"
          value="Si quieres, puedes agregar una imagen personalizada para identificarte como el propietario de esta mascota. De lo contrario, si no agregas una imagen, el sistema tomará la imagen que tienes como perfil."
          styles="text-2xl tracking-tight"
        />
      </div>
    </section>
  );
}

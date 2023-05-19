/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { MdMoreVert } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Typography } from 'components/indexComponents';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import { getPetAge } from 'utils/getPetAge';
import defaultImage from 'images/profile-picture.png';

export function PetCart({ petInfo = {} }) {
  const { id: petId, petImage = '', petName, petBirthdate } = petInfo;
  const [imageUrl, setImageUrl] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [moreOptions, setMoreOptions] = useState({
    transition: '',
    status: false,
  });

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        if (petImage !== '') {
          const urlImage = petImage
            ? await getStorageImageUrl({ path: petImage })
            : defaultImage;
          setImageUrl(urlImage);
        }
      } catch (error) {
        console.error(error);
      }
    }

    setBirthdate(getPetAge(petBirthdate));
    fetchUserInfo();
  }, [petInfo]);

  const handlerMoreOptions = (e) => {
    e.preventDefault();
    if (!moreOptions.status) {
      setMoreOptions({
        transition: 'transform rotate-90 text-white',
        status: true,
      });
    } else {
      setMoreOptions({ transition: 'text-slate-400', status: false });
    }
  };

  return (
    <Link
      to={`/pet/${petName}+${petId}`}
      className="group block overflow-hidden rounded-lg shadow-lg md:hover:-translate-y-4 transition-transform duration-300 bg-slate-900"
    >
      <figure
        className="overflow-hidden w-full aspect-square border-4 border-sky-400 -translate-x-5 -translate-y-5"
        style={{ borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%' }}
      >
        <img
          src={imageUrl || defaultImage}
          alt={petName}
          className="w-full h-full object-cover object-center"
          style={{ borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%' }}
        />
      </figure>
      <div className="grid grid-cols-5 justify-center items-center w-full p-3 pt-0">
        <div className="col-span-4 mr-1">
          <Typography
            variant="span_base"
            value={petName}
            styles="text-2xl font-semibold tracking-tight text-white truncate capitalize"
          />
          <Typography
            variant="span_sm"
            value={birthdate}
            styles="font-medium tracking-tight text-slate-400 truncate"
          />
        </div>
        <div className="relative">
          <button
            type="button"
            className="col-span-1 flex justify-center items-center w-10 h-10 rounded-full text-2xl text-slate-500 hover:text-white hover:bg-slate-700/20"
            title="Opciones"
            onClick={handlerMoreOptions}
          >
            <IconContext.Provider
              value={{
                className: `transition-all ${moreOptions?.transition}`,
              }}
            >
              <MdMoreVert />
            </IconContext.Provider>
          </button>
          {moreOptions?.status ? (
            <div className="absolute bottom-[120%] right-0 w-24 max-w-sm rounded-md shadow-lg p-2 bg-slate-800">
              <ul className="space-y-1">
                <li className="w-full">
                  <Link
                    to={`/edit-pet/${petId}`}
                    className="block w-full py-0.5 text-sm font-medium tracking-tight text-slate-400 hover:text-white"
                  >
                    Editar
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to={`/pet/${petName}+${petId}`}
                    className="block w-full py-0.5 text-sm font-medium tracking-tight text-slate-400 hover:text-white"
                  >
                    Eliminar
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

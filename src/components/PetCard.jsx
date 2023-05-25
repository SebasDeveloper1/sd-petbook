/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdMoreVert } from 'react-icons/md';
import { Typography, Button } from 'components/indexComponents';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import { deletePet } from 'fbase/dbFunctions';
import { getPetAge } from 'utils/getPetAge';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import defaultImage from 'images/profile-picture.png';

export function PetCard({ petInfo = {}, handleDelete } = {}) {
  const {
    uid,
    docId,
    id: petId,
    petImage = '',
    petName,
    petBirthdate,
  } = petInfo;
  const [imageUrl, setImageUrl] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [moreOptions, setMoreOptions] = useState({
    transition: '',
    status: false,
  });
  const [deleteOptions, setDeleteOptions] = useState({
    transition: '',
    status: false,
  });
  const navigate = useNavigate();

  const deleteOptionsRef = useRef(null);

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

  const handlerOnDelete = async (e) => {
    e.preventDefault();
    if (!deleteOptions.status) {
      setDeleteOptions({
        transition: 'translate-y-0',
        status: true,
      });
    }
    setMoreOptions({ transition: 'text-slate-400', status: false });
  };

  const handleGoToContinue = (e) => {
    e.preventDefault();
    setDeleteOptions({ transition: '-translate-y-full', status: false });
  };

  const handlerOnEdit = async (e) => {
    e.preventDefault();
    navigate(`/edit-pet/${petId}`);
  };
  const handleDeletePet = async (e) => {
    e.preventDefault();
    await deletePet({ uid, docId, petId });
    handleDelete(docId);
  };

  useOnClickOutside(deleteOptionsRef, () =>
    setDeleteOptions({ transition: '-translate-y-full', status: false })
  );

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg md:hover:-translate-y-4 transition-transform duration-300">
      <Link
        to={`/pet/${petName}+${petId}`}
        className="block w-full h-full bg-slate-900"
      >
        <figure className="overflow-hidden w-full aspect-square">
          <img
            src={imageUrl || defaultImage}
            alt={petName}
            className="w-full h-full object-cover object-center"
          />
        </figure>
        <div className="grid grid-cols-5 justify-center items-center w-full p-3">
          <div className="col-span-4 mr-1">
            <Typography
              variant="span_xl"
              value={petName}
              styles="text-2xl font-semibold tracking-tight text-white truncate capitalize"
            />
            <Typography
              variant="span_base"
              value={birthdate}
              styles="font-medium tracking-tight text-slate-400 truncate"
            />
          </div>
          <div className="relative">
            <button
              type="button"
              className="col-span-1 flex items-center justify-center w-12 h-12 rounded-full text-3xl text-slate-500 hover:text-white hover:bg-slate-700/20"
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
                    <button
                      type="button"
                      className="block w-full py-0.5 text-start text-base font-medium tracking-tight text-slate-400 hover:text-white"
                      onClick={handlerOnEdit}
                    >
                      Editar
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      type="button"
                      className="block w-full py-0.5 text-start text-base font-medium tracking-tight text-slate-400 hover:text-white"
                      onClick={handlerOnDelete}
                    >
                      Eliminar
                    </button>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Link>
      <section
        ref={deleteOptionsRef}
        className={`absolute inset-0 p-4 bg-slate-900/80 -translate-y-full ${deleteOptions?.transition} transition-all duration-300`}
      >
        <div className="w-fill h-full flex flex-col justify-evenly items-center">
          <Typography
            variant="span_base"
            value="¿Estas seguro de eliminar esta mascota?"
            styles="tracking-tight text-center text-white"
          />
          <section className="flex flex-col items-center justify-center w-full gap-2 mt-4">
            <Button
              type="submit"
              variant="contained"
              styles="w-full"
              value="Si"
              handleOnClick={handleDeletePet}
            />
            <Button
              type="button"
              variant="text"
              styles="w-full button-text-secondary"
              value="No"
              handleOnClick={handleGoToContinue}
            />
          </section>
        </div>
      </section>
    </div>
  );
}

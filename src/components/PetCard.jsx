/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdMoreHoriz, MdQrCode2, MdModeEdit, MdDelete } from 'react-icons/md';
import { Typography, Button } from 'components/indexComponents';
import { Modal, QrLayout } from 'containers/indexContainers';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import { deletePet } from 'fbase/dbFunctions';
import { getPetAge } from 'utils/getPetAge';
import { useEvents } from 'hooks/useEvents';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import defaultImage from 'images/loading-image.gif';

export function PetCard({ petInfo = {}, handleDelete = null }) {
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
  const [moreOptions, setMoreOptions] = useState(false);
  const [menuOptions, setMenuOptions] = useState(false);
  const [deleteOptions, setDeleteOptions] = useState(false);
  const navigate = useNavigate();

  const { stateEvents, handlerModal } = useEvents();
  const { openModal } = stateEvents;

  const deleteOptionsRef = useRef(null);
  const menuOptionsRef = useRef(null);
  const menuOptionsRef2 = useRef(null);

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
    setMoreOptions((prevMoreOptions) => !prevMoreOptions);
    setMenuOptions((prevMenuOptions) => !prevMenuOptions);
  };

  const handlerOnDelete = (e) => {
    e.preventDefault();
    setDeleteOptions((prevDeleteOptions) => !prevDeleteOptions);
    setMoreOptions(false);
    setMenuOptions(false);
  };

  const handleGoToContinue = (e) => {
    e.preventDefault();
    setDeleteOptions(false);
  };

  const handlerOnEdit = (e) => {
    e.preventDefault();
    navigate(`/edit-pet/${petId}`);
  };

  const handleDeletePet = async (e) => {
    e.preventDefault();
    await deletePet({ uid, docId, petId });
    handleDelete(docId);
  };

  const handlerGoToModal = (e) => {
    e.preventDefault();
    const url = new URL(document.location.href);

    handlerModal({
      modalInfo: {
        petName,
        petImage: imageUrl,
        qrValue: `${url.origin}/pet/${petName}+${petId}`,
      },
    });
    setMoreOptions(false);
    setMenuOptions(false);
  };

  useOnClickOutside(deleteOptionsRef, () => setDeleteOptions(false));

  useOnClickOutside(
    menuOptionsRef,
    () => {
      setMenuOptions(false);
      setMoreOptions(false);
    },
    menuOptionsRef2
  );

  const optionsMenuButtonList = [
    { value: 'Código QR', icon: <MdQrCode2 />, handler: handlerGoToModal },
    { value: 'Editar', icon: <MdModeEdit />, handler: handlerOnEdit },
    { value: 'Eliminar', icon: <MdDelete />, handler: handlerOnDelete },
  ];

  return (
    <>
      <div className="relative group overflow-hidden rounded-xl shadow-lg md:hover:scale-105 transition-all duration-300">
        <Link
          to={`/pet/${petName}+${petId}`}
          className="block w-full h-full bg-slate-900"
        >
          <figure className="relative w-full aspect-square">
            <img
              src={imageUrl || defaultImage}
              alt={petName}
              className="w-full h-full  object-cover object-center"
              loading="lazy"
            />
            <button
              ref={menuOptionsRef2}
              type="button"
              className={`absolute top-full right-2 -translate-y-6 flex items-center justify-center w-12 h-12 rounded-full text-3xl bg-sky-500 hover:bg-sky-500 transition-colors duration-300 ${
                moreOptions ? 'transform rotate-90 text-white' : 'text-white'
              } hover:text-slate-50`}
              title="Opciones"
              onClick={handlerMoreOptions}
              aria-label="Opciones"
              tabIndex={menuOptions ? -1 : 0} // Evitar el enfoque cuando el menú no está visible
            >
              <IconContext.Provider value={{ className: 'transition-all' }}>
                <MdMoreHoriz />
              </IconContext.Provider>
            </button>
            <section
              ref={menuOptionsRef}
              className={`absolute inset-x-0 top-0 h-fit rounded-b-md shadow-lg p-2 bg-slate-900/80 transition-all duration-300 ${
                menuOptions ? 'translate-y-0' : '-translate-y-full'
              }`}
              role="menu"
              aria-hidden={!menuOptions}
            >
              <ul className="space-y-1">
                {optionsMenuButtonList.map((button) => (
                  <li key={`button-${button.value}`} className="w-full">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-1 text-start text-base font-medium tracking-tight text-slate-400 hover:text-white"
                      onClick={button.handler}
                      role="menuitem"
                    >
                      {button.value}
                      <IconContext.Provider value={{ className: 'text-2xl' }}>
                        {button.icon}
                      </IconContext.Provider>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </figure>
          <section className="w-full px-3 py-4">
            <Typography
              variant="span_xl"
              value={petName}
              styles="text-2xl font-semibold tracking-tight text-white truncate capitalize"
            />
            <Typography
              variant="span_base"
              value={birthdate}
              styles="font-medium tracking-tight text-sky-400 truncate"
            />
          </section>
        </Link>
        <section
          ref={deleteOptionsRef}
          className={`absolute inset-0 p-4 bg-slate-900/80 transition-all duration-300 ${
            deleteOptions ? 'translate-y-0' : '-translate-y-full'
          }`}
          aria-hidden={!deleteOptions}
        >
          <div className="w-fill h-full flex flex-col justify-evenly items-center">
            <Typography
              variant="span_base"
              value="¿Estás seguro de eliminar esta mascota?"
              styles="tracking-tight text-center text-white"
            />
            <section className="flex flex-col items-center justify-center w-full gap-2 mt-4">
              <Button
                type="submit"
                variant="contained"
                styles="w-full"
                value="Sí"
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
      {openModal?.modalState && (
        <Modal>
          <QrLayout
            qrInfo={openModal?.modalInfo}
            handleCloseModal={handlerModal}
          />
        </Modal>
      )}
    </>
  );
}

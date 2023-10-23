import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdQrCode2, MdModeEdit, MdDelete } from 'react-icons/md';
import { Button, Typography } from 'components/indexComponents';
import { Modal, QrLayout } from 'containers/indexContainers';
import { useEvents } from 'hooks/useEvents';
import { deletePet } from 'fbase/dbFunctions';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import defaultImage from 'images/loading-image.gif';

export function PetOptionsBanner({ petInfo = {} } = {}) {
  const { id, uid, docId, petName, petImage } = petInfo;
  const [imageUrl, setImageUrl] = useState('');
  const [deleteOption, setDeleteOption] = useState(false);
  const { stateEvents, handlerModal } = useEvents();
  const { openModal } = stateEvents;
  const navigate = useNavigate();

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
    fetchUserInfo();
  }, [petInfo]);

  const handleGoToContinue = (e) => {
    e.preventDefault();
    handlerModal();
    setDeleteOption(!deleteOption);
  };

  const handlerOnDelete = (e) => {
    e.preventDefault();
    handlerModal();
    setDeleteOption(!deleteOption);
  };

  const handleDeletePet = async (e) => {
    e.preventDefault();
    await deletePet({ uid, docId, petId: id });
    navigate('/home');
  };

  const handlerOnEdit = (e) => {
    e.preventDefault();
    navigate(`/edit-pet/${id}`);
  };

  const handlerGetQr = (e) => {
    e.preventDefault();
    const url = new URL(document.location.href);

    handlerModal({
      modalInfo: {
        petName,
        petImage: imageUrl,
        qrValue: `${url.origin}/pet/${petName}+${id}`,
      },
    });
  };

  const bannerOptionsList = [
    { value: 'Código QR', icon: <MdQrCode2 />, handler: handlerGetQr },
    { value: 'Editar', icon: <MdModeEdit />, handler: handlerOnEdit },
    { value: 'Eliminar', icon: <MdDelete />, handler: handlerOnDelete },
  ];

  return (
    <>
      <div className="flex justify-center w-full py-3 bg-slate-800">
        <div className="flex flex-wrap justify-end items-center gap-4 md:gap-6 w-11/12">
          {bannerOptionsList.map((option) => (
            <button
              key={option?.value}
              type="button"
              className="button-contained rounded-xl py-2.5 px-6 w-full md:w-fit bg-slate-700/50 hover:bg-slate-600/50"
              onClick={option?.handler}
            >
              {option?.icon}
              {option?.value}
            </button>
          ))}
        </div>
      </div>
      {openModal?.modalState && (
        <Modal>
          {deleteOption ? (
            <div className="w-fit h-fit p-6 rounded-lg flex flex-col justify-evenly items-center bg-slate-800">
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
                  styles="w-full button-text-third"
                  value="No"
                  handleOnClick={handleGoToContinue}
                />
              </section>
            </div>
          ) : (
            <QrLayout
              qrInfo={openModal?.modalInfo}
              handleCloseModal={handlerModal}
            />
          )}
        </Modal>
      )}
    </>
  );
}

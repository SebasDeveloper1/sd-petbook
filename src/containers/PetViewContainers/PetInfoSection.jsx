/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import {
  FaShapes,
  FaChess,
  FaCalendarDay,
  FaPaw,
  FaAdjust,
  FaPalette,
  FaWeight,
  FaRuler,
} from 'react-icons/fa';
import { Typography, ImageViewDetails } from 'components/indexComponents';
import { PetDesc, Modal } from 'containers/indexContainers';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import { getPetAge } from 'utils/getPetAge';
import { useEvents } from 'hooks/useEvents';
import defaultImage from 'images/loading-image.gif';

export function PetInfoSection({ petInfo = {} }) {
  const {
    petImage = '',
    petName,
    petRace,
    petColor,
    petSpecie,
    petWeight,
    petHeight,
    petBirthdate,
    petSex,
    petRepStatus,
  } = petInfo;
  const [pictureUrl, setPictureUrl] = useState(defaultImage);

  const { stateEvents, handlerModal } = useEvents();
  const { openModal } = stateEvents;

  useEffect(() => {
    const fetchPictureUrl = async () => {
      try {
        if (petImage) {
          const urlImage = await getStorageImageUrl({ path: petImage });
          setPictureUrl(urlImage);
        } else {
          setPictureUrl(defaultImage);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPictureUrl();
  }, [petImage]);

  const petFeatures = [
    { name: 'Especie', icon: <FaPaw />, data: petSpecie },
    { name: 'Raza', icon: <FaShapes />, data: petRace },
    { name: 'Sexo', icon: <FaChess />, data: petSex },
    { name: 'E. reproductivo', icon: <FaAdjust />, data: petRepStatus },
    { name: 'Peso', icon: <FaWeight />, data: `${petWeight} Kg` },
    { name: 'Altura', icon: <FaRuler />, data: `${petHeight} cm` },
    { name: 'Color', icon: <FaPalette />, data: petColor },
  ];

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  const handlerGoToModal = (e) => {
    e.preventDefault();

    handlerModal({
      modalInfo: {
        imageTitle: petName,
        imageData: pictureUrl,
      },
    });
  };

  return (
    <>
      <button
        type="button"
        style={{ borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%' }}
        className="overflow-hidden flex justify-center items-center w-9/12 shadow-lg transform transition-all hover:scale-105"
        onClick={handlerGoToModal}
      >
        <img
          className="w-full aspect-square object-cover object-center"
          src={pictureUrl || defaultImage}
          alt={petName}
        />
      </button>

      <section className="flex flex-col justify-center items-center w-full">
        <Typography
          variant="h3"
          value={petName}
          styles="w-full mb-1 font-bold tracking-tight text-slate-900 text-center"
        />
        <article className="flex justify-center items-center gap-2  ">
          <IconContext.Provider
            value={{ className: 'text-lg text-sky-500/50' }}
          >
            <FaCalendarDay />
          </IconContext.Provider>
          <Typography
            variant="p_lg"
            value={getPetAge(petBirthdate)}
            styles="w-full font-medium truncate capitalize text-sky-500"
          />
        </article>
      </section>

      <section className="grid grid-cols-2 gap-6 w-full p-4 border-t text-xl text-slate-400">
        {petFeatures.map((item) => (
          <article
            key={`userDateElement__${item?.name}`}
            className={`flex items-center gap-3 ${
              item?.data.length > 20 ? 'col-span-2' : 'col-span-1'
            }`}
          >
            {item?.icon}
            <div>
              <Typography
                variant="span_base"
                value={capitalizeFirstLetter(item?.data)}
                styles="font-medium text-slate-700"
              />
              <Typography
                variant="span_xs"
                value={capitalizeFirstLetter(item?.name)}
                styles="font-medium"
              />
            </div>
          </article>
        ))}
      </section>
      <PetDesc petInfo={petInfo} />

      {openModal?.modalState && (
        <Modal>
          <ImageViewDetails
            imageInfo={openModal?.modalInfo}
            handleCloseModal={handlerModal}
          />
        </Modal>
      )}
    </>
  );
}

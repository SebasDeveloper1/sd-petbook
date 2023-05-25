/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import {
  FaAward,
  FaDog,
  FaChess,
  FaCalendarDay,
  FaPaw,
  FaAdjust,
  FaPalette,
  FaWeight,
  FaRuler,
} from 'react-icons/fa';
import { Typography } from 'components/indexComponents';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import { getPetAge } from 'utils/getPetAge';
import defaultImage from 'images/profile-picture.png';

export function HeroSection({ petInfo = {} }) {
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
    petDesc,
    petObserv,
  } = petInfo;
  const [pictureUrl, setPictureUrl] = useState(defaultImage);

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
    { name: 'Raza', icon: <FaDog />, data: petRace },
    { name: 'Sexo', icon: <FaChess />, data: petSex },
    { name: 'E. reproductivo', icon: <FaAdjust />, data: petRepStatus },
    {
      name: 'Edad',
      icon: <FaCalendarDay />,
      data: petBirthdate ? getPetAge(petBirthdate) : '',
    },
    { name: 'Color', icon: <FaPalette />, data: petColor },
    { name: 'Peso', icon: <FaWeight />, data: `${petWeight} Kg` },
    { name: 'Altura', icon: <FaRuler />, data: `${petHeight} cm` },
  ];

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return (
    <div className="grid grid-cols-2 w-full min-h-screen bg-slate-900">
      <img
        className="col-span-2 md:col-span-1 w-full md:min-h-screen object-cover shadow-lg"
        src={pictureUrl || defaultImage}
        alt={petName}
      />
      <div className="col-span-2 md:col-span-1 flex flex-col items-center w-full py-12">
        <div className="w-11/12 space-y-12">
          <div className="flex items-center gap-3">
            <IconContext.Provider
              value={{ className: 'text-5xl text-sky-500' }}
            >
              <FaAward />
            </IconContext.Provider>
            <div className="z-10 relative w-full">
              <Typography
                variant="h2"
                value={petName}
                styles="font-extrabold tracking-tight text-white capitalize"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="-z-10 absolute -bottom-4 left-0 h-[2em] w-full fill-sky-600"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
            </div>
          </div>
          <div className="space-y-6 p-6 rounded-lg border border-slate-800">
            <div className="grid grid-cols-2 gap-4 w-full text-xl text-sky-400 ">
              <Typography
                variant="h5"
                value="Datos del animal"
                styles="col-span-2 pb-2 font-medium text-white"
              />
              {petFeatures.map((item) => (
                <article
                  key={`petFearures_${item?.name}`}
                  className="col-span-2 md:col-span-1 flex items-center gap-3"
                >
                  {item?.icon}
                  <Typography
                    variant="span_base"
                    value={`${capitalizeFirstLetter(
                      item?.name
                    )}: ${capitalizeFirstLetter(item?.data)}`}
                    styles="text-slate-400"
                  />
                </article>
              ))}
            </div>
            {petDesc ? (
              <div className="space-y-3">
                <Typography
                  variant="span_base"
                  value="Descripción"
                  styles="col-span-2 font-semibold text-sky-400"
                />
                <Typography
                  variant="p_base"
                  value={petDesc}
                  styles="max-w-prose text-slate-400"
                />
              </div>
            ) : null}
            {petObserv ? (
              <div className="space-y-3">
                <Typography
                  variant="span_base"
                  value="Observaciones"
                  styles="col-span-2 font-semibold text-sky-400"
                />
                <Typography
                  variant="p_base"
                  value={petObserv}
                  styles="max-w-prose text-slate-400"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

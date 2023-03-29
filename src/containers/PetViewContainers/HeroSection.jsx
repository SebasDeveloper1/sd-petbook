/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaDog,
  FaChess,
  FaCalendarDay,
  FaPaw,
  FaAdjust,
  FaPalette,
  FaWeight,
  FaRuler,
  FaAward,
} from 'react-icons/fa';
import { Typography } from 'components/indexComponents';

const defaultImage =
  'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const petFeatures = [
  { name: 'Especie', icon: <FaPaw />, data: 'Canino' },
  { name: 'Raza', icon: <FaDog />, data: 'Criollo' },
  { name: 'Sexo', icon: <FaChess />, data: 'Macho' },
  { name: 'E. reproductivo', icon: <FaAdjust />, data: 'Esterilizado' },
  { name: 'Edad', icon: <FaCalendarDay />, data: '3 Años' },
  { name: 'Color', icon: <FaPalette />, data: 'Blano y Negro' },
  { name: 'Peso', icon: <FaWeight />, data: '3 Kg' },
  { name: 'Altura', icon: <FaRuler />, data: '50 cm' },
];

export function HeroSection() {
  return (
    <div className="grid grid-cols-5 justify-items-center gap-6 md:gap-4 w-full mb-24 md:pt-12">
      <img
        className="col-span-5 md:col-span-2 justify-self-center w-full aspect-square md:rounded-r-xl shadow-lg object-cover object-center"
        src={defaultImage}
        alt="Bonnie"
      />
      <div className="overflow-hidden col-span-5 md:col-span-3 flex flex-col gap-6 w-11/12">
        <div className="flex items-center gap-3 w-full mb-4 ">
          <IconContext.Provider value={{ className: 'text-5xl' }}>
            <FaAward />
          </IconContext.Provider>
          <div className="relative max-w-xl">
            <Typography
              variant="h2"
              value="Merlin Casas"
              styles="font-extrabold tracking-tight text-slate-900  capitalize"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="-z-10 absolute -bottom-4 left-0 h-[2em] w-full fill-sky-500"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full text-xl text-slate-400">
          <Typography
            variant="span_base"
            value="Datos del animal"
            styles="col-span-2 w-fit px-4 py-1 rounded-full font-semibold text-sky-600 bg-sky-50"
          />
          {petFeatures.map((item) => (
            <article
              key={`petFearures_${item?.name}`}
              className="col-span-2 md:col-span-1 flex items-center gap-3"
            >
              {item?.icon}
              <Typography
                variant="span_base"
                value={`${item?.name}: ${item?.data}`}
                styles="font-medium text-slate-600"
              />
            </article>
          ))}
        </div>
        <div className="space-y-3">
          <Typography
            variant="span_base"
            value="Descripción"
            styles="col-span-2 w-fit px-2 py-1 rounded-full font-semibold text-sky-600 bg-sky-50"
          />
          <Typography
            variant="p_base"
            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            styles="max-w-prose font-medium text-slate-500"
          />
        </div>
        <div className="space-y-3">
          <Typography
            variant="span_base"
            value="Observaciones"
            styles="col-span-2 w-fit px-2 py-1 rounded-full font-semibold text-sky-600 bg-sky-50"
          />
          <Typography
            variant="p_base"
            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            styles="max-w-prose font-medium text-slate-500"
          />
        </div>
      </div>
    </div>
  );
}

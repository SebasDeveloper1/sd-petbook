/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { IconContext } from 'react-icons';
import {
  MdStorage,
  MdDevices,
  MdVolunteerActivism,
  MdOutlinePets,
} from 'react-icons/md';
import { Typography } from 'components/indexComponents';
import image2 from 'images/main-hero3.webp';

export function Advantages() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const advantagesList = [
    {
      name: 'Almacenamiento',
      icon: <MdStorage />,
      value:
        'Registra y almacena la información de tus peludos de manera segura.',
    },

    {
      name: 'Tranquilidad',
      icon: <MdVolunteerActivism />,
      value:
        'Brinda la seguridad de que la información de las mascotas estará siempre disponible.',
    },
    {
      name: 'Cobertura',
      icon: <MdDevices />,
      value: 'Facial acceso en cualquier momento y lugar.',
    },
    {
      name: 'Utilidad',
      icon: <MdOutlinePets />,
      value: 'Enlace público para compartir información de tus peludos.',
    },
  ];
  return (
    <article
      ref={ref}
      className="grid grid-cols-2 justify-center items-center gap-16 w-11/12 mx-auto pt-40"
    >
      <div className="order-2 col-span-2 md:col-span-1 flex flex-col justify-center gap-3 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-discount-check"
          width="3.5rem"
          height="3.5rem"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#65a30d"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
        <Typography
          variant="h2"
          value="Ventajas de elegirnos"
          styles="w-full max-w-prose pb-2 text-2xl font-bold text-slate-900"
        />
        <div className="w-full">
          <Typography
            variant="p_base"
            value="Estamos aquí para ayudarte a mantener a tus peludos amigos sanos, seguros y felices."
            styles="mb-12 font-medium text-slate-600"
          />
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-8 w-full">
          {advantagesList.map((item) => (
            <article
              key={`${item?.name}-${item?.value}`}
              className="col-span-2 md:col-span-1 grid grid-cols-6 justify-center items-center md:items-start gap-3 w-full h-full"
            >
              <figure className="overflow-hidden col-span-2 flex justify-center items-center w-full aspect-square p-4 rounded-full text-sky-500 bg-slate-100">
                <IconContext.Provider value={{ className: 'text-4xl' }}>
                  {item?.icon}
                </IconContext.Provider>
              </figure>
              <div className="col-span-4 w-full">
                <Typography
                  variant="span_lg"
                  value={item?.name}
                  styles="font-bold text-slate-900"
                />
                <Typography
                  variant="span_sm"
                  value={item?.value}
                  styles="font-medium text-slate-600/90"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
      <figure className="order-1 relative col-span-2 flex md:col-span-1 w-full aspect-square">
        <div
          className={`absolute top-0 left-0 w-full aspect-square rounded-full bg-sky-100 ${
            inView ? 'animate-grow' : ''
          }`}
        />
        {inView ? (
          <img
            className="w-full h-full object-contain object-center drop-shadow-xl"
            src={inView ? image2 : null}
            alt="about us 2"
            loading="lazy"
          />
        ) : null}
      </figure>
    </article>
  );
}

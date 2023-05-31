/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { IconContext } from 'react-icons';
import {
  MdOutlineDvr,
  MdOutlineTextSnippet,
  MdOutlinePets,
} from 'react-icons/md';
import { Typography } from 'components/indexComponents';
import image4 from 'images/main-hero4.png';

export function HowWeWork() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const advantagesList = [
    {
      name: 'Registrate en PetBook',
      icon: <MdOutlineDvr />,
      value:
        'Regístrate en nuestra plataforma de manera fácil y rápida utilizando tu cuenta de Google. Después, simplemente completa tu información personal en la sección "Perfil".',
    },

    {
      name: 'Crea tu primera mascota',
      icon: <MdOutlineTextSnippet />,
      value:
        'Entra en la sección "Crear mascota" y completa el formulario con los datos de tu mascota para agregarla a tu lista personal.',
    },
    {
      name: 'Disfruta del perfil de tu mascota',
      icon: <MdOutlinePets />,
      value:
        'Visualiza el perfil de tu querida mascota y comparte su enlace público con cuidadores, veterinarios o incluso agrégalo a su placa de identificación.',
    },
  ];
  return (
    <article
      ref={ref}
      className={`grid grid-cols-2 justify-center items-center gap-16 w-11/12 mx-auto py-40 ${
        inView ? 'animate-slide-in-right' : ''
      }`}
    >
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start w-full h-full space-y-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-award"
          width="3.5rem"
          height="3.5rem"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#ec4899"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
          <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
          <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
        </svg>
        <Typography
          variant="h2"
          value="¿Cómo funcionamos?"
          styles="w-full max-w-prose pb-12 text-2xl font-bold text-slate-900"
        />
        <div className="flex flex-col justify-center items-center gap-8 w-full px-8">
          {advantagesList.map((item) => (
            <article
              key={`${item?.name}-${item?.value}`}
              className="grid grid-cols-6 justify-center items-start gap-3 w-full h-full"
            >
              <figure className="overflow-hidden col-span-1 flex justify-center items-start w-full aspect-square text-pink-500">
                <IconContext.Provider value={{ className: 'text-4xl' }}>
                  {item?.icon}
                </IconContext.Provider>
              </figure>
              <div className="col-span-5 w-full">
                <Typography
                  variant="h5"
                  value={item?.name}
                  styles="font-bold text-slate-900"
                />
                <Typography
                  variant="span_base"
                  value={item?.value}
                  styles="font-medium text-slate-600/90"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
      <figure className="relative col-span-2 flex justify-center items-center md:col-span-1 w-full aspect-square">
        <svg
          viewBox="0 0 1026 1026"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full animate-spin-slow"
        >
          <path
            d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
            stroke="#D4D4D4"
            strokeOpacity="0.7"
          />
          <path
            d="M513 1025C230.23 1025 1 795.77 1 513"
            stroke="url(#:R65m:-gradient-1)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id=":R65m:-gradient-1"
              x1={1}
              y1={513}
              x2={1}
              y2={1025}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0ea5e9" />
              <stop offset={1} stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
        <img
          className="w-full aspect-square object-contain object-center drop-shadow-xl"
          src={image4}
          alt="about us 1"
        />
      </figure>
    </article>
  );
}

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Typography } from 'components/IndexComponents';
import image1 from 'images/main-hero2.png';

export function AboutUs() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <article
      ref={ref}
      className={`grid grid-cols-2 justify-center items-center gap-16 w-11/12 mx-auto pt-28 ${
        inView ? 'animate-slide-in-left' : ''
      }`}
    >
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start w-full h-full space-y-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-heart"
          width="3.5rem"
          height="3.5rem"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#0ea5e9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
        <Typography
          variant="h2"
          value="¿Quiénes Somos?"
          styles="w-full max-w-prose pb-2 text-2xl font-bold text-slate-900"
        />
        <Typography
          variant="p_lg"
          value="¡Reúne toda la información de tus queridos peludos en un solo lugar y accede fácilmente desde cualquier rincón del mundo! PetBook es tu boleto hacia una experiencia pet-friendly sin igual."
          styles="font-normal text-slate-600"
        />
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
        <svg
          viewBox="0 0 1026 1026"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
        >
          <path
            d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
            stroke="#D4D4D4"
            strokeOpacity="0.7"
          />
          <path
            d="M913 513c0 220.914-179.086 400-400 400"
            stroke="url(#:R65m:-gradient-2)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id=":R65m:-gradient-2"
              x1={913}
              y1={513}
              x2={913}
              y2={913}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0ea5e9" />
              <stop offset={1} stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
        <img
          className="w-full aspect-square object-contain object-center drop-shadow-xl"
          src={inView ? image1 : ''}
          alt="about us 1"
        />
      </figure>
    </article>
  );
}

import React from 'react';
import { Typography } from 'components/IndexComponents';
import authorImage from 'images/about-img.jpg';

export function AuthorSection() {
  return (
    <section className="w-full py-24 bg-GenericBlue bg-cover bg-center">
      <div className="w-11/12 mx-auto h-full flex flex-col justify-center items-center">
        <img
          style={{ borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%' }}
          className="w-32 aspect-square mb-6 shadow-lg object-cover object-center"
          src={authorImage}
          alt="SebasDeveloper"
        />
        <Typography
          variant="h2"
          value="@SebasDeveloper"
          styles="w-full max-w-prose mb-6 text-2xl font-bold text-white text-center"
        />
        <Typography
          variant="span_xl"
          value="¿Quieres trabajar conmigo? ¡Hazme un ping!"
          styles="w-full max-w-prose mb-12 font-normal text-slate-50 text-center"
        />
        <a
          href="https://linktr.ee/sebasdeveloperoficial"
          title="@SebasDeveloper contact"
          target="_blank"
          rel="noopener noreferrer"
          className="button-outlined rounded-xl py-2.5 px-6"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}

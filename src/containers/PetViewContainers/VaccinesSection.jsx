import React from 'react';
import { Typography } from 'components/Typography';

const pruebaImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGOT2MauGLQZ0yRHeVA0BCahhXg-8fFmuk9vrwzZuUUmLy5mPL4crwkeJOezDOK-dQBTE&usqp=CAU';

export function VaccinesSection() {
  return (
    <section className="w-11/12 m-auto mb-24">
      <Typography
        variant="h3"
        value="Historial de Vacunación"
        styles="relative border-b pt-12 pb-4 max-w-prose font-semibold text-slate-900 after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-32 after:h-1 after:rounded-full after:bg-cover after:bg-sky-400"
      />

      <ul className="mt-12 mx-auto grid grid-cols-1 gap-6 w-full sm:gap-8 sm:grid-cols-2 md:col-span-3 lg:col-span-4">
        <article className="overflow-hidden grid grid-cols-3 w-full h-full rounded-xl bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
          <figure className="col-span-1 relative h-full after:absolute after:top-0 after:left-0 after:w-full after:h-full after:">
            <img
              className="w-full h-full object-cover object-center"
              src={pruebaImg}
              alt="vaccine"
              loading="lazy"
            />
          </figure>
          <div className="col-span-2 w-full h-full flex flex-col justify-between gap-4 p-3">
            <Typography
              variant="span_sm"
              value="15/jul/2020"
              styles="self-end w-fit px-3 py-0.5 rounded-full font-semibold text-sky-600 bg-sky-50"
            />
            <Typography
              variant="span_base"
              value="Vacuna de parvovirosis, moquillo y dos polivalentes."
              styles="font-semibold text-slate-900 capitalize line-clamp-3"
            />
          </div>
        </article>
      </ul>
    </section>
  );
}

import React from 'react';
import { Typography } from 'components/indexComponents';

export function LoadingSkeletonHome() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-BeamsCover bg-cover bg-top bg-no-repeat">
      <section className="flex flex-col justify-center items-center w-full">
        <section className="overflow-hidden relative flex justify-center items-center w-full min-h-[16rem] py-8 bg-slate-900 lg:h-60 after:absolute after:top-0 after:bottom-0 after:-right-10 after:w-[30rem] after:bg-cover after:bg-center after:bg-no-repeat after:bg-illustrationPet1 after:opacity-10 after:md:opacity-50 after:lg:opacity-100">
          <div className="z-10 w-11/12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start">
              <div className="w-32 aspect-square animate-pulse bg-gray-400 rounded-full lg:w-44 lg:h-44" />
              <div className="overflow-hidden w-full">
                <div className="animate-pulse w-40 h-6 bg-gray-400 mb-4 rounded" />
                <div className="animate-pulse w-48 h-8 bg-gray-400 rounded" />
              </div>
            </div>
          </div>
        </section>
        <div className="w-11/12 pt-16 pb-40">
          <Typography
            variant="h2"
            value="Mis mascotas"
            styles="relative border-b pt-12 pb-4 max-w-prose whitespace-nowrap text-2xl font-semibold text-slate-900 truncate after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-32 after:h-1 after:rounded-full after:bg-cover after:bg-sky-400"
          />
          <ul className="animate-pulse mt-14 mx-auto grid grid-cols-1 gap-6 w-full sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((key) => (
              <li
                key={key}
                className="flex flex-col bg-gray-200 h-40 rounded-lg"
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

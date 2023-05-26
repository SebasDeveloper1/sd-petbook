import React from 'react';
import { Typography } from 'components/indexComponents';

export function LoadingSkeletonPetView() {
  return (
    <div>
      <section className="flex flex-col md:flex-row w-full min-h-screen bg-slate-900">
        <div className="w-full lg:w-2/4 h-60 md:h-screen bg-gray-700 animate-pulse" />
        <div className="flex flex-col items-center w-full sm:1/2 lg:w-2/4 my-9">
          <div className="w-11/12 space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-gray-700 animate-pulse" />
              <div className="z-10 relative w-full">
                <div className="w-full h-8 rounded bg-gray-700" />
                <div className="w-1/2 h-6 mt-1 rounded bg-gray-700 animate-pulse" />
              </div>
            </div>
            <div className="h-60 space-y-6 p-6 rounded-lg border border-slate-800 bg-gray-700 animate-pulse" />
          </div>
        </div>
      </section>
      <section className="pt-12 pb-24">
        <div className="w-11/12 m-auto">
          <Typography
            variant="h3"
            value="Historial de Vacunación"
            styles="relative border-b pt-12 pb-4 max-w-prose font-semibold text-slate-900 after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-32 after:h-1 after:rounded-full after:bg-cover after:bg-sky-400"
          />
          <ul className="mt-12 mx-auto grid grid-cols-1 gap-6 w-full sm:gap-8 sm:grid-cols-2 md:col-span-3 lg:col-span-4">
            <li className="w-full h-40 rounded bg-slate-200 animate-pulse" />
            <li className="w-full h-40 rounded bg-slate-200 animate-pulse" />
          </ul>
        </div>
      </section>
      <section className="w-full pt-12 pb-24 bg-slate-900">
        <div className="flex flex-col justify-center items-center w-11/12 m-auto">
          <div className="relative max-w-xl mb-8">
            {/* Loading skeleton for Typography component */}
            <div className="animate-pulse bg-gray-300 rounded-lg h-16 w-full" />
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute bottom-7 left-0 h-[2em] w-full fill-sky-400"
              preserveAspectRatio="none"
            >
              {/* Loading skeleton for path element */}
              <rect x="0" y="0" width="100%" height="100%" />
            </svg>
          </div>
          <div className="grid grid-cols-3 justify-center items-center gap-6 w-full max-w-2xl px-6 py-8 rounded-xl bg-slate-800">
            <figure className="col-span-3 md:col-span-1 ">
              {/* Loading skeleton for image */}
              <div className="animate-pulse bg-gray-600 rounded-lg h-44 w-44" />
            </figure>

            <section className="col-span-3 md:col-span-2 space-y-3 text-blue-50 text-xl">
              {/* Loading skeleton for article */}
              <div className="animate-pulse bg-gray-600 rounded-lg h-8 w-1/2" />
              <div className="animate-pulse bg-gray-600 rounded-lg h-8 w-2/3" />
              <div className="animate-pulse bg-gray-600 rounded-lg h-8 w-1/2" />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

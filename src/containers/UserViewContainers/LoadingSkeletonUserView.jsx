import React from 'react';
import { Typography } from 'components/indexComponents';

export function LoadingSkeletonUserView() {
  return (
    <section className="flex justify-center w-full min-h-screen py-12 bg-BeamsCover bg-contain bg-top bg-no-repeat">
      <div className="w-11/12">
        <section className="grid grid-cols-3 justify-center gap-6 divide-y md:divide-x md:divide-y-0">
          <div className="col-span-3 md:col-span-1 flex flex-col items-center gap-6">
            <div className="animate-pulse">
              <div className="bg-gray-200 rounded-full w-60 h-60 mb-4" />
              <div className="w-full mb-1">
                <div className="h-6 bg-gray-200 rounded-full" />
              </div>
              <div className="w-full">
                <div className="h-4 bg-gray-200 rounded-full" />
              </div>
            </div>
            <div className="w-full h-12 rounded-md font-semibold bg-gray-200 animate-pulse" />
            <section className="w-full pt-4 border-t">
              <ul className="flex flex-col gap-6 p-4 text-xl text-slate-300">
                {[1, 2, 3, 4, 5].map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-3 animate-pulse"
                  >
                    <div className="bg-gray-200 rounded-full w-8 h-8" />
                    <div className="h-4 bg-gray-200 rounded-full w-1/3" />
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="col-span-3 md:col-span-2 pt-6 md:pl-6 md:py-0">
            <Typography
              variant="h4"
              value="Mascotas registradas"
              styles="pb-8 max-w-prose font-semibold text-slate-900 truncate"
            />
            <ul className="animate-pulse grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
              {[1, 2, 3, 4].map((key) => (
                <li
                  key={key}
                  className="flex flex-col bg-gray-200 h-60 rounded-lg"
                />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

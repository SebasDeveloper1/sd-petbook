import React from 'react';
import { Typography } from 'components/indexComponents';

export function LoadingSkeletonCreateProfile() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center w-full h-full md:h-screen bg-white animate-pulse">
      <div className="relative flex flex-col justify-end items-center w-full lg:w-2/6 h-40 lg:h-full bg-gray-300" />
      <div className="overflow-auto w-full lg:w-4/6 lg:h-screen">
        <div className="flex flex-col justify-center items-center gap-6 md:gap-12 w-full">
          <div className="flex flex-col justify-center items-center gap-6 md:gap-12 w-11/12 md:w-9/12 py-8 md:py-12 mx-auto">
            <Typography
              variant="h3"
              styles="w-full pb-4 font-semibold text-slate-900 border-b border-gray-300"
              value="Crea tu cuenta"
            />

            <div className="flex flex-col items-center gap-4 w-full md:w-1/3 p-6 rounded-md border border-gray-300">
              <div className="w-32 aspect-square rounded-full bg-gray-300" />
              <div className="w-2/3 h-5 rounded-lg bg-gray-300" />
            </div>
            <div className="grid grid-cols-6 gap-6 w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                <div
                  key={`user_${item}`}
                  className="col-span-6 sm:col-span-3 h-10 rounded-md bg-gray-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

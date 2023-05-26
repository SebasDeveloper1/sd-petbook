import React from 'react';
import { Typography } from 'components/indexComponents';

export function LoadingSkeletonCreatePet() {
  return (
    <div className="animate-pulse w-11/12 md:w-10/12 m-auto py-12">
      <Typography
        variant="h3"
        value="Crear mascota"
        styles="pb-4 col-span-3 text-2xl font-semibold tracking-tight text-slate-900"
      />
      <section className="pb-6 border-b md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-6">
        <section className="flex flex-col gap-y-4 md:col-span-1">
          <div className="w-44 md:w-full aspect-square m-auto rounded-md object-cover object-center bg-gray-300" />
          <div className="p-4 rounded-md border border-dashed border-slate-200">
            <div className="h-8 w-full bg-gray-300 rounded-md" />
            <div className="h-8 w-full bg-gray-300 rounded-md mt-4" />
          </div>
        </section>
        <section className="md:col-span-2">
          <div className="py-4 md:px-4 md:pt-0">
            <Typography
              variant="h4"
              value="Datos del animal"
              styles="mb-4 col-span-3 text-2xl font-medium tracking-tight text-slate-900"
            />
            <div className="grid grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div
                  key={`petData_${item}`}
                  className="col-span-6 sm:col-span-2 h-10 rounded-md bg-gray-300"
                />
              ))}
              <div className="col-span-6 md:col-span-3 h-28 rounded-md bg-gray-300" />
              <div className="col-span-6 md:col-span-3 h-28 rounded-md bg-gray-300" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

import React from 'react';
import { Typography } from 'components/indexComponents';

export function LoadingSkeletonEditForm() {
  return (
    <div className="animate-pulse w-11/12 md:w-9/12">
      <Typography
        variant="h4"
        value="Editar perfil"
        styles="pb-4 text-2xl font-semibold tracking-tight text-slate-900"
      />
      <section className="grid grid-cols-3 gap-8 md:gap-16 divide-y md:divide-x md:divide-y-0">
        <section className="flex flex-col gap-y-4 md:col-span-1">
          <div className="w-44 md:w-full aspect-square m-auto rounded-md object-cover object-center bg-gray-300" />
          <div className="p-4 rounded-md border border-dashed border-slate-200">
            <div className="h-8 w-full bg-gray-300 rounded-md" />
            <div className="h-8 w-5/6 bg-gray-300 rounded-md mt-4" />
          </div>
        </section>
        <section className="col-span-3 md:col-span-2 pt-8 md:pl-16 md:py-0">
          <Typography
            variant="h5"
            value="Tus Datos"
            styles="pb-4 text-2xl font-semibold tracking-tight text-slate-900"
          />
          <div className="grid grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div
                key={`userData_${item}`}
                className="col-span-6 sm:col-span-3 h-10 rounded-md bg-gray-300"
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

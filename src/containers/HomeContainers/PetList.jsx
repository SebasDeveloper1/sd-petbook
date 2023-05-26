import React from 'react';
import { Typography } from 'components/indexComponents';

export function PetList({ children } = {}) {
  return (
    <div className="w-11/12 pt-16 pb-40">
      <Typography
        variant="h2"
        value="Mis mascotas"
        styles="relative border-b pt-12 pb-4 max-w-prose whitespace-nowrap text-2xl font-semibold text-slate-900 truncate after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-32 after:h-1 after:rounded-full after:bg-cover after:bg-sky-400"
      />

      <ul className="w-full mt-14 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
        {children}
      </ul>
    </div>
  );
}

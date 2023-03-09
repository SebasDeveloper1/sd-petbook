import React from 'react';
import { Typography } from 'components/indexComponents';

export function PetList({ children }) {
  return (
    <div className="w-11/12 pt-24 pb-32">
      <Typography
        variant="h2"
        value="Mis mascotas"
        styles="border-b pb-4 max-w-prose mb-4 whitespace-nowrap text-2xl font-semibold text-slate-900 truncate"
      />

      <ul className="mt-14 mx-auto grid grid-cols-1 gap-6 w-full sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </ul>
    </div>
  );
}

import React from 'react';
import { Typography } from '../../components/indexComponents';

export function HeaderList() {
  return (
    <section className="flex items-center w-full h-40 px-14 bg-GenericBlue bg-cover bg-no-repeat">
      <Typography
        variant="h2"
        value="Mis mascotas"
        styles="font-semibold text-white"
      />
    </section>
  );
}

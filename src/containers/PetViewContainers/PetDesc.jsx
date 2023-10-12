import React from 'react';
import { Typography } from 'components/indexComponents';

export function PetDesc({ petInfo = {} }) {
  const { petDesc, petObserv } = petInfo;

  if (!petDesc && !petObserv) {
    return null;
  }

  const renderSection = (title, content) => {
    if (content) {
      return (
        <div className="w-full p-4 rounded-md border border-dashed border-sky-200 bg-sky-50 text-sky-600">
          <Typography
            variant="h6"
            value={title}
            styles="mb-1 max-w-prose font-semibold"
          />
          <Typography variant="p_sm" value={content} styles="max-w-prose" />
        </div>
      );
    }
    return null;
  };

  return (
    <section className="flex flex-col gap-6 w-full">
      {renderSection('Descripción', petDesc)}
      {renderSection('Observaciones', petObserv)}
    </section>
  );
}

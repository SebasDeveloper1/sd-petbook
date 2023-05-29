import React from 'react';
import { Typography } from 'components/indexComponents';
import defaultImage from 'images/loading-image.gif';

export function VaccineCard({ vaccineInfo = {} } = {}) {
  return (
    <li
      key={vaccineInfo?.id}
      className="relative overflow-hidden grid grid-cols-6 gap-3 items-center w-full h-full p-4 rounded-2xl bg-sky-400/10"
    >
      <div className="col-span-4 order-1 w-full h-full flex flex-col justify-between gap-2">
        <div className="w-full">
          <Typography
            variant="span_sm"
            value={vaccineInfo?.date}
            styles="w-full font-semibold text-sky-500"
          />
          <Typography
            variant="span_lg"
            value={vaccineInfo?.vaccine}
            styles="mb-2 font-semibold text-sky-600 capitalize"
          />
          <Typography
            variant="span_sm"
            value={`Veterinario: ${vaccineInfo?.vet}`}
            styles="font-medium text-sky-900"
          />
          <Typography
            variant="span_sm"
            value={`TP: ${vaccineInfo?.professionalCard}`}
            styles="font-medium text-sky-900"
          />
          <Typography
            variant="span_sm"
            value={`Proposito: ${vaccineInfo?.purpose}`}
            styles="font-medium text-sky-900"
          />
        </div>
      </div>
      <img
        className="col-span-2 order-2 aspect-square rounded-full object-cover object-center"
        src={vaccineInfo?.image || defaultImage}
        alt="vaccineInfo"
        loading="lazy"
      />
    </li>
  );
}

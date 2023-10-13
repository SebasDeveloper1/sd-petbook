import React from 'react';
import { Typography } from 'components/indexComponents';

export function VaccineCard({ vaccineInfo = {} }) {
  const { id, date, vaccine, purpose } = vaccineInfo;

  return (
    <li
      key={id}
      className="relative overflow-hidden rounded-xl shadow-lg bg-sky-200/50 md:hover:scale-105 transition-all duration-300"
    >
      <div className="absolute -top-3 -right-3 text-sky-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-vaccine"
          width={100}
          height={100}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3l4 4" />
          <path d="M19 5l-4.5 4.5" />
          <path d="M11.5 6.5l6 6" />
          <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
          <path d="M7.5 12.5l1.5 1.5" />
          <path d="M10.5 9.5l1.5 1.5" />
          <path d="M3 21l3 -3" />
        </svg>
      </div>
      <button
        className="z-10 relative w-full h-full p-4 text-start"
        type="button"
        onClick={() => console.log('hola')}
      >
        <div className="w-full h-full">
          <Typography
            variant="span_xs"
            value={date}
            styles="inline-block w-auto px-2 py-0.5 mb-2 rounded-full font-semibold text-white bg-sky-400"
          />
          <div className="w-full">
            <Typography
              variant="span_base"
              value={vaccine}
              styles="mb-2 font-semibold text-sky-900 capitalize leading-5"
            />
          </div>
          <Typography
            variant="span_xs"
            value={`Propósito: ${purpose}`}
            styles="font-medium text-sky-900"
          />
        </div>
      </button>
    </li>
  );
}

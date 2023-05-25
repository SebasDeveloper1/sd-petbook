import React from 'react';
import { Typography } from 'components/indexComponents';
import defaultImage from 'images/profile-picture.png';

export function VaccineCard({ vaccineInfo = {} } = {}) {
  return (
    <li
      key={vaccineInfo?.id}
      className="overflow-hidden flex flex-col items-center w-full rounded-xl"
    >
      <img
        className="w-full aspect-square object-cover object-center"
        src={vaccineInfo?.image || defaultImage}
        alt="vaccineInfo"
        loading="lazy"
      />
      <div className=" w-full h-full flex flex-col justify-between gap-2 p-3 bg-slate-900 shadow-lg">
        <div>
          <Typography
            variant="span_base"
            value={vaccineInfo?.vaccine}
            styles="font-semibold text-white capitalize"
          />
          <Typography
            variant="span_sm"
            value={vaccineInfo?.date}
            styles="w-fit mb-3 font-medium text-sky-400"
          />
          <Typography
            variant="span_sm"
            value={vaccineInfo?.purpose}
            styles="font-normal text-slate-400"
          />
        </div>
      </div>
    </li>
  );
}

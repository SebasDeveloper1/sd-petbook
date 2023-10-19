import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import {
  FaCalendarDay,
  FaUserMd,
  FaIdCard,
  FaVirusSlash,
} from 'react-icons/fa';
import { IconButton, Typography } from 'components/indexComponents';
import defaultImage from 'images/loading-image.gif';

export function VaccineDetails({ vaccineInfo = {}, handleCloseModal = null }) {
  const { date, vaccine, purpose, image, vet, professionalCard } = vaccineInfo;
  const [imageUrl, setImageUrl] = useState(defaultImage);

  useEffect(() => {
    if (image) setImageUrl(image);
  });

  const infoCard = [
    { name: 'Fecha de aplicación', icon: <FaCalendarDay />, data: date },
    { name: 'Veterinario', icon: <FaUserMd />, data: vet },
    { name: 'TP', icon: <FaIdCard />, data: professionalCard },
    { name: 'Propósito', icon: <FaVirusSlash />, data: purpose },
  ];

  return (
    <div
      className="overflow-hidden relative flex flex-col gap-4 w-10/12 max-w-xl h-fit max-h-[80vh] rounded-xl text-center bg-slate-800 shadow-2xl focus"
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-paw-filled absolute -top-20 -left-20 transform rotate-45 text-sky-400/5"
        width={480}
        height={480}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 10c-1.32 0 -1.983 .421 -2.931 1.924l-.244 .398l-.395 .688a50.89 50.89 0 0 0 -.141 .254c-.24 .434 -.571 .753 -1.139 1.142l-.55 .365c-.94 .627 -1.432 1.118 -1.707 1.955c-.124 .338 -.196 .853 -.193 1.28c0 1.687 1.198 2.994 2.8 2.994l.242 -.006c.119 -.006 .234 -.017 .354 -.034l.248 -.043l.132 -.028l.291 -.073l.162 -.045l.57 -.17l.763 -.243l.455 -.136c.53 -.15 .94 -.222 1.283 -.222c.344 0 .753 .073 1.283 .222l.455 .136l.764 .242l.569 .171l.312 .084c.097 .024 .187 .045 .273 .062l.248 .043c.12 .017 .235 .028 .354 .034l.242 .006c1.602 0 2.8 -1.307 2.8 -3c0 -.427 -.073 -.939 -.207 -1.306c-.236 -.724 -.677 -1.223 -1.48 -1.83l-.257 -.19l-.528 -.38c-.642 -.47 -1.003 -.826 -1.253 -1.278l-.27 -.485l-.252 -.432c-1.011 -1.696 -1.618 -2.099 -3.053 -2.099z"
          strokeWidth={0}
          fill="currentColor"
        />
        <path
          d="M19.78 7h-.03c-1.219 .02 -2.35 1.066 -2.908 2.504c-.69 1.775 -.348 3.72 1.075 4.333c.256 .109 .527 .163 .801 .163c1.231 0 2.38 -1.053 2.943 -2.504c.686 -1.774 .34 -3.72 -1.076 -4.332a2.05 2.05 0 0 0 -.804 -.164z"
          strokeWidth={0}
          fill="currentColor"
        />
        <path
          d="M9.025 3c-.112 0 -.185 .002 -.27 .015l-.093 .016c-1.532 .206 -2.397 1.989 -2.108 3.855c.272 1.725 1.462 3.114 2.92 3.114l.187 -.005a1.26 1.26 0 0 0 .084 -.01l.092 -.016c1.533 -.206 2.397 -1.989 2.108 -3.855c-.27 -1.727 -1.46 -3.114 -2.92 -3.114z"
          strokeWidth={0}
          fill="currentColor"
        />
        <path
          d="M14.972 3c-1.459 0 -2.647 1.388 -2.916 3.113c-.29 1.867 .574 3.65 2.174 3.867c.103 .013 .2 .02 .296 .02c1.39 0 2.543 -1.265 2.877 -2.883l.041 -.23c.29 -1.867 -.574 -3.65 -2.174 -3.867a2.154 2.154 0 0 0 -.298 -.02z"
          strokeWidth={0}
          fill="currentColor"
        />
        <path
          d="M4.217 7c-.274 0 -.544 .054 -.797 .161c-1.426 .615 -1.767 2.562 -1.078 4.335c.563 1.451 1.71 2.504 2.941 2.504c.274 0 .544 -.054 .797 -.161c1.426 -.615 1.767 -2.562 1.078 -4.335c-.563 -1.451 -1.71 -2.504 -2.941 -2.504z"
          strokeWidth={0}
          fill="currentColor"
        />
      </svg>

      <div className="z-10 flex justify-end w-full border-b border-slate-700">
        <IconButton
          type="button"
          variant="text"
          title="Cerrar"
          styles="w-14 h-14 text-slate-500 hover:text-sky-500"
          icon={<MdClose />}
          handleOnClick={handleCloseModal}
          ariaLabel="Cerrar"
        />
      </div>

      <div className="w-full px-6 mb-2">
        <Typography
          variant="h5"
          value={vaccine}
          styles="font-semibold text-sky-500 capitalize leading-5"
        />
      </div>
      <div className="z-10 overflow-auto grid grid-cols-7 justify-center items-center gap-4 md:gap-0 w-full h-full p-6 pt-0">
        <div className="col-span-7 md:col-span-4 w-full h-full md:px-4 text-start text-white">
          {infoCard.map((item) => (
            <article
              key={`Vaccine_${item?.name}`}
              className="flex items-center gap-4 mb-4 text-xl text-slate-400"
            >
              {item?.icon}
              <div className="w-full">
                <Typography
                  variant="span_base"
                  value={item?.data}
                  styles="text-white"
                />
                <Typography variant="span_xs" value={item?.name} styles="" />
              </div>
            </article>
          ))}
        </div>
        <div className="col-span-7 md:col-span-3 w-full md:px-4">
          <img
            className="w-full auto rounded-lg object-center bg-slate-800"
            src={imageUrl}
            alt={`Vaccine ${vaccine}`}
          />
        </div>
      </div>
    </div>
  );
}

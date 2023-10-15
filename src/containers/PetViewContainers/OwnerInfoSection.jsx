/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLink, FaMapMarkerAlt } from 'react-icons/fa';
import { Typography } from 'components/indexComponents';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import defaultImage from 'images/profile-picture.webp';

const dataTypes = {
  TEXT: 'text',
  URL: 'url',
  MAIL: 'mail',
  TEL: 'tel',
};

const msmByDefault = 'No disponible';
export function OwnerInfoSection({ petInfo = {} }) {
  const {
    ownerCcp,
    ownerCell,
    ownerCity,
    ownerCountry,
    ownerEmail,
    ownerImage,
    ownerNames,
    ownerSurnames,
    ownerWebsite,
  } = petInfo;
  const [pictureUrl, setPictureUrl] = useState(defaultImage);

  useEffect(() => {
    const fetchPictureUrl = async () => {
      try {
        if (ownerImage) {
          const urlImage = await getStorageImageUrl({ path: ownerImage });
          setPictureUrl(urlImage);
        } else {
          setPictureUrl(defaultImage);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPictureUrl();
  }, [ownerImage]);

  const ownerInfo = [
    {
      type: dataTypes.TEL,
      name: 'cell',
      icon: <FaPhone />,
      data: `${ownerCcp} / ${ownerCell}` || msmByDefault,
    },
    {
      type: dataTypes.MAIL,
      name: 'email',
      icon: <FaEnvelope />,
      data: ownerEmail || msmByDefault,
    },
    {
      type: dataTypes.URL,
      name: 'website',
      icon: <FaLink />,
      data: ownerWebsite || msmByDefault,
    },
    {
      type: dataTypes.TEXT,
      name: 'address',
      icon: <FaMapMarkerAlt />,
      data: `${ownerCity} / ${ownerCountry}` || msmByDefault,
    },
  ];
  return (
    <section className="w-full pb-24">
      <div className="relative overflow-hidden grid grid-cols-3 justify-center items-center gap-4 md:gap-0 w-full p-5 md:p-0 mx-auto rounded-xl bg-slate-900 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-paw-filled absolute -top-10 -right-10 transform -rotate-45 text-sky-400/10"
          width={380}
          height={380}
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

        <figure className="z-10 col-span-3 md:col-span-1 flex justify-center items-center h-full">
          <img
            className="w-3/5 md:w-auto md:h-full rounded-full border-4 border-sky-400 md:rounded-none md:border-none aspect-square object-cover object-center"
            src={pictureUrl || defaultImage}
            alt={ownerNames}
            loading="lazy"
          />
        </figure>

        <section className="z-10 col-span-3 md:col-span-2 md:p-8 space-y-3 text-blue-50 text-xl">
          <div className="w-full pb-2 leading-3">
            <Typography
              variant="span_sm"
              value="Responsable"
              styles="text-sky-400 capitalize text-center md:text-start"
            />
            <Typography
              variant="h5"
              value={`${ownerNames} ${ownerSurnames}` || msmByDefault}
              styles="font-semibold text-white capitalize text-center md:text-start"
            />
          </div>
          {ownerInfo.map((item) =>
            item.type === dataTypes.TEXT ? (
              <article
                key={`petFearures_${item?.name}`}
                className="col-span-2 md:col-span-1 flex items-center gap-3 text-slate-300"
              >
                {item?.icon}
                <Typography
                  variant="span_base"
                  value={item?.data}
                  styles="truncate capitalize"
                />
              </article>
            ) : item?.data !== msmByDefault ? (
              <article
                key={`petFearures_${item?.name}`}
                className="group col-span-2 md:col-span-1 flex items-center gap-3 text-slate-300 hover:text-sky-500"
              >
                {item?.icon}
                <a
                  href={
                    item?.type === dataTypes.URL
                      ? item?.data
                      : item?.type === dataTypes.MAIL
                      ? `mailto:${item?.data}`
                      : `tel:${item?.data}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full truncate"
                  title={
                    item?.type === dataTypes.URL
                      ? 'Ir a sitio web'
                      : item?.type === dataTypes.MAIL
                      ? 'Enviar correo electrónico'
                      : 'Llamar'
                  }
                >
                  <Typography
                    variant="span_base"
                    value={item?.data}
                    styles="hover:text-sky-500 group-hover:underline truncate"
                  />
                </a>
              </article>
            ) : null
          )}
        </section>
      </div>
    </section>
  );
}

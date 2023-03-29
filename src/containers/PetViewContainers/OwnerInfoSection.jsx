import React from 'react';
import {
  FaUserAstronaut,
  FaPhone,
  FaEnvelope,
  FaLink,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Typography } from 'components/indexComponents';

export function OwnerInfoSection() {
  const ownerInfo = [
    {
      name: 'name',
      icon: <FaUserAstronaut />,
      data: 'Jessica Lorena Casas Garcia',
    },
    { name: 'cell', icon: <FaPhone />, data: '12345678980' },
    { name: 'email', icon: <FaEnvelope />, data: 'correo@correo.com' },
    { name: 'website', icon: <FaLink />, data: 'facebook/jlcasas' },
    { name: 'address', icon: <FaMapMarkerAlt />, data: 'Ubaté/Cundinamarca' },
  ];
  return (
    <section className="w-full pt-12 pb-24 bg-slate-900">
      <div className="flex flex-col justify-center items-center w-11/12 m-auto">
        <div className="relative max-w-xl mb-8">
          <Typography
            variant="h3"
            value="Información del Propietario"
            styles="z-10 relative pt-12 pb-12 max-w-prose font-semibold text-white after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-32 after:h-1 after:rounded-full after:bg-
            cover after:bg-slate-800"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute bottom-7 left-0 h-[2em] w-full fill-sky-400"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
        </div>
        <div className="grid grid-cols-3 justify-center items-center gap-6 w-full max-w-2xl px-6 py-8 rounded-xl bg-blue-600">
          <figure className="col-span-3 md:col-span-1 ">
            <img
              style={{ borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%' }}
              className="w-44 mx-auto aspect-square border-4 border-blue-500 shadow-lg object-cover object-center"
              src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Bonnie"
            />
          </figure>

          <section className="col-span-3 md:col-span-2 space-y-3 text-blue-50 text-xl">
            {ownerInfo.map((item) => (
              <article
                key={`petFearures_${item?.name}`}
                className="col-span-2 md:col-span-1 flex items-center gap-3"
              >
                {item?.icon}
                <Typography
                  variant="span_base"
                  value={item?.data}
                  styles="text-white"
                />
              </article>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}

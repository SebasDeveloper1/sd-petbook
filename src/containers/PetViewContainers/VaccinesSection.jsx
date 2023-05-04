import React, { useState, useEffect } from 'react';
import { Typography } from 'components/Typography';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import defaultImage from 'images/profile-picture.png';

export function VaccinesSection({ petInfo = {} }) {
  const { vaccinesList = [] } = petInfo;
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    const fetchPictureUrl = async () => {
      try {
        const newList = await Promise.allSettled(
          vaccinesList.map(async (vaccine) => {
            if (vaccine.image) {
              const urlImage = await getStorageImageUrl({
                path: vaccine.image,
              });
              return { ...vaccine, image: urlImage };
            }
            return { ...vaccine, image: defaultImage };
          })
        );
        const settledList = newList.filter(
          (result) => result.status === 'fulfilled'
        );
        const vaccinesWithImages = settledList.map((result) => result.value);
        setVaccines(vaccinesWithImages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPictureUrl();
  }, [vaccinesList]);

  return (
    <section className="pt-12 pb-24">
      <div className="w-11/12 m-auto">
        <Typography
          variant="h3"
          value="Historial de Vacunación"
          styles="relative border-b pt-12 pb-4 max-w-prose font-semibold text-slate-900 after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-32 after:h-1 after:rounded-full after:bg-cover after:bg-sky-400"
        />

        <ul className="mt-12 mx-auto grid grid-cols-1 gap-6 w-full sm:gap-8 sm:grid-cols-2 md:col-span-3 lg:col-span-4">
          {vaccines.length > 0 ? (
            vaccines.map((vaccine) => (
              <article
                key={vaccine.id}
                className="overflow-hidden grid grid-cols-3 w-full h-full rounded-xl bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500"
              >
                <figure className="col-span-1 relative h-full after:absolute after:top-0 after:left-0 after:w-full after:h-full after:">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={vaccine.image || defaultImage}
                    alt="vaccine"
                    loading="lazy"
                  />
                </figure>
                <div className="col-span-2 w-full h-full flex flex-col justify-between gap-4 p-3">
                  <Typography
                    variant="span_sm"
                    value={vaccine.date}
                    styles="self-end w-fit px-3 py-0.5 rounded-full font-semibold text-sky-600 bg-sky-50"
                  />
                  <Typography
                    variant="span_base"
                    value={vaccine.vaccine}
                    styles="font-semibold text-slate-900 capitalize line-clamp-3"
                  />
                </div>
              </article>
            ))
          ) : (
            <li className="col-span-2 flex justify-center items-center w-full h-20 rounded-xl border-dashed border-2 border-slate-300">
              <Typography
                variant="span_xl"
                value="Historial no disponible"
                styles="font-semibold text-sky-400"
              />
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Typography } from 'components/Typography';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import { getDate } from 'utils/dateFunctions';
import defaultImage from 'images/profile-picture.png';

export function VaccinesSection({ petInfo = {} }) {
  const { vaccinesList = [] } = petInfo;
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    const fetchPictureUrl = async () => {
      try {
        const newList = await Promise.allSettled(
          vaccinesList.map(async (vaccine) => {
            const { image, date, ...rest } = vaccine;
            let imageSrc = defaultImage;

            if (image) {
              try {
                imageSrc = await getStorageImageUrl({ path: image });
              } catch (error) {
                console.error(error);
              }
            }

            return {
              ...rest,
              date: getDate(date),
              image: imageSrc,
            };
          })
        );

        const vaccinesWithImages = newList
          .filter((result) => result.status === 'fulfilled')
          .map((result) => result.value);

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

        <ul className="mt-12 mx-auto grid grid-cols-1 gap-6 w-full sm:gap-8 md:grid-cols-2 lg:grid-cols-5">
          {vaccines.length > 0 ? (
            vaccines.map((vaccine) => (
              <li
                key={vaccine?.id}
                className="overflow-hidden flex flex-col items-center w-full rounded-xl"
              >
                <img
                  className="w-full aspect-square object-cover object-center"
                  src={vaccine?.image || defaultImage}
                  alt="vaccine"
                  loading="lazy"
                />
                <div className=" w-full h-full flex flex-col justify-between gap-2 p-3 bg-slate-900 shadow-lg">
                  <div>
                    <Typography
                      variant="span_base"
                      value={vaccine?.vaccine}
                      styles="font-semibold text-white capitalize"
                    />
                    <Typography
                      variant="span_sm"
                      value={vaccine?.date}
                      styles="w-fit mb-3 font-medium text-sky-400"
                    />
                    <Typography
                      variant="span_sm"
                      value={vaccine?.purpose}
                      styles="font-normal text-slate-400"
                    />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="col-span-1 md:col-span-2 lg:col-span-5 flex justify-center items-center w-full h-20 rounded-xl border-dashed border-2 border-slate-300">
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

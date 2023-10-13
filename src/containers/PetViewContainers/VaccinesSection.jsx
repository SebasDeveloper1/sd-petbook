import React, { useState, useEffect } from 'react';
import { Typography, VaccineCard } from 'components/indexComponents';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import { getDate } from 'utils/dateFunctions';
import defaultImage from 'images/no_image_available.webp';

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
    <section>
      <Typography
        variant="h3"
        value="Historial de Vacunación"
        styles="relative border-b pt-8 pb-4 max-w-prose font-semibold text-slate-900 after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-32 after:h-1 after:rounded-full after:bg-cover after:bg-sky-400"
      />

      <ul className="mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-full sm:gap-8">
        {vaccines.length > 0 ? (
          vaccines.map((vaccine) => (
            <VaccineCard
              key={`VaccineCard-${vaccine.id}`}
              vaccineInfo={vaccine}
            />
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
    </section>
  );
}

/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'components/indexComponents';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import { getPetAge } from 'utils/getPetAge';
import defaultImage from 'images/profile-picture.png';

export function PetCart({ petInfo = {} }) {
  const { id: petId, petImage = '', petName, petBirthdate } = petInfo;
  const [imageUrl, setImageUrl] = useState('');
  const [birthdate, setBirthdate] = useState('');

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        if (petImage !== '') {
          const urlImage = petImage
            ? await getStorageImageUrl({ path: petImage })
            : defaultImage;
          setImageUrl(urlImage);
        }
      } catch (error) {
        console.error(error);
      }
    }

    setBirthdate(getPetAge(petBirthdate));
    fetchUserInfo();
  }, [petInfo]);

  return (
    <Link
      to={`/pet/${petName}+${petId}`}
      className="group relative block overflow-hidden rounded-xl"
    >
      <img
        src={imageUrl || defaultImage}
        alt={petName}
        className="w-full aspect-video object-cover object-center transition-transform md:group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-700/50 via-gray-900/50 to-black/50 transition-transform md:group-hover:-translate-y-full">
        <div className="relative w-full h-full flex items-end p-2 sm:p-4">
          <div className="w-full">
            <Typography
              variant="span_xl"
              value={petName}
              styles="text-2xl font-semibold tracking-tight text-white truncate capitalize"
            />
            <Typography
              variant="span_sm"
              value={birthdate}
              styles="font-medium tracking-tight text-slate-50 truncate"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

import React, { useState, useEffect } from 'react';
import { Typography } from 'components/indexComponents';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import defaultImage from 'images/profile-picture.png';

export function HeaderList({ userInfo } = {}) {
  const { profilePicture, username, email } = userInfo;
  const [userImageUrl, setUserImageUrl] = useState(defaultImage);

  useEffect(() => {
    if (profilePicture) {
      (async () => {
        const url = await getStorageImageUrl({
          path: profilePicture,
        });
        return setUserImageUrl(url);
      })();
    }
  }, []);

  return (
    <section className="overflow-hidden relative flex justify-center items-center w-full min-h-[16rem] py-8 bg-slate-900 lg:h-60 after:absolute after:top-0 after:bottom-0 after:-right-10 after:w-[30rem] after:bg-cover after:bg-center after:bg-no-repeat after:bg-illustrationPet1 after:opacity-10 after:md:opacity-50 after:lg:opacity-100">
      <div className="z-10 w-11/12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start">
          <img
            style={{ borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%' }}
            className="w-32 h-32 shadow-lg object-cover object-center lg:w-44 lg:h-44"
            src={userImageUrl || defaultImage}
            alt="Bonnie"
          />
          <div className="overflow-hidden w-full">
            <Typography
              variant="span_xl"
              value="Bienvenido"
              styles="font-medium tracking-tight text-sky-500 truncate"
            />
            <Typography
              variant="h2"
              value={username || 'username'}
              styles="font-bold tracking-tight text-white truncate capitalize"
            />
            <Typography
              variant="span_sm"
              value={email}
              styles="font-normal text-slate-400 tracking-wide truncate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Typography, Button } from 'components/indexComponents';
import defaultImage from 'images/profile-picture.png';
import { FaUserAstronaut } from 'react-icons/fa';

export function HeaderList({ userInfo } = {}) {
  const { profilePicture, username, email } = userInfo;
  return (
    <section className="relative flex justify-center items-center w-full h-72 bg-slate-900 after:absolute after:inset-0 after:bg-cover after:bg-BlurCyan">
      <div className="z-10 flex flex-col justify-between gap-12 w-11/12 md:flex-row md:items-center">
        <div className="flex items-center space-x-6">
          <img
            className="w-24 h-24 rounded-full shadow-lg object-cover object-center lg:w-36 lg:h-36"
            src={profilePicture || defaultImage}
            alt="Bonnie"
          />
          <div className="w-full">
            <Typography
              variant="span_lg"
              value="Bienvenido"
              styles="font-medium tracking-tight text-slate-100 truncate"
            />
            <Typography
              variant="h3"
              value={username || 'username'}
              styles="text-2xl font-bold tracking-tight truncate capitalize bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-transparent"
            />
            <Typography
              variant="span_sm"
              value={email}
              styles="font-medium text-slate-400 truncate"
            />
          </div>
        </div>
        <Button
          type="button"
          variant="contained"
          styles=""
          value="Ver perfil"
          startIcon={<FaUserAstronaut />}
        />
      </div>
    </section>
  );
}

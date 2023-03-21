import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from 'components/indexComponents';
import defaultImage from 'images/profile-picture.png';
import { FaUserAstronaut } from 'react-icons/fa';

export function HeaderList({ userInfo } = {}) {
  const { profilePicture, username, email } = userInfo;
  const navigate = useNavigate();

  const handlerProfileButton = () => {
    navigate('/p/edit');
  };

  return (
    <section className="relative flex justify-center items-center w-full min-h-[16rem] py-8 bg-slate-900 lg:h-60 after:absolute after:inset-0 after:bg-cover after:bg-BlurCyan">
      <div className="z-10 flex flex-col justify-between gap-12 w-11/12 md:flex-row md:items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start">
          <img
            className="w-28 h-28 rounded-full shadow-lg object-cover object-center lg:w-36 lg:h-36"
            src={profilePicture || defaultImage}
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
        <Button
          type="button"
          variant="contained"
          styles=""
          value="Editar perfil"
          startIcon={<FaUserAstronaut />}
          handlerOnClick={handlerProfileButton}
        />
      </div>
    </section>
  );
}

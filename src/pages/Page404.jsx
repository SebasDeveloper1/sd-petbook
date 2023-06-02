import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Typography, Button, MetaHead } from 'components/indexComponents';
import {
  DashboardWrapper,
  DashboardWrapperNoLogin,
} from 'containers/indexContainers';
import { useGetUserState } from 'hooks/useGetUserState';
import illustration404 from 'images/404Not-Found.svg';

export default function Page404() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  /*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
  5: exists usuername
*/
  const handlerUserLoggedIn = async (user) => {
    setCurrentUser(user);
    return 2;
  };

  const handlerUserNotRegistered = () => 3;

  const handlerUserNotLoggedIn = () => 4;

  const { getStateUser } = useGetUserState({
    onUserLoggedIn: handlerUserLoggedIn,
    onUserNotLoggedIn: handlerUserNotLoggedIn,
    onUserNotRegistered: handlerUserNotRegistered,
  });

  useEffect(() => {
    getStateUser();
  }, []);

  const WrapperComponent = currentUser
    ? DashboardWrapper
    : DashboardWrapperNoLogin;

  const handlerGoToBack = () => {
    navigate(-1);
  };

  return (
    <>
      <MetaHead
        title="PetBook | Error 404 - Página no encontrada"
        description="Plataforma para el almacenamiento y gestión de hojas de vida de mascotas."
        name="petbook"
        type="article"
        url={document.location.href}
      />
      <WrapperComponent>
        <section className="flex justify-center items-center w-full min-h-screen bg-slate-900">
          <div className="flex flex-col justify-center items-center gap-8 w-11/12 text-center">
            <img
              className="w-full max-w-sm aspect-square"
              src={illustration404}
              alt="Page not found"
              loading="lazy"
            />
            <div className="flex flex-col justify-center items-center gap-3 w-full">
              <Typography
                variant="h2"
                value="😥 Hmmm! 😥"
                styles="font-semibold text-white"
              />
              <Typography
                variant="span_xl"
                value="No encontramos lo que estabas buscando."
                styles="font-medium text-sky-300"
              />
            </div>
            <Button
              type="button"
              variant="contained"
              styles=""
              value="Regresar"
              startIcon={<MdKeyboardArrowLeft />}
              handleOnClick={handlerGoToBack}
            />
          </div>
        </section>
      </WrapperComponent>
    </>
  );
}

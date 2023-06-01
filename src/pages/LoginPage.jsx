/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Logo, Button, Typography, MetaHead } from 'components/indexComponents';
import { loginWithGoogle } from 'fbase/authFunctions';
import { useGetUserState } from 'hooks/useGetUserState';
import coverLogin from 'images/cover-login.jpg';

export default function LoginPage() {
  const navigate = useNavigate();
  const handlerUserLoggedIn = () => {
    navigate('/home');
    return 2;
  };
  const handlerUserNotRegistered = () => {
    navigate('/choose-username');
    return 3;
  };

  const handlerUserNotLoggedIn = () => 4;

  const { getStateUser } = useGetUserState({
    onUserLoggedIn: handlerUserLoggedIn,
    onUserNotLoggedIn: handlerUserNotLoggedIn,
    onUserNotRegistered: handlerUserNotRegistered,
  });

  useEffect(() => {
    getStateUser();
  }, []);

  return (
    <>
      <MetaHead
        title="PetBook | Inicio de sesión o crea una cuenta"
        description="Plataforma para el almacenamiento y gestión de hojas de vida de mascotas."
        name="petbook"
        type="article"
        url={document.location.href}
      />
      <div className="flex flex-col items-center space-y-4 h-screen lg:flex-row lg:justify-center lg:space-y-0 bg-slate-900">
        <figure className="relative h-2/6 w-full lg:w-3/5 lg:h-screen after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t from-sky-500 to-indigo-500 after:opacity-20">
          <img
            className="w-full h-full object-cover object-center"
            src={coverLogin}
            alt="banner pets"
          />
        </figure>
        <section className="flex justify-center w-full lg:w-2/5 lg:h-scree">
          <div className="w-11/12 max-w-2xl px-4 py-8 lg:w-9/12 space-y-6 rounded-md divide-y divide-slate-600">
            <section className="flex flex-col items-center">
              <Typography
                variant="h3"
                styles="mb-2 text-center text-slate-50"
                value="Bienvenido a"
              />
              <Logo className="mb-12 w-9/12" alt="PetBook" />
              <Typography
                variant="span_lg"
                styles="text-center text-slate-400"
                value="Inicia sesión con tu cuenta de Google para continuar"
              />
            </section>
            <form>
              <Button
                type="button"
                variant="outlined"
                styles="w-full mt-6"
                value="Continuar con Google"
                startIcon={<FcGoogle />}
                handleOnClick={loginWithGoogle}
              />
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

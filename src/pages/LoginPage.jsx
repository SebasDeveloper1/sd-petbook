/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { loginWithGoogle } from 'fbase/authFunctions';
import { useGetUserState } from 'hooks/useGetUserState';
import { Logo, Button, Typography } from 'components/indexComponents';

export function LoginPage() {
  const navigate = useNavigate();
  const coverLogin =
    'https://firebasestorage.googleapis.com/v0/b/petbook-ea7b2.appspot.com/o/WebImages%2Fcover-login.jpg?alt=media&token=22429f9f-00cc-4cd4-8838-fc77508570e4';
  const handlerUserLoggedIn = () => {
    navigate('/dashboard');
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
    <div className="flex flex-col items-center space-y-4 h-screen lg:flex-row lg:justify-center lg:space-y-0 bg-white">
      <figure className="relative h-2/6 w-full lg:w-3/5 lg:h-screen after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t from-sky-500 to-indigo-500 after:opacity-20">
        <img
          className="w-full h-full object-cover object-center"
          src={coverLogin}
          alt="banner pets"
        />
      </figure>
      <section className="flex justify-center w-full lg:w-2/5 lg:h-scree">
        <div className="w-11/12 max-w-2xl px-4 py-8 lg:w-9/12 space-y-6 rounded-lg divide-y divide-slate-300">
          <section className="flex flex-col items-center">
            <Typography
              variant="h3"
              styles="mb-2 text-center text-sky-900"
              value="Bienvenido a"
            />
            <Logo className="mb-12" alt="PetBook" />
            <Typography
              variant="span_lg"
              styles="text-center text-sky-700"
              value="Inicia sesión con tu cuenta para continuar"
            />
          </section>
          <form>
            <Button
              type="button"
              variant="outlined"
              styles="w-full mt-6"
              value="Continuar con Google"
              startIcon={<FcGoogle />}
              onClick={loginWithGoogle}
            />
          </form>
        </div>
      </section>
    </div>
  );
}

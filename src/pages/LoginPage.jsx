/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import { loginWithGoogle } from 'fbase/authFunctions';
import { useGetUserState } from 'hooks/useGetUserState';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FcGoogle } from 'react-icons/fc';

export function LoginPage() {
  const navigate = useNavigate();

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
    <div className="flex flex-col items-center space-y-12 min-h-screen lg:flex-row lg:justify-center lg:space-y-0">
      <div className="lg:w-1/2 lg:h-screen">
        <img
          className="w-full h-full object-cover object-center"
          src="https://images.pexels.com/photos/8734467/pexels-photo-8734467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="banner pets"
        />
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2 lg:h-screen ">
        <div className="w-11/12 lg:w-8/12 space-y-6">
          <div className="space-y-12">
            <img
              className="mx-auto h-12 w-auto"
              src="https://i.postimg.cc/BnJ3LsJv/lOGO.png"
              alt="PetBook"
            />
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Inicia sesión en tu cuenta para continuar
            </h2>
          </div>
          <form>
            <button
              type="button"
              className="group inline-flex items-center justify-center w-full rounded-full py-2.5 px-4 ring-1 text-md font-medium focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 "
              onClick={loginWithGoogle}
            >
              <IconContext.Provider value={{ className: 'text-3xl mr-3' }}>
                <FcGoogle />
              </IconContext.Provider>
              Continuar con Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

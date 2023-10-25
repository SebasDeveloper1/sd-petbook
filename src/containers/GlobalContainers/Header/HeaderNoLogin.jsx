import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdLogin } from 'react-icons/md';
import { Logo, Button, IconButton } from 'components/indexComponents';
import { useGetUserState } from 'hooks/useGetUserState';

export function HeaderNoLogin() {
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
  const handlerUserLoggedIn = () => 2;

  const { getStateUser } = useGetUserState({
    onUserLoggedIn: handlerUserLoggedIn,
  });

  useEffect(() => {
    getStateUser();
  }, []);

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <header className="z-20 sticky top-0 flex items-center w-full h-16 px-4 border-b border-slate-600/[0.05] bg-slate-900">
      <nav className="relative flex justify-between w-full">
        <div className="flex justify-between items-center w-full md:gap-x-12">
          <NavLink className="w-28 md:w-36" to="/">
            <Logo className="w-full" alt="PetBook" />
          </NavLink>
          <div className="h-full flex items-center gap-x-3">
            <Button
              type="button"
              variant="contained"
              styles="w-fit"
              value="Crear cuenta"
              handleOnClick={handleGoToLogin}
            />
            <IconButton
              type="button"
              variant="text"
              styles="md:hidden text-white"
              icon={<MdLogin />}
              handleOnClick={handleGoToLogin}
            />
            <div className="w-fit hidden md:block">
              <Button
                type="button"
                variant="text"
                styles="w-full button-text-third"
                value="Iniciar sesión"
                handleOnClick={handleGoToLogin}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

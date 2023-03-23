/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { Logo, IconButton } from 'components/indexComponents';
import { NavBarLG, NavBarSM } from 'containers/indexContainers';
import { useGetUserState } from 'hooks/useGetUserState';
import { signOutWithGoogle } from 'fbase/authFunctions';

export function Header() {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const activeClassName = 'text-sky-400';
  const iconNavBar = openNavBar ? <MdClose /> : <MdMenu />;
  const navList = [
    { routeName: 'Inicio', routeLink: '/home' },
    { routeName: 'create-pet', routeLink: '/create-pet' },
  ];
  /*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
  5: exists usuername
*/
  const handlerUserLoggedIn = (user) => {
    setCurrentUser(user);
    return 2;
  };

  const { getStateUser } = useGetUserState({
    onUserLoggedIn: handlerUserLoggedIn,
  });

  useEffect(() => {
    getStateUser();
  }, []);

  const handlerNavBar = () => setOpenNavBar(!openNavBar);

  const handlerSignOut = async () => {
    await signOutWithGoogle();
    navigate('/login');
  };

  return (
    <header className="z-20 sticky top-0 flex items-center w-full h-16 px-4 border-b border-slate-50/[0.06] bg-slate-900">
      <nav className="relative flex justify-between w-full">
        <div className="flex justify-between items-center w-full md:gap-x-12">
          <NavLink className="w-36" to="/home">
            <Logo className="w-full" alt="PetBook" />
          </NavLink>
          <NavBarLG
            navList={navList}
            activeClassName={activeClassName}
            userInfo={currentUser}
            handlerSignOut={handlerSignOut}
          />
          <IconButton
            type="button"
            variant="contained"
            styles="md:hidden"
            icon={iconNavBar}
            handlerOnClick={handlerNavBar}
          />
          {openNavBar ? (
            <NavBarSM
              navList={navList}
              activeClassName={activeClassName}
              handlerNavBar={handlerNavBar}
              handlerSignOut={handlerSignOut}
            />
          ) : null}
        </div>
      </nav>
    </header>
  );
}

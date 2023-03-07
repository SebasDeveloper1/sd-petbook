import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, IconButton } from 'components/indexComponents';
import { MdMenu, MdClose } from 'react-icons/md';

export function Header() {
  const [openNavBar, setOpenNavBar] = useState(false);

  const activeClassName = 'text-blue-600';
  const iconNavBar = openNavBar ? <MdClose /> : <MdMenu />;
  const navList = [
    { routeName: 'Inicio', routeLink: '/home' },
    { routeName: 'Perfil', routeLink: '/p/edit' },
    { routeName: 'Cerrar Sesión ', routeLink: '/signout' },
  ];

  const handlerNavBar = () => {
    setOpenNavBar(!openNavBar);
  };

  return (
    <header className="flex items-center h-20 px-4 border-b-2 bg-white">
      <nav className="relative z-50 flex justify-between w-full">
        <div className="flex justify-between items-center w-full md:gap-x-12">
          <NavLink className="w-44" to="/home">
            <Logo className="w-full" alt="PetBook" />
          </NavLink>
          <ul className="hidden md:flex md:gap-x-6">
            {navList.map((item) => (
              <li key={`navItem_${item?.routeName}`} className="navbar-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : null
                  }
                  to={item?.routeLink}
                >
                  {item?.routeName}
                </NavLink>
              </li>
            ))}
          </ul>
          <IconButton
            type="button"
            variant="contained"
            styles="md:hidden"
            Icon={iconNavBar}
            onClick={handlerNavBar}
          />
          {openNavBar ? (
            <div className="fixed inset-0 flex justify-center items-start mt-20 bg-slate-300/90 md:hidden">
              <ul className="inset-x-0 top-full flex origin-top flex-col w-11/12 rounded-2xl bg-white p-4 mt-4 shadow-xl ring-1 ring-slate-900/5 opacity-100 scale-100">
                {navList.map((item) => (
                  <li
                    key={`navItem_${item?.routeName}`}
                    className="navbar-item"
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeClassName : null
                      }
                      to={item?.routeLink}
                    >
                      {item?.routeName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

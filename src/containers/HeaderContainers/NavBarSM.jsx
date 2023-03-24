import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBarSM({
  navList = [],
  activeClassName = '',
  handlerNavBar = null,
  handlerSignOut = null,
} = {}) {
  return (
    <div className="fixed inset-0 flex justify-center items-start mt-16 bg-slate-300/90 md:hidden">
      <ul className="inset-x-0 top-full flex origin-top flex-col w-11/12 rounded-md bg-white p-4 mt-4 shadow-xl ring-1 ring-slate-900/5 opacity-100 scale-100">
        {navList.map((item) => (
          <li key={`navItem_${item?.routeName}`} className="navbar-item-light">
            <NavLink
              className={({ isActive }) => (isActive ? activeClassName : null)}
              to={item?.routeLink}
              onClick={handlerNavBar}
            >
              {item?.routeName}
            </NavLink>
          </li>
        ))}

        <div className="mt-4 pt-4 border-t">
          <li className="navbar-item-light">
            <NavLink
              className={({ isActive }) => (isActive ? activeClassName : null)}
              to="/p/e"
              onClick={handlerNavBar}
            >
              Perfil
            </NavLink>
          </li>
          <li className="navbar-item-light w-full mt-2">
            <button
              type="button"
              className="w-full text-start"
              onClick={handlerSignOut}
            >
              Cerrar Sesión
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
}

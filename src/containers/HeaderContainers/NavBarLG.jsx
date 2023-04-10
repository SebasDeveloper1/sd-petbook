/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdOutlineExpandMore } from 'react-icons/md';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import defaultImage from 'images/profile-picture.png';

export function NavBarLG({
  navList = [],
  activeClassName = '',
  userInfo = {},
  handlerSignOut = null,
} = {}) {
  const { profilePicture = '', username } = userInfo;
  const moreOptionsList = [
    { routeName: 'Perfil', routeLink: `/p/${username}` },
  ];
  const [profileUrl, setProfileUrl] = useState(defaultImage);
  const [moreOptions, setMoreOptions] = useState({
    transition: '',
    status: false,
  });

  useEffect(() => {
    const fetchProfileUrl = async () => {
      try {
        if (profilePicture !== '') {
          const urlImage = await getStorageImageUrl({ path: profilePicture });
          setProfileUrl(urlImage);
        } else {
          setProfileUrl(defaultImage);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileUrl();
  }, [userInfo]);

  const moreOptionsRef1 = useRef(null);
  const moreOptionsRef2 = useRef(null);

  const handlerMoreOptions = () => {
    if (!moreOptions.status) {
      setMoreOptions({
        transition: 'transform rotate-180',
        status: true,
      });
    } else {
      setMoreOptions({ transition: '', status: false });
    }
  };

  useOnClickOutside(
    moreOptionsRef1,
    () => setMoreOptions({ transition: '', status: false }),
    moreOptionsRef2
  );

  return (
    <ul className="hidden md:flex items-center md:gap-x-6">
      {navList.map((item) => (
        <li key={`navItem_${item?.routeName}`} className="navbar-item-dark">
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : null)}
            to={item?.routeLink}
          >
            {item?.routeName}
          </NavLink>
        </li>
      ))}

      <div className="relative">
        <button
          ref={moreOptionsRef2}
          className="flex justify-between items-center gap-2 text-2xl text-white hover:text-sky-500"
          type="button"
          onClick={handlerMoreOptions}
        >
          <img
            className="w-8 aspect-square rounded-full"
            src={profileUrl}
            alt="User"
          />
          <IconContext.Provider
            value={{
              className: `transition-all ${moreOptions?.transition}`,
            }}
          >
            <MdOutlineExpandMore />
          </IconContext.Provider>
        </button>
        {moreOptions?.status ? (
          <div className="fixed inset-0 mt-16 bg-slate-900/80 backdrop-blur-sm">
            <div
              ref={moreOptionsRef1}
              className="absolute top-4 right-4 w-full max-w-sm rounded-lg shadow-lg py-4 px-1 bg-slate-800 "
            >
              <ul className="">
                {moreOptionsList.map((item) => (
                  <li
                    key={`moreOptions_${item?.routeName}`}
                    className="navbar-more-options-item-container"
                  >
                    <NavLink
                      to={item?.routeLink}
                      className={({ isActive }) =>
                        isActive
                          ? `navbar-more-options-item ${activeClassName}`
                          : 'navbar-more-options-item'
                      }
                    >
                      {item?.routeName}
                    </NavLink>
                  </li>
                ))}
                <li className="navbar-more-options-item-container">
                  <button
                    type="button"
                    className="navbar-more-options-item"
                    onClick={handlerSignOut}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </ul>
  );
}

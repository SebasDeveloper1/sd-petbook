/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import {
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaLink,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from 'components/indexComponents';
import { getStorageImageUrl } from 'fbase/storageFunctions';
import defaultImage from 'images/profile-picture.png';

const dataTypes = {
  TEXT: 'text',
  URL: 'url',
};

const msmByDefault = 'No disponible';

export function UserInfoSection({ userInfo = {} }) {
  const {
    profilePicture = '',
    username,
    names,
    surnames,
    gender,
    ccp,
    cell,
    email,
    website,
    address,
  } = userInfo;

  const [profileUrl, setProfileUrl] = useState(defaultImage);
  const navigate = useNavigate();

  const getProfileUrl = async () => {
    if (profilePicture !== '') {
      const urlImage = await getStorageImageUrl({
        path: profilePicture,
      });
      setProfileUrl(urlImage);
    } else {
      setProfileUrl(defaultImage);
    }
  };

  useEffect(() => {
    getProfileUrl();
  }, [profilePicture]);

  const userData = [
    {
      type: dataTypes.TEXT,
      name: 'gender',
      icon: <FaHeart />,
      data: gender && msmByDefault,
    },
    {
      type: dataTypes.TEXT,
      name: 'cell',
      icon: <FaPhone />,
      data: cell ? `${ccp} / ${cell}` : msmByDefault,
    },
    {
      type: dataTypes.TEXT,
      name: 'email',
      icon: <FaEnvelope />,
      data: email && msmByDefault,
    },
    {
      type: dataTypes.URL,
      name: 'website',
      icon: <FaLink />,
      data: website && msmByDefault,
    },
    {
      type: dataTypes.TEXT,
      name: 'address',
      icon: <FaMapMarkerAlt />,
      data: address && msmByDefault,
    },
  ];

  const handleEditProfile = () => {
    navigate(`/p/edit`);
  };

  return (
    <>
      <img
        style={{ borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%' }}
        className="w-60 aspect-square shadow-lg object-cover object-center"
        src={profileUrl}
        alt={username}
      />
      <div className="w-full text-center">
        <Typography
          variant="h4"
          value={username && msmByDefault}
          styles="w-full mb-1 font-semibold tracking-tight text-slate-900 truncate"
        />
        <Typography
          variant="p_lg"
          value={names && surnames ? `${names} ${surnames}` : msmByDefault}
          styles="w-full font-medium text-sky-500 truncate capitalize"
        />
      </div>
      <Button
        type="button"
        variant="text"
        styles="w-full text-sky-600 font-semibold bg-sky-100 hover:bg-sky-200"
        value="Editar perfil"
        handleOnClick={handleEditProfile}
      />
      <section className="w-full pt-4 border-t">
        <div className="flex flex-col gap-6 p-4 text-xl text-slate-300">
          {userData.map((item) =>
            item.type === dataTypes.TEXT ? (
              <article
                key={`userDateElement__${item?.name}`}
                className="flex items-center gap-3"
              >
                {item?.icon}
                <Typography
                  variant="span_base"
                  value={item?.data}
                  styles="font-medium text-slate-700"
                />
              </article>
            ) : item?.data !== msmByDefault ? (
              <article
                key={`userDateElement__${item?.name}`}
                className="flex items-center gap-3"
              >
                {item?.icon}
                <a href={item?.data} target="_blank" rel="noopener noreferrer">
                  <Typography
                    variant="span_base"
                    value={item?.data}
                    styles="font-medium text-slate-700 hover:text-sky-600 hover:underline"
                  />
                </a>
              </article>
            ) : null
          )}
        </div>
      </section>
    </>
  );
}

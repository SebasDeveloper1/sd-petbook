import React from 'react';
import { FaHeart, FaPhone, FaEnvelope, FaLink, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from 'components/indexComponents';
import defaultImage from 'images/profile-picture.png';

export function UserInfoSection({ userInfo = {} } = {}) {
  const { profilePicture, username, displayName } = userInfo;
  const navigate = useNavigate();

  const userData = [
    { name: 'gender', icon: <FaHeart />, data: 'Femenino' },
    { name: 'cell', icon: <FaPhone />, data: 1234567890 },
    { name: 'email', icon: <FaEnvelope />, data: 'correo@correo.com' },
    { name: 'website', icon: <FaLink />, data: 'twitter/username' },
    { name: 'address', icon: <FaHome />, data: 'calle # 1-123/cund/colombia' },
  ];

  const handlerEditProfile = () => {
    navigate('/p/edit');
  };
  return (
    <>
      <img
        style={{ borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%' }}
        className="w-60 aspect-square shadow-lg object-cover object-center"
        src={profilePicture || defaultImage}
        alt="Bonnie"
      />
      <div className="w-full text-center">
        <Typography
          variant="h4"
          value={username || 'Username'}
          styles="w-full mb-1 font-semibold tracking-tight text-slate-900 truncate"
        />
        <Typography
          variant="p_lg"
          value={displayName || 'correo@correo.com'}
          styles="w-full font-medium text-sky-500 truncate capitalize"
        />
      </div>
      <Button
        type="button"
        variant="text"
        styles="w-full text-sky-600 font-semibold bg-sky-100 hover:bg-sky-200"
        value="Editar perfil"
        handlerOnClick={handlerEditProfile}
      />
      <section className="w-full pt-4 border-t">
        <div className="flex flex-col gap-6 p-4 text-2xl text-slate-600">
          {userData.map((item) => (
            <article
              key={`userDateElement__${item?.name}`}
              className="flex items-center gap-3"
            >
              {item?.icon}
              <Typography
                variant="span_lg"
                value={item?.data}
                styles="text-slate-600"
              />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

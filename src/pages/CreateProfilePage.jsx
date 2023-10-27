/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaHead } from 'components/indexComponents';
import { CreateProfileForm } from 'containers/indexContainers';
import { useGetUserState } from 'hooks/useGetUserState';

export default function CreateProfilePage() {
  const [currentUser, setCurrentUser] = useState(null);
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
  const handlerUserLoggedIn = () => {
    navigate('/home');
    return 2;
  };

  const handlerUserNotRegistered = (user) => {
    setCurrentUser(user);
    return 3;
  };

  const handlerUserNotLoggedIn = () => {
    navigate('/login');
    return 4;
  };

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
        title="PetBook | Escoge un nombre de usuario"
        description="Plataforma para el almacenamiento y gestión de hojas de vida de mascotas."
        name="petbook"
        type="article"
        url={document.location.href}
      />
      <MetaHead
        title="PetBook | Home"
        description="Plataforma para el almacenamiento y gestión de hojas de vida de mascotas."
        name="petbook"
        type="article"
        url={document.location.href}
      />
      <div className="flex justify-center items-center w-full">
        <CreateProfileForm
          userInfo={currentUser}
          handleUserInfo={setCurrentUser}
        />
      </div>
    </>
  );
}

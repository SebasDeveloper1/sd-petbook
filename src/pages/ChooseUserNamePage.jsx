/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsernameForm, ConfirmationLayout } from 'containers/indexContainers';
import { updateUser } from 'fbase/dbFunctions';
import { useGetUserState } from 'hooks/useGetUserState';

export default function ChooseUserNamePage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [registerCompleted, setRegisterCompleted] = useState(false);

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

  const handlerRegister = async (username) => {
    const tmpUser = { ...currentUser };
    tmpUser.username = username;
    tmpUser.processCompleted = true;
    await updateUser(tmpUser);
    return setRegisterCompleted(true);
  };

  const handlerContinue = () => navigate('/home');

  useEffect(() => {
    getStateUser();
  }, []);

  return (
    <div className="relative flex justify-center items-center p-4 h-screen bg-ChooseUsernamePage bg-center bg-cover bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t from-sky-500 to-indigo-500 after:opacity-20">
      {!registerCompleted ? (
        <UsernameForm handleSubmitForm={handlerRegister} />
      ) : (
        <ConfirmationLayout
          title="Registro exitoso"
          paragraph="¡Felicidades! Has terminado el proceso de registro, presiona el botón para continuar."
          handlerButton={handlerContinue}
        />
      )}
    </div>
  );
}

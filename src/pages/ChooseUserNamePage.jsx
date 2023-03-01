/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useGetUserState } from 'hooks/useGetUserState';
import { useNavigate } from 'react-router-dom';
import { existsUsername, updateUser } from 'fbase/dbFunctions';
import { UsernameForm, ConfirmationLayout } from 'containers/indexContainers';

export default function ChooseUserNamePage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState('');
  const [exeption, setExeption] = useState(null);
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
    navigate('/dashboard');
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

  const handlerInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlerRegister = async () => {
    setExeption(null);
    const valueUsername = username.trim().toLowerCase();
    if (valueUsername !== '') {
      const exists = await existsUsername({ username: valueUsername });
      if (exists) {
        return setExeption(
          'Este nombre de usuario ya está en uso, por favor seleccione otro.'
        );
      }
      const tmp = { ...currentUser };
      tmp.username = valueUsername;
      tmp.processCompleted = true;
      await updateUser(tmp);
      return setRegisterCompleted(true);
    }
    return setExeption('Introduce un nombre de usuario válido.');
  };

  const handlerContinue = () => navigate('/dashboard');

  useEffect(() => {
    getStateUser();
  }, []);

  return (
    <div className="relative flex justify-center items-center p-4 h-screen bg-ChooseUsernamePage bg-center bg-cover bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t from-sky-500 to-indigo-500 after:opacity-20">
      {!registerCompleted ? (
        <UsernameForm
          exeptionUser={exeption}
          handlerInput={handlerInputUsername}
          handlerButton={handlerRegister}
        />
      ) : (
        <ConfirmationLayout handlerButton={handlerContinue} />
      )}
    </div>
  );
}

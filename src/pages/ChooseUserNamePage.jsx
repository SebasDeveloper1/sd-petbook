/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useGetUserState } from 'hooks/useGetUserState';
import { useNavigate } from 'react-router-dom';
import { existsUsername, updateUser } from 'fbase/dbFunctions';
import {
  Logo,
  Typography,
  Button,
  TextField,
} from 'components/indexComponents';
import backgroundImage from 'images/cover-login.jpg';

export function ChooseUserNamePage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState('');
  const [errorUser, setErrorUser] = useState(null);

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

  const handlerContinue = async () => {
    setErrorUser(null);
    const valueUsername = username.trim().toLowerCase();
    if (valueUsername !== '') {
      const exists = await existsUsername({ username: valueUsername });
      if (exists) {
        return setErrorUser(
          'Este nombre de usuario ya está en uso, por favor seleccione otro.'
        );
      }
      const tmp = { ...currentUser };
      tmp.username = valueUsername;
      tmp.processCompleted = true;
      await updateUser(tmp);
      return navigate('/dashboard');
    }
    return setErrorUser('Introduce un nombre de usuario válido.');
  };

  useEffect(() => {
    getStateUser();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      className="relative flex justify-center items-center p-4 h-screen bg-center bg-cover bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t from-sky-500 to-indigo-500 after:opacity-20"
    >
      <div className="flex flex-col justify-center items-center space-y-8 h-fit p-8 rounded-xl max-w-sm bg-white shadow-2xl z-10">
        <div className="flex flex-col space-y-8 w-full">
          <Logo className="w-8/12" alt="PetBook" />
          <div className="px-4 py-3 rounded-lg bg-sky-100">
            <Typography
              variant="h5"
              styles="mb-1 text-sky-900"
              value="¡Hola !"
            />
            <Typography
              variant="p_base"
              styles="text-sky-800"
              value="Antes de continuar por favor  selecciona tu nombre de usuario."
            />
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center items-center space-y-8 w-full">
          <TextField
            labelValue="Nombre de Usuario"
            placeholder="Username"
            status={errorUser ? 'warning' : 'normal'}
            exceptionMessage={errorUser}
            onChange={handlerInputUsername}
          />
          <Button
            type="button"
            variant="contained"
            styles="mx-w-4"
            value="Continuar"
            onClick={handlerContinue}
          />
        </div>
      </div>
    </div>
  );
}

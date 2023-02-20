import React, { useEffect, useState } from 'react';
import { useGetUserState } from 'hooks/useGetUserState';
import { useNavigate } from 'react-router-dom';
import { existsUsername, updateUser } from 'fbase/dbFunctions';

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
      const exists = await existsUsername({ valueUsername });
      if (exists) {
        return setErrorUser('El nombre de usuario ya existe');
      }
      const tmp = { ...currentUser };
      tmp.username = valueUsername;
      tmp.processCompleted = true;
      await updateUser(tmp);
      return navigate('/dashboard');
    }
    return setErrorUser('Campo vacio');
  };

  useEffect(() => {
    getStateUser();
  }, []);

  return (
    <div>
      <h1>Bienvenido {currentUser?.displayName} </h1>
      <p>Para terminar el proceso seleciona un nombre de usuario</p>
      {errorUser ? <span> {errorUser} </span> : null}
      <div>
        <input type="text" onChange={handlerInputUsername} />
      </div>
      <div>
        <button type="button" onClick={handlerContinue}>
          Continuar
        </button>
      </div>
    </div>
  );
}

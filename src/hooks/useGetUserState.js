/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { app } from 'fbase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { userExists, getUserInfo, registerNewUser } from 'fbase/dbFunctions';

/*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
  5: exists usuername
*/

export const useGetUserState = ({
  onUserLoggedIn,
  onUserNotLoggedIn,
  onUserNotRegistered,
} = {}) => {
  const [userState, setUserState] = useState({ statusCode: 0 });

  const auth = getAuth(app);

  const handlerUserStateChanged = async (user) => {
    setUserState({ statusCode: 1 });
    /* Checking if the user is logged in. */
    if (user) {
      /* Checking if the user is registered in the database. */
      const isRegister = await userExists({ userUid: user?.uid });
      if (isRegister) {
        /* Getting the user information from the database. */
        const userInfo = await getUserInfo({ userUid: user?.uid });
        /* Checking if the user has completed the registration process. */
        if (userInfo.processCompleted) {
          return setUserState({ statusCode: onUserLoggedIn(userInfo) });
        }
        return setUserState({ statusCode: onUserNotRegistered(userInfo) });
      }
      /* Registering a new user in the database. */
      await registerNewUser({
        uid: user?.uid,
        displayName: user?.displayName,
        profilePicture: '',
        username: '',
        processCompleted: false,
      });
      return setUserState({ statusCode: onUserNotRegistered(user) });
    }
    return setUserState({ statusCode: onUserNotLoggedIn() });
  };

  const getStateUser = () => {
    onAuthStateChanged(auth, handlerUserStateChanged);
  };

  return { getStateUser, userState };
};

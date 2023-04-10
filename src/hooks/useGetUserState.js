/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { auth } from 'fbase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
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

  const handlerUserStateChanged = async (user) => {
    setUserState({ statusCode: 1 });
    /* Checking if the user is logged in. */
    if (user) {
      try {
        const isRegistered = await userExists({ userUid: user.uid });

        if (isRegistered) {
          const userInfo = await getUserInfo({ userUid: user.uid });

          if (userInfo.processCompleted) {
            setUserState({ statusCode: onUserLoggedIn(userInfo) });
          } else {
            setUserState({ statusCode: onUserNotRegistered(userInfo) });
          }
        } else {
          await registerNewUser({
            uid: user?.uid,
            displayName: user?.displayName,
            profilePicture: '',
            username: '',
            names: '',
            surnames: '',
            gender: '',
            ccp: '',
            cell: '',
            email: user?.email,
            website: '',
            country: '',
            department: '',
            city: '',
            address: '',
            processCompleted: false,
          });
          setUserState({ statusCode: onUserNotRegistered(user) });
        }
      } catch (error) {
        console.error(error);
        setUserState({ statusCode: onUserNotLoggedIn() });
      }
    } else {
      setUserState({ statusCode: onUserNotLoggedIn() });
    }
  };

  const getStateUser = () => {
    onAuthStateChanged(auth, handlerUserStateChanged);
  };

  return { getStateUser, userState };
};

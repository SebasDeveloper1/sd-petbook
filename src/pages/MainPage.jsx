import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardWrapperNoLogin, HeroMain } from 'containers/indexContainers';
import { useGetUserState } from 'hooks/useGetUserState';

export default function MainPage() {
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
  const handlerUserNotRegistered = () => 3;

  const handlerUserNotLoggedIn = () => 4;

  const { getStateUser } = useGetUserState({
    onUserLoggedIn: handlerUserLoggedIn,
    onUserNotLoggedIn: handlerUserNotLoggedIn,
    onUserNotRegistered: handlerUserNotRegistered,
  });

  useEffect(() => {
    getStateUser();
  }, []);
  return (
    <DashboardWrapperNoLogin>
      <HeroMain />
    </DashboardWrapperNoLogin>
  );
}

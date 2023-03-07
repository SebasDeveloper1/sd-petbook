/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUserState } from 'hooks/useGetUserState';
import { DashboardWrapper } from 'containers/indexContainers';

export default function HomePage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState('');
  /*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
  5: exists usuername
*/
  const handlerUserLoggedIn = (user) => {
    setCurrentUser(user);
    return 2;
  };

  const handlerUserNotRegistered = () =>
    // navigate('/login');
    3;
  const handlerUserNotLoggedIn = () =>
    // navigate('/login');
    4;
  const { getStateUser } = useGetUserState({
    onUserLoggedIn: handlerUserLoggedIn,
    onUserNotLoggedIn: handlerUserNotLoggedIn,
    onUserNotRegistered: handlerUserNotRegistered,
  });

  useEffect(() => {
    getStateUser();
  }, []);

  return (
    <DashboardWrapper>
      <div>Dashboard</div>
    </DashboardWrapper>
  );
}

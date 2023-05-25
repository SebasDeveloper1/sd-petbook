import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardWrapper, EditForm } from 'containers/indexContainers';
import { useGetUserState } from 'hooks/useGetUserState';

export default function EditUserPage() {
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
  const handlerUserLoggedIn = (user) => {
    setCurrentUser(user);
    return 2;
  };

  const handlerUserNotRegistered = () => {
    navigate('/login');
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
    <DashboardWrapper>
      <div className="flex justify-center w-full min-h-screen py-10 md:py-16 bg-BeamsCover bg-contain bg-top bg-no-repeat">
        <EditForm userInfo={currentUser} handleUserInfo={setCurrentUser} />
      </div>
    </DashboardWrapper>
  );
}

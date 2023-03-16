/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUserState } from 'hooks/useGetUserState';
import {
  DashboardWrapper,
  HeaderList,
  PetList,
} from 'containers/indexContainers';
import { Button, PetCart } from 'components/indexComponents';
import { BsClipboardPlus } from 'react-icons/bs';

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

  const handlerOnClick = () => {
    navigate('/create-pet');
  };

  return (
    <DashboardWrapper>
      <div className="relative flex flex-col items-center w-full min-h-screen bg-slate-50">
        <section className="flex flex-col justify-center items-center w-full">
          <HeaderList userInfo={currentUser} />
          <PetList>
            <Button
              type="button"
              variant="outlined"
              styles="shadow-lg flex-col py-8 border-dashed border-2 border-sky-500"
              value="Agregar mascota"
              startIcon={<BsClipboardPlus />}
              handlerOnClick={handlerOnClick}
            />
            <PetCart />
            <PetCart />
            <PetCart />
            <PetCart />
          </PetList>
        </section>
      </div>
    </DashboardWrapper>
  );
}

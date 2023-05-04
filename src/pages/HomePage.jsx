/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUserState } from 'hooks/useGetUserState';
import { getPets } from 'fbase/dbFunctions';
import {
  DashboardWrapper,
  HeaderList,
  PetList,
  LoadingSkeletonHome,
} from 'containers/indexContainers';
import { Button, PetCart } from 'components/indexComponents';
import { BsClipboardPlus } from 'react-icons/bs';

export default function HomePage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
  5: exists usuername
*/
  const handlerUserLoggedIn = async (user) => {
    setCurrentUser(user);
    setPetList(await getPets(user?.uid));
    setLoading(!loading);
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

  const handleOnClick = () => {
    navigate('/create-pet');
  };

  return (
    <DashboardWrapper>
      {loading ? (
        <LoadingSkeletonHome />
      ) : (
        <div className="relative flex flex-col items-center w-full min-h-screen bg-BeamsCover bg-cover bg-top bg-no-repeat">
          <section className="flex flex-col justify-center items-center w-full">
            <HeaderList userInfo={currentUser} />
            <PetList>
              <Button
                type="button"
                variant="outlined"
                styles="shadow-lg flex-col py-8 rounded-xl border-dashed border-2 border-sky-500"
                value="Agregar mascota"
                startIcon={<BsClipboardPlus />}
                handleOnClick={handleOnClick}
              />
              {petList.map((pet) => (
                <PetCart key={`petCart_${pet?.docId}`} petInfo={pet} />
              ))}
            </PetList>
          </section>
        </div>
      )}
    </DashboardWrapper>
  );
}

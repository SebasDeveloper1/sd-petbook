import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  DashboardWrapper,
  HeroSection,
  VaccinesSection,
  OwnerInfoSection,
  LoadingSkeletonPetView,
} from 'containers/indexContainers';
import { useGetUserState } from 'hooks/useGetUserState';
import { getPetInfo } from 'fbase/dbFunctions';

export default function PetViewPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({});
  const [petInfo, setPetInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const { petName } = useParams();
  const petId = petName.split('+');

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

  useEffect(() => {
    const fetchInfo = async () => {
      setPetInfo(await getPetInfo({ petId: petId[1] }));
      setLoading(false);
    };
    fetchInfo();
  }, []);

  return (
    <DashboardWrapper>
      <section className="flex justify-center w-full">
        <div className="overflow-hidden w-full">
          {loading ? (
            <LoadingSkeletonPetView />
          ) : (
            <>
              <HeroSection petInfo={petInfo} />
              <VaccinesSection petInfo={petInfo} />
              <OwnerInfoSection petInfo={petInfo} />
            </>
          )}
        </div>
      </section>
    </DashboardWrapper>
  );
}

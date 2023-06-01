import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MetaHead } from 'components/indexComponents';
import {
  DashboardWrapper,
  DashboardWrapperNoLogin,
  HeroSection,
  VaccinesSection,
  OwnerInfoSection,
  LoadingSkeletonPetView,
} from 'containers/indexContainers';
import Page404 from 'pages/Page404';
import { getPetInfo } from 'fbase/dbFunctions';
import { useGetUserState } from 'hooks/useGetUserState';

export default function PetViewPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(null);
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

  useEffect(() => {
    const fetchInfo = async () => {
      setPetInfo(await getPetInfo({ petId: petId[1] }));
      setLoading(false);
    };
    fetchInfo();
  }, []);

  const WrapperComponent = currentUser
    ? DashboardWrapper
    : DashboardWrapperNoLogin;

  if (petInfo) {
    return (
      <>
        <MetaHead
          title={`PetBook | Hoja de vida de ${petId[0]}`}
          description="Plataforma para el almacenamiento y gestión de hojas de vida de mascotas."
          name="petbook"
          type="article"
          url={document.location.href}
        />
        <WrapperComponent>
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
        </WrapperComponent>
      </>
    );
  }
  return <Page404 />;
}

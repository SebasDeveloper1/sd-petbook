import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MetaHead } from 'components/indexComponents';
import {
  DashboardWrapper,
  DashboardWrapperNoLogin,
  PetInfoSection,
  VaccinesSection,
  OwnerInfoSection,
  LoadingSkeletonPetView,
  PetOptionsBanner,
} from 'containers/indexContainers';
import Page404 from 'pages/Page404';
import { getPetInfo, getPets } from 'fbase/dbFunctions';
import { useGetUserState } from 'hooks/useGetUserState';

export default function PetViewPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(null);
  const [petInfo, setPetInfo] = useState({});
  const [petExists, setPetExists] = useState(false);
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

  useEffect(() => {
    const fetchPets = async () => {
      try {
        if (currentUser) {
          const pets = await getPets(currentUser.uid);
          const petList = pets.some((pet) => pet.id === petId[1]);
          setPetExists(petList);
        } else {
          // Si el usuario no está autenticado, establece petExists como false.
          setPetExists(false);
        }
      } catch (error) {
        // Manejo de errores: puedes personalizar esto según tus necesidades, por ejemplo, registrando el error.
        console.error('Error al cargar mascotas:', error);
        setPetExists(false); // Devuelve false en caso de error.
      }
    };
    fetchPets();
  }, [currentUser, petId]);

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
        <section>
          {loading ? (
            <LoadingSkeletonPetView />
          ) : (
            <WrapperComponent>
              {petExists ? <PetOptionsBanner petInfo={petInfo} /> : null}
              <section className="flex justify-center w-full min-h-screen pt-12 pb-24  bg-BeamsCover bg-contain bg-top bg-no-repeat">
                <div className="w-11/12">
                  <section className="grid grid-cols-3 justify-center gap-10 divide-y md:divide-x md:divide-y-0">
                    <div className="col-span-3 md:col-span-1 flex flex-col items-center gap-6 ">
                      <PetInfoSection petInfo={petInfo} />
                    </div>
                    <div className="col-span-3 md:col-span-2 pt-6 md:pl-10 md:py-0">
                      <OwnerInfoSection petInfo={petInfo} />
                      <VaccinesSection petInfo={petInfo} />
                    </div>
                  </section>
                </div>
              </section>
            </WrapperComponent>
          )}
        </section>
      </>
    );
  }
  return <Page404 />;
}

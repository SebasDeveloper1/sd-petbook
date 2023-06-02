import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsClipboardPlus } from 'react-icons/bs';
import {
  Typography,
  Button,
  PetCard,
  MetaHead,
} from 'components/indexComponents';
import {
  DashboardWrapper,
  UserInfoSection,
  LoadingSkeletonUserView,
} from 'containers/indexContainers';
import { getPets, deletePet } from 'fbase/dbFunctions';
import { useGetUserState } from 'hooks/useGetUserState';

export default function UserViewPage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleUserLoggedIn = async (user) => {
    setCurrentUser(user);
    const pets = await getPets(user?.uid);
    setPetList(pets);
    setLoading(false);
  };

  const handleUserNotRegistered = () => {
    navigate('/login');
  };

  const handleUserNotLoggedIn = () => {
    navigate('/login');
  };

  const { getStateUser } = useGetUserState({
    onUserLoggedIn: handleUserLoggedIn,
    onUserNotLoggedIn: handleUserNotLoggedIn,
    onUserNotRegistered: handleUserNotRegistered,
  });

  useEffect(() => {
    getStateUser();
  }, []);

  const handleDeletePet = async (petId) => {
    await deletePet({ petId });
    setPetList((prevPetList) =>
      prevPetList.filter((pet) => pet.docId !== petId)
    );
  };

  const handleOnClick = () => {
    navigate('/create-pet');
  };

  return (
    <>
      <MetaHead
        title={`PetBook | Perfil de ${currentUser?.username}`}
        description="Plataforma para el almacenamiento y gestión de hojas de vida de mascotas."
        name="petbook"
        type="article"
        url={document.location.href}
      />
      <DashboardWrapper>
        {loading ? (
          <LoadingSkeletonUserView />
        ) : (
          <section className="flex justify-center w-full min-h-screen py-12 bg-BeamsCover bg-contain bg-top bg-no-repeat">
            <div className="w-11/12">
              <section className="grid grid-cols-3 justify-center gap-6 divide-y md:divide-x md:divide-y-0">
                <div className="col-span-3 md:col-span-1 flex flex-col items-center gap-6">
                  <UserInfoSection userInfo={currentUser} />
                </div>
                <div className="col-span-3 md:col-span-2 pt-6 md:pl-6 md:py-0">
                  <Typography
                    variant="h4"
                    value="Mascotas registradas"
                    styles="pb-8 max-w-prose font-semibold text-slate-900 truncate"
                  />
                  <ul className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                    <Button
                      type="button"
                      variant="outlined"
                      styles="shadow-lg flex-col min-h-[200px] h-full py-8 rounded-xl border-dashed border-2 border-sky-500 md:hover:-translate-y-4 transition-all duration-300"
                      value="Agregar mascota"
                      startIcon={<BsClipboardPlus />}
                      handleOnClick={handleOnClick}
                    />
                    {petList.map((pet) => (
                      <PetCard
                        key={`PetCard_${pet?.docId}`}
                        petInfo={pet}
                        handleDelete={handleDeletePet}
                      />
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </section>
        )}
      </DashboardWrapper>
    </>
  );
}

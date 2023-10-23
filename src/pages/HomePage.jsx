import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsClipboardPlus } from 'react-icons/bs';
import { Button, PetCard, MetaHead } from 'components/indexComponents';
import {
  DashboardWrapper,
  HeaderList,
  PetList,
  LoadingSkeletonHome,
} from 'containers/indexContainers';
import { getPets } from 'fbase/dbFunctions';
import { useGetUserState } from 'hooks/useGetUserState';

export default function HomePage() {
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
    navigate('/');
  };

  const handleUserNotLoggedIn = () => {
    navigate('/');
  };

  const { getStateUser } = useGetUserState({
    onUserLoggedIn: handleUserLoggedIn,
    onUserNotLoggedIn: handleUserNotLoggedIn,
    onUserNotRegistered: handleUserNotRegistered,
  });

  useEffect(() => {
    getStateUser();
  }, []);

  const handleDeletePet = (petId) => {
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
        title="PetBook | Home"
        description="Plataforma para el almacenamiento y gestión de hojas de vida de mascotas."
        name="petbook"
        type="article"
        url={document.location.href}
      />
      <DashboardWrapper>
        {loading ? (
          <LoadingSkeletonHome />
        ) : (
          <div className="relative w-full min-h-screen bg-slate-900">
            <HeaderList userInfo={currentUser} />
            <section className="flex flex-col justify-center items-center w-full bg-BeamsCover bg-cover bg-top bg-no-repeat">
              <PetList>
                <Button
                  type="button"
                  variant="outlined"
                  styles="shadow-lg flex-col min-h-[180px] h-full py-8 rounded-xl border-dashed border-2 border-sky-500 bg-white md:hover:scale-105 transition-all duration-300"
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
              </PetList>
            </section>
          </div>
        )}
      </DashboardWrapper>
    </>
  );
}

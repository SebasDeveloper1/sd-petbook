import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsClipboardPlus } from 'react-icons/bs';
import { Button, PetCard } from 'components/indexComponents';
import {
  DashboardWrapper,
  HeaderList,
  PetList,
  LoadingSkeletonHome,
} from 'containers/indexContainers';
import { getPets, deletePet } from 'fbase/dbFunctions';
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
                styles="shadow-lg flex-col h-full py-8 rounded-xl border-dashed border-2 border-sky-500 md:hover:-translate-y-4 transition-all duration-300"
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
  );
}

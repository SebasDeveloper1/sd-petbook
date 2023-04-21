/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'components/indexComponents';
import {
  DashboardWrapper,
  CreateForm,
  Modal,
  GoToBackLayout,
} from 'containers/indexContainers';
import { useEvents } from 'hooks/useEvents';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { useGetUserState } from 'hooks/useGetUserState';
import submittedImage from 'images/Bunny_illustration.svg';

export default function CreatePetPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [submittedForm, setSubmittedForm] = useState(false);
  const { stateEvents, handlerModal } = useEvents();
  const { openModal } = stateEvents;
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

  const handleGoToBack = () => {
    navigate('/home');
  };

  const handleGoToContinue = () => {
    handlerModal();
  };
  const myRefElement1 = useRef(null);
  useOnClickOutside(myRefElement1, () => handleGoToContinue());

  return (
    <DashboardWrapper>
      <div className="relative bg-BeamsCover bg-contain bg-top bg-no-repeat">
        <CreateForm
          handleSubmittedForm={setSubmittedForm}
          handleGoToContinue={handleGoToContinue}
          userInfo={currentUser}
        />
      </div>
      {openModal?.modalState ? (
        <Modal>
          {submittedForm ? (
            <div className="flex flex-col justify-center items-center gap-y-8 h-fit p-6 rounded-md max-w-md text-center bg-white shadow-2xl z-10">
              <Typography
                variant="span_xl"
                styles="px-3 py-2 rounded-lg font-medium tracking-tight text-green-700 bg-lime-300/30"
                value="✨ La mascota ha sido registrada 🎉"
              />
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <Typography
                  variant="span_lg"
                  styles="font-medium tracking-tight text-slate-600"
                  value="Volviendo a la página de inicio..."
                />
              </div>
            </div>
          ) : (
            <div ref={myRefElement1}>
              <GoToBackLayout
                handlerGoToBack={handleGoToBack}
                handlerGoToContinue={handleGoToContinue}
              />
            </div>
          )}
        </Modal>
      ) : null}
    </DashboardWrapper>
  );
}

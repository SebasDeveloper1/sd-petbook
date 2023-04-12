/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  DashboardWrapper,
  CreateForm,
  Modal,
  GoToBackLayout,
} from 'containers/indexContainers';
import { useEvents } from 'hooks/useEvents';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { useGetUserState } from 'hooks/useGetUserState';

export default function CreatePetPage() {
  const [currentUser, setCurrentUser] = useState(null);
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
          handleGoToContinue={handleGoToContinue}
          userInfo={currentUser}
        />
      </div>
      {openModal?.modalState ? (
        <Modal>
          <div ref={myRefElement1}>
            <GoToBackLayout
              handlerGoToBack={handleGoToBack}
              handlerGoToContinue={handleGoToContinue}
            />
          </div>
        </Modal>
      ) : null}
    </DashboardWrapper>
  );
}

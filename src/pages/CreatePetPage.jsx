/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  DashboardWrapper,
  AddImagePet,
  PetDataForm,
  VaccinesDataForm,
  OwnerDataForm,
  Modal,
  GoToBackLayout,
} from 'containers/indexContainers';
import { Typography, Button } from 'components/indexComponents';
import { useEvents } from 'hooks/useEvents';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

export default function CreatePetPage() {
  const defaultState = {
    date: '',
    vaccine: '',
    purpose: '',
    vet: '',
    contact: '',
    image: '',
  };
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const { stateEvents, handlerModal } = useEvents();
  const { openModal } = stateEvents;

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    console.log(rows);
  };

  const handlerGoToBack = () => {
    navigate('/home');
  };

  const handlerGoToContinue = () => {
    handlerModal();
  };
  const myRefElement1 = useRef(null);
  useOnClickOutside(myRefElement1, () => handlerGoToContinue());

  return (
    <DashboardWrapper>
      <div className="relative bg-BeamsCover bg-contain bg-top bg-no-repeat">
        <div className="w-11/12 md:w-10/12 m-auto py-12">
          <Typography
            variant="h3"
            value="Crear mascota"
            styles="pb-4 col-span-3 text-2xl font-semibold tracking-tight text-slate-900"
          />

          <Formik
            // initialValues={}
            validate={() => {}}
            onSubmit={() => {}}
          >
            <Form onSubmit={handlerOnSubmit}>
              <section className="pb-6 border-b md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-6">
                <AddImagePet />
                <PetDataForm />
              </section>
              <section className="py-6 border-b md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-6">
                <VaccinesDataForm
                  defaultState={defaultState}
                  rows={rows}
                  setRows={setRows}
                />
              </section>
              <section className="py-6 border-b md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-6">
                <OwnerDataForm />
              </section>
              <section className="flex justify-center md:justify-end items-center gap-8 mt-8">
                <Button
                  type="button"
                  variant="contained"
                  styles="w-fit"
                  value="Guardar mascota"
                  handleOnClick={handlerOnSubmit}
                />
                <Button
                  type="button"
                  variant="text"
                  styles="w-fit button-text-secondary"
                  value="Volver al inicio"
                  handleOnClick={handlerGoToContinue}
                />
              </section>
            </Form>
          </Formik>
        </div>
      </div>
      {openModal?.modalState ? (
        <Modal>
          <div ref={myRefElement1}>
            <GoToBackLayout
              handlerGoToBack={handlerGoToBack}
              handlerGoToContinue={handlerGoToContinue}
            />
          </div>
        </Modal>
      ) : null}
    </DashboardWrapper>
  );
}

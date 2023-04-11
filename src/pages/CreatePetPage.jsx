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
import { validatePetDataForm } from 'utils/PetformValidationFunctions';

export default function CreatePetPage() {
  const initialValuesPetForm = {
    petName: '',
    petRace: '',
    petColor: '',
    petSpecie: '',
    petWeight: '',
    petHeight: '',
    petBirthdate: '',
    petSex: '',
    petRepStatus: '',
    petDesc: '',
    petObserv: '',
  };
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

  const handleOnSubmit = (values) => {
    console.log(values);
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
            initialValues={{ ...initialValuesPetForm }}
            validate={validatePetDataForm}
            onSubmit={handleOnSubmit}
          >
            {({ errors, handleBlur, handleChange, touched, values }) => (
              <Form>
                <section className="pb-6 border-b md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-6">
                  <AddImagePet />
                  <PetDataForm
                    initialValues={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                  />
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
                    type="submit"
                    variant="contained"
                    styles="w-fit"
                    value="Guardar mascota"
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
            )}
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

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { v4 as uuidV4 } from 'uuid';
import { InfinitySpin } from 'react-loader-spinner';
import {
  AddImagePet,
  PetDataForm,
  VaccinesDataForm,
  OwnerDataForm,
} from 'containers/indexContainers';
import { Typography, Button } from 'components/indexComponents';
import { validatePetDataForm } from 'utils/PetformValidationFunctions';
import { validateOwnerPetForm } from 'utils/UserformValidationFunctions';
import { imageLoadController } from 'utils/imageLoadController';
import { createNewPet } from 'fbase/dbFunctions';
import defaultImage from 'images/img-picture.png';

export function CreateForm({ userInfo, handleGoToContinue } = {}) {
  const [fileInput, setFileInput] = useState([]);
  const [imageUrl, setImageUrl] = useState(defaultImage);
  const [initialValues, setInitialValues] = useState({
    valuesPetForm: {
      petImage: '',
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
    },
    valuesVaccines: {
      date: '',
      vaccine: '',
      purpose: '',
      vet: '',
      contact: '',
      image: '',
    },
    valuesOwner: {
      names: '',
      surnames: '',
      gender: '',
      ccp: '',
      cell: '',
      email: '',
      website: '',
      country: '',
      department: '',
      city: '',
      address: '',
    },
  });
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [submittedForm, setSubmittedForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserInfo() {
      if (userInfo) {
        const tmpFormValues = {
          ...initialValues,
          valuesOwner: {
            names: userInfo.names,
            surnames: userInfo.surnames,
            gender: userInfo.gender,
            ccp: userInfo.ccp,
            cell: userInfo.cell,
            email: userInfo.email,
            website: userInfo.website,
            country: userInfo.country,
            department: userInfo.department,
            city: userInfo.city,
            address: userInfo.address,
          },
        };
        setInitialValues(tmpFormValues);
        setLoading(false);
      }
    }
    fetchUserInfo();
  }, [userInfo]);

  const handleOnValidate = (values) => {
    const errors = {
      ...validatePetDataForm(values),
      ...validateOwnerPetForm(values),
    };
    return errors;
  };

  const handleOnSubmit = async (values) => {
    const newPet = {
      ...values,
      uid: userInfo?.uid,
      id: uuidV4(),
      vaccinesList: [...rows],
    };
    newPet.petImage = await imageLoadController({
      fileInput,
      fileName: newPet?.id,
      petId: newPet?.id,
      type: 'pet',
      uid: userInfo?.uid,
    });

    const tmpVaccinesList = await Promise.all(
      newPet.vaccinesList.map(async (vaccine, index) => {
        const tmpVaccine = { ...vaccine };
        tmpVaccine.image = await imageLoadController({
          fileInput: tmpVaccine.image,
          fileName: index,
          petId: newPet?.id,
          type: 'vaccine',
          uid: userInfo?.uid,
        });
        return tmpVaccine;
      })
    );
    newPet.vaccinesList = tmpVaccinesList;

    const res = await createNewPet(newPet);
    newPet.docId = res.id;
    setSubmittedForm(true);
    // setTimeout(() => {
    //   setSubmittedForm(false);
    //   // navigate('/home');
    // }, 2000);
  };
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-fit">
          <InfinitySpin width="200" color="#0ea5e9" />
        </div>
        <span className="pb-4 text-3xl font-semibold tracking-tight text-sky-500">
          Cargando perfil...
        </span>
      </div>
    );
  }
  return (
    <div className="w-11/12 md:w-10/12 m-auto py-12">
      <Typography
        variant="h3"
        value="Crear mascota"
        styles="pb-4 col-span-3 text-2xl font-semibold tracking-tight text-slate-900"
      />
      <Formik
        initialValues={{
          ...initialValues?.valuesPetForm,
          ...initialValues?.valuesOwner,
        }}
        // validate={handleOnValidate}
        onSubmit={handleOnSubmit}
      >
        {({ errors, handleBlur, handleChange, touched, values }) => (
          <Form>
            <section className="pb-6 border-b md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-6">
              <AddImagePet
                handleFileInput={setFileInput}
                imageUrl={imageUrl}
                handleImageUrl={setImageUrl}
              />
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
                defaultState={initialValues?.valuesVaccines}
                rows={rows}
                setRows={setRows}
              />
            </section>
            <section className="py-6 border-b md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-6">
              <OwnerDataForm
                initialValues={values}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
              />
            </section>
            {submittedForm ? (
              <Typography
                variant="span_base"
                value="✨ La mascota ha sido registrada 🎉"
                styles="col-span-6 px-3 py-2 rounded-lg font-medium tracking-tight text-green-700 text-center bg-lime-300/30"
              />
            ) : null}
            <section className="col-span-3 flex flex-col md:flex-row md:justify-end gap-6 mt-8">
              <Button
                type="submit"
                variant="contained"
                styles="w-full md:w-fit"
                value="Guardar mascota"
              />
              <Button
                type="button"
                variant="text"
                styles="w-full md:w-fit button-text-secondary"
                value="Volver al inicio"
                handleOnClick={handleGoToContinue}
              />
            </section>
          </Form>
        )}
      </Formik>
    </div>
  );
}

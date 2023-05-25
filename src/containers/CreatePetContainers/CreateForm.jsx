/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { v4 as uuidV4 } from 'uuid';
import {
  AddImagePet,
  PetDataForm,
  VaccinesDataForm,
  AddImageOwner,
  OwnerDataForm,
  LoadingSkeletonCreatePet,
} from 'containers/indexContainers';
import { Typography, Button } from 'components/indexComponents';
import { validatePetDataForm } from 'utils/PetformValidationFunctions';
import { validateOwnerPetForm } from 'utils/UserformValidationFunctions';
import { imageLoadController } from 'utils/imageLoadController';
import { createNewPet } from 'fbase/dbFunctions';
import { setImageToStorageTypes } from 'fbase/storageFunctions';
import { getDateInMilliseconds } from 'utils/dateFunctions';

export function CreateForm({
  userInfo,
  handleSubmittedForm,
  handleGoToContinue,
} = {}) {
  const [fileInput, setFileInput] = useState({
    petFileInput: [],
    ownerFileInput: [],
  });
  const [imageUrl, setImageUrl] = useState({
    petImage: '',
    ownerImage: '',
  });
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
      ownerImage: '',
      ownerNames: '',
      ownerSurnames: '',
      ownerGender: '',
      ownerCcp: '',
      ownerCell: '',
      ownerEmail: '',
      ownerWebsite: '',
      ownerCountry: '',
      ownerDepartment: '',
      ownerCity: '',
      ownerAddress: '',
    },
  });
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserInfo() {
      if (userInfo) {
        const tmpFormValues = {
          ...initialValues,
          valuesOwner: {
            ownerImage: userInfo.profilePicture,
            ownerNames: userInfo.names,
            ownerSurnames: userInfo.surnames,
            ownerGender: userInfo.gender,
            ownerCcp: userInfo.ccp,
            ownerCell: userInfo.cell,
            ownerEmail: userInfo.email,
            ownerWebsite: userInfo.website,
            ownerCountry: userInfo.country,
            ownerDepartment: userInfo.department,
            ownerCity: userInfo.city,
            ownerAddress: userInfo.address,
          },
        };
        setInitialValues(tmpFormValues);
        setImageUrl({ ...imageUrl, ownerImage: userInfo.profilePicture });
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
    const tmpRows = rows.map((row) => {
      const tmpRow = { ...row };
      if (tmpRow.date) {
        tmpRow.date = getDateInMilliseconds(tmpRow.date);
      }
      return tmpRow;
    });

    const newPet = {
      ...values,
      uid: userInfo?.uid,
      id: uuidV4(),
      petBirthdate: getDateInMilliseconds(values?.petBirthdate),
      vaccinesList: [...tmpRows],
      createdAt: new Date().getTime(),
      editedAt: new Date().getTime(),
    };

    if (fileInput.petFileInput?.length > 0) {
      newPet.petImage = await imageLoadController({
        fileInput: fileInput.petFileInput,
        fileName: newPet.id,
        petId: newPet.id,
        type: setImageToStorageTypes.PET,
        uid: userInfo?.uid,
      });
    } else {
      newPet.petImage = imageUrl?.petImage;
    }

    if (newPet.vaccinesList?.length > 0) {
      const tmpVaccinesList = await Promise.all(
        newPet.vaccinesList.map(async (vaccine) => {
          const tmpVaccine = { ...vaccine };
          if (tmpVaccine?.image?.length > 0) {
            tmpVaccine.image = await imageLoadController({
              fileInput: tmpVaccine?.image,
              fileName: `${vaccine?.id}=${newPet.id}`,
              petId: newPet.id,
              type: setImageToStorageTypes.VACCINE,
              uid: userInfo?.uid,
            });
          }
          return tmpVaccine;
        })
      );
      newPet.vaccinesList = tmpVaccinesList;
    }

    if (fileInput?.ownerFileInput?.length > 0) {
      newPet.ownerImage = await imageLoadController({
        fileInput: fileInput.ownerFileInput,
        fileName: newPet.id,
        petId: newPet.id,
        type: setImageToStorageTypes.PET_OWNER,
        uid: userInfo?.uid,
      });
    } else {
      newPet.ownerImage = imageUrl?.ownerImage;
    }

    const res = await createNewPet(newPet);
    newPet.docId = res.id;
    handleGoToContinue();
    handleSubmittedForm(true);
    setTimeout(() => {
      handleSubmittedForm(false);
      handleGoToContinue();
      navigate('/home');
    }, 1000);
  };

  if (loading) {
    return <LoadingSkeletonCreatePet />;
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
        validate={handleOnValidate}
        onSubmit={handleOnSubmit}
      >
        {({ errors, handleBlur, handleChange, touched, values }) => (
          <Form>
            <section className="py-6 border-b md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-6">
              <AddImagePet
                fileInput={fileInput}
                handleFileInput={setFileInput}
                imageUrl={imageUrl}
                req
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
              <Typography
                variant="h4"
                value="Información del Propietario"
                styles="mb-4 col-span-3 text-2xl font-medium tracking-tight text-slate-900"
              />
              <AddImageOwner
                fileInput={fileInput}
                handleFileInput={setFileInput}
                imageUrl={imageUrl}
              />
              <OwnerDataForm
                initialValues={values}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
              />
            </section>
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

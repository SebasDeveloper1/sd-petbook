/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { v4 as uuidV4 } from 'uuid';
import { Typography, Button } from 'components/indexComponents';
import {
  AddImagePet,
  PetDataForm,
  VaccinesDataForm,
  AddImageOwner,
  OwnerDataForm,
  LoadingSkeletonCreatePet,
} from 'containers/indexContainers';
import { getPetInfo, updatePet } from 'fbase/dbFunctions';
import {
  setImageToStorageTypes,
  deleteStorageImage,
} from 'fbase/storageFunctions';
import { validatePetDataForm } from 'utils/inputValidation/PetformValidationFunctions';
import { validateOwnerPetForm } from 'utils/inputValidation/UserformValidationFunctions';
import { imageLoadController } from 'utils/imageLoadController';
import {
  getDateInMilliseconds,
  getMillisecondsInDate,
  getTimePassed,
} from 'utils/dateFunctions';

export function EditForm({
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
      professionalCard: '',
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
  const [petInfo, setPetInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [deleteRowsImage, setDeleteRowsImage] = useState([]);
  const navigate = useNavigate();
  const { petId } = useParams();

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!userInfo || !petId) {
        return;
      }

      const pet = await getPetInfo({ petId });
      setPetInfo(pet);

      if (userInfo.uid !== pet.uid) {
        navigate(-1);
        return;
      }

      const tmpRows =
        pet.vaccinesList?.map((row) => {
          const tmpRow = { ...row };
          if (tmpRow.date) {
            tmpRow.date = getMillisecondsInDate(tmpRow.date);
          }
          return tmpRow;
        }) || [];
      setRows(tmpRows);

      const tmpInitialValues = {
        ...initialValues,
        valuesPetForm: {
          petImage: pet.petImage,
          petName: pet.petName,
          petRace: pet.petRace,
          petColor: pet.petColor,
          petSpecie: pet.petSpecie,
          petWeight: pet.petWeight,
          petHeight: pet.petHeight,
          petBirthdate: getMillisecondsInDate(pet.petBirthdate),
          petSex: pet.petSex,
          petRepStatus: pet.petRepStatus,
          petDesc: pet.petDesc,
          petObserv: pet.petObserv,
        },
        valuesOwner: {
          ownerImage: pet.ownerImage,
          ownerNames: pet.ownerNames,
          ownerSurnames: pet.ownerSurnames,
          ownerGender: pet.ownerGender,
          ownerCcp: pet.ownerCcp,
          ownerCell: pet.ownerCell,
          ownerEmail: pet.ownerEmail,
          ownerWebsite: pet.ownerWebsite,
          ownerCountry: pet.ownerCountry,
          ownerDepartment: pet.ownerDepartment,
          ownerCity: pet.ownerCity,
          ownerAddress: pet.ownerAddress,
        },
      };
      setInitialValues(tmpInitialValues);
      setImageUrl({
        petImage: pet.petImage,
        ownerImage: pet.ownerImage,
      });

      setLoading(false);
    };

    fetchUserInfo();
  }, [userInfo, petId]);

  const handleOnValidate = (values) => {
    const errors = {
      ...validatePetDataForm(values),
      ...validateOwnerPetForm(values),
    };
    return errors;
  };

  const handleOnSubmit = async (values) => {
    if (deleteRowsImage.length > 0) {
      deleteRowsImage.map(async (image) => {
        deleteStorageImage({ path: image });
      });
    }
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
      id: petId,
      petBirthdate: getDateInMilliseconds(values?.petBirthdate),
      vaccinesList: [...tmpRows],
      createdAt: petInfo?.createdAt,
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
          if (
            tmpVaccine?.image?.length > 0 &&
            typeof tmpVaccine?.image !== 'string'
          ) {
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

    newPet.docId = petInfo?.docId;
    await updatePet(newPet);
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
        value="Editar mascota"
        styles="col-span-3 text-2xl font-semibold tracking-tight text-slate-900"
      />
      <Typography
        variant="span_base"
        value={`Editado por última vez hace ${getTimePassed(
          petInfo?.editedAt
        )}.`}
        styles="mb-6 font-medium tracking-tight text-sky-500"
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
                deleteRowsImage={deleteRowsImage}
                setDeleteRowsImage={setDeleteRowsImage}
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
                value="Guardar cambios"
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

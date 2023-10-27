import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Logo, Typography, Button } from 'components/indexComponents';
import {
  LoadingSkeletonCreateProfile,
  Modal,
} from 'containers/indexContainers';
import { updateUser } from 'fbase/dbFunctions';
import { setImageToStorageTypes } from 'fbase/storageFunctions';
import { useEvents } from 'hooks/useEvents';
import { TextFieldGenerator } from 'utils/componentsJSX/TextFieldGenerator';
import { validateUserDataForm } from 'utils/inputValidation/UserformValidationFunctions';
import { imageLoadController } from 'utils/imageLoadController';
import { userformInputList } from 'utils/inputList/userformInputList';
import defaultImage from 'images/profile-picture.webp';
import coverLogin from 'images/cover-login.webp';

export function CreateProfileForm({ userInfo, handleUserInfo } = {}) {
  const [fileInput, setFileInput] = useState([]);
  const [formInitialValues, setFormInitialValues] = useState({});
  const [profileUrl, setProfileUrl] = useState(defaultImage);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { stateEvents, handlerModal } = useEvents();
  const { openModal } = stateEvents;

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userInfo) {
        setProfileUrl(defaultImage);

        const formValues = {
          profilePicture: defaultImage,
          username: userInfo.username,
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
        };
        setFormInitialValues(formValues);
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, [userInfo]);

  const handleChangeFile = (e) => {
    const { files } = e.target;
    setFileInput(files);
    const tmpPath = URL.createObjectURL(files[0]);
    setProfileUrl(tmpPath);
  };

  const handleOnValidate = (values) =>
    validateUserDataForm({ values, uid: userInfo.uid });

  const handleOnSubmit = async (values) => {
    const newUserInfo = {
      ...userInfo,
      username: values.username,
      names: values.names,
      surnames: values.surnames,
      gender: values.gender,
      ccp: values.ccp,
      cell: values.cell,
      email: values.email,
      website: values.website,
      country: values.country,
      department: values.department,
      city: values.city,
      address: values.address,
      editedAt: new Date().getTime(),
      processCompleted: true,
    };
    if (fileInput.length > 0) {
      newUserInfo.profilePicture = await imageLoadController({
        fileInput,
        type: setImageToStorageTypes.USER,
        uid: userInfo?.uid,
        fileName: `userPhoto_${userInfo?.uid}`,
      });
    } else {
      newUserInfo.profilePicture = userInfo.profilePicture;
    }

    await updateUser(newUserInfo);
    handleUserInfo(newUserInfo);
    handlerModal();
    setTimeout(() => {
      handlerModal();
      navigate('/home');
    }, 3000);
  };

  if (loading) {
    return <LoadingSkeletonCreateProfile />;
  }

  return (
    <>
      <section className="flex flex-col items-center lg:flex-row lg:justify-center w-full h-full md:h-screen bg-white">
        <figure className="relative flex flex-col justify-end items-center w-full lg:w-2/6 h-2/6 lg:h-full">
          <img
            className="w-full h-full object-cover object-center"
            src={coverLogin}
            alt="banner pets"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col justify-center items-center w-full py-4 bg-slate-900/70">
            <Logo className="w-7/12 mx-auto" alt="PetBook" />
          </div>
        </figure>
        <section className="overflow-auto w-full lg:w-4/6 lg:h-screen">
          <Formik
            initialValues={formInitialValues}
            validate={handleOnValidate}
            onSubmit={handleOnSubmit}
          >
            {({ errors, handleBlur, handleChange, touched, values }) => (
              <Form className="w-11/12 md:w-9/12 py-8 md:py-12 mx-auto">
                <div className="flex flex-col justify-center items-center gap-6 md:gap-12 w-full">
                  <Typography
                    variant="h3"
                    styles="w-full pb-4 font-semibold text-slate-900 border-b border-gray-300"
                    value="Crea tu cuenta"
                  />
                  <div className="w-full md:w-1/3 rounded-md border border-gray-300 text-center hover:bg-slate-50">
                    <label
                      htmlFor="file-upload"
                      className="block w-full p-6 rounded-md cursor-pointer font-medium text-sky-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:text-sky-500"
                    >
                      <img
                        className="w-32 mb-3 aspect-square m-auto rounded-full object-cover object-center"
                        src={profileUrl || defaultImage}
                        alt="Perfil"
                        loading="lazy"
                      />
                      <span>Selecciona una foto</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        accept=".jpg, .jpeg, .png, .webp"
                        className="sr-only"
                        onChange={handleChangeFile}
                        required
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-6 gap-6 w-full">
                    <TextFieldGenerator
                      textFieldList={userformInputList}
                      errors={errors}
                      values={values}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      touched={touched}
                      containerClassName="col-span-6 sm:col-span-3"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    styles="w-full md:w-fit"
                    value="Crear cuenta"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </section>
      {openModal?.modalState ? (
        <Modal>
          <div className="flex flex-col justify-center items-center gap-y-8 h-fit p-6 rounded-md max-w-md text-center bg-white shadow-2xl z-10">
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
                variant="span_xl"
                styles="font-medium tracking-tight text-slate-600"
                value="Guardando..."
              />
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

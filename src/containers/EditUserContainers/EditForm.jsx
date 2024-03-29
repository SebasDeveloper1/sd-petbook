/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Typography, Button } from 'components/indexComponents';
import { LoadingSkeletonEditForm } from 'containers/indexContainers';
import { updateUser } from 'fbase/dbFunctions';
import {
  getStorageImageUrl,
  setImageToStorageTypes,
} from 'fbase/storageFunctions';
import { TextFieldGenerator } from 'utils/componentsJSX/TextFieldGenerator';
import { validateUserDataForm } from 'utils/inputValidation/UserformValidationFunctions';
import { imageLoadController } from 'utils/imageLoadController';
import { getTimePassed } from 'utils/dateFunctions';
import defaultImage from 'images/profile-picture.webp';
import { userformInputList } from 'utils/inputList/userformInputList';

export function EditForm({ userInfo, handleUserInfo } = {}) {
  const [fileInput, setFileInput] = useState([]);
  const [formInitialValues, setFormInitialValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [profileUrl, setProfileUrl] = useState(defaultImage);
  const [submittedForm, setSubmittedForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userInfo) {
        const urlImage = userInfo.profilePicture
          ? await getStorageImageUrl({ path: userInfo.profilePicture })
          : defaultImage;
        setProfileUrl(urlImage);

        const formValues = {
          profilePicture: urlImage,
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

  const handelGoBack = () => navigate(`/p/${userInfo.username}`);

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
    setSubmittedForm(true);
    setTimeout(() => setSubmittedForm(false), 3000);
  };

  if (loading) {
    return <LoadingSkeletonEditForm />;
  }

  return (
    <Formik
      initialValues={formInitialValues}
      validate={handleOnValidate}
      onSubmit={handleOnSubmit}
    >
      {({ errors, handleBlur, handleChange, touched, values }) => (
        <Form className="w-11/12 md:w-9/12">
          <Typography
            variant="h4"
            value="Editar perfil"
            styles="text-2xl font-semibold tracking-tight text-slate-900"
          />
          <Typography
            variant="span_base"
            value={`Editado por última vez hace ${getTimePassed(
              userInfo?.editedAt
            )}.`}
            styles="mb-6 font-medium tracking-tight text-sky-500"
          />
          <section className="grid grid-cols-3 gap-8 md:gap-16 divide-y md:divide-x md:divide-y-0">
            <section className="col-span-3 md:col-span-1 flex flex-col gap-y-4">
              <div className="w-full rounded-md border border-gray-300 text-center hover:bg-slate-50">
                <label
                  htmlFor="file-upload"
                  className="block w-full p-6 rounded-md cursor-pointer font-medium text-sky-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:text-sky-500"
                >
                  <img
                    className="w-40 mb-3 aspect-square m-auto rounded-full object-cover object-center"
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
                  />
                </label>
              </div>
              <div className="p-4 space-y-4 rounded-md bg-sky-50 text-sky-600 border border-dashed border-sky-200">
                <Typography
                  variant="p_sm"
                  value="Los datos que se proporcionan en esta sección solo son usados con fines de identificación dentro de la aplicación y no interfieren de ninguna manera con la información que usas para iniciar sección."
                  styles="text-2xl tracking-tight"
                />
                <Typography
                  variant="p_sm"
                  value="Utiliza tu cuenta de Google con normalidad para el proceso de inicio de sección."
                  styles="text-2xl tracking-tight font-semibold"
                />
              </div>
            </section>
            <section className="col-span-3 md:col-span-2 pt-8 md:pl-16 md:py-0">
              <Typography
                variant="h5"
                value="Tus Datos"
                styles="pb-4 text-2xl font-semibold tracking-tight text-slate-900"
              />
              <div className="grid grid-cols-6 gap-6">
                <TextFieldGenerator
                  textFieldList={userformInputList}
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  containerClassName="col-span-6 sm:col-span-3"
                />
                {submittedForm ? (
                  <Typography
                    variant="span_base"
                    value="✨ Tus datos han sido actualizados 🎉"
                    styles="col-span-6 px-3 py-2 rounded-lg font-medium tracking-tight text-green-700 text-center bg-lime-300/30"
                  />
                ) : null}

                <section className="col-span-6 flex flex-col md:flex-row gap-6 mt-4">
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
                    value="Volver al perfil"
                    handleOnClick={handelGoBack}
                  />
                </section>
              </div>
            </section>
          </section>
        </Form>
      )}
    </Formik>
  );
}

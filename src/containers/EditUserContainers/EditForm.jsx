/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { InfinitySpin } from 'react-loader-spinner';
import {
  Typography,
  TextField,
  TextSelection,
  Button,
} from 'components/indexComponents';
import { setImageToStorage, getStorageImageUrl } from 'fbase/storageFunctions';
import { updateUser } from 'fbase/dbFunctions';
import { validateUserDataForm } from 'utils/InputValidationFunctions';
import defaultImage from 'images/profile-picture.png';
import { componentTypes, formInputList } from './formInputList';

export function EditForm({ userInfo, handleUserInfo }) {
  const [fileInput, setFileInput] = useState([]);
  const [formInitialValues, setFormInitialValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [profileUrl, setProfileUrl] = useState(defaultImage);
  const [submittedForm, setSubmittedForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserInfo() {
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
    }
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

  const handelToGoBack = () => navigate(`/p/${userInfo.username}`);

  const readFileAsArrayBuffer = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (event) => {
        resolve(event.target.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });

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
    };

    if (fileInput && fileInput.length > 0) {
      const imageData = await readFileAsArrayBuffer(fileInput[0]);
      const res = await setImageToStorage({
        uid: userInfo?.uid,
        fileName: `userPhoto_${userInfo?.uid}`,
        file: imageData,
      });

      if (res) {
        newUserInfo.profilePicture = await res.metadata.fullPath;
      }
    }

    await updateUser(newUserInfo);
    handleUserInfo(newUserInfo);
    setSubmittedForm(true);
    setTimeout(() => setSubmittedForm(false), 3000);
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
            styles="pb-4 text-2xl font-semibold tracking-tight text-slate-900"
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
                {formInputList.map((item) =>
                  item.inputComponent === componentTypes.TEXT_FIELD ? (
                    <div
                      key={`input_${item.name}`}
                      className="col-span-6 sm:col-span-3"
                    >
                      <TextField
                        labelValue={item.labelValue}
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        status={
                          touched[item.name] && errors[item.name]
                            ? 'error'
                            : 'normal'
                        }
                        exceptionMessage={
                          touched[item.name] && errors[item.name]
                            ? errors[item.name]
                            : null
                        }
                        defaultValue={values[item.name]}
                        handleOnChange={handleChange}
                        handleOnBlur={handleBlur}
                      />
                    </div>
                  ) : item.inputComponent === componentTypes.TEXT_SELECTION ? (
                    <div
                      key={`input_${item.name}`}
                      className="col-span-6 sm:col-span-3"
                    >
                      <TextSelection
                        labelValue={item.labelValue}
                        name={item.name}
                        options={item.options}
                        status={
                          touched[item.name] && errors[item.name]
                            ? 'error'
                            : 'normal'
                        }
                        exceptionMessage={
                          touched[item.name] && errors[item.name]
                            ? errors[item.name]
                            : null
                        }
                        defaultValue={values[item.name]}
                        handleOnChange={handleChange}
                        handleOnBlur={handleBlur}
                      />
                    </div>
                  ) : null
                )}
                {submittedForm ? (
                  <Typography
                    variant="span_base"
                    value="✨ Tus datos han sido actualizados 🎉"
                    styles="col-span-6 px-3 py-2 rounded-lg font-medium tracking-tight text-green-700 text-center bg-lime-300/30"
                  />
                ) : null}

                <div className="col-span-6 flex flex-col md:flex-row gap-6 mt-4">
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
                    handleOnClick={handelToGoBack}
                  />
                </div>
              </div>
            </section>
          </section>
        </Form>
      )}
    </Formik>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Typography, Button, MetaHead } from 'components/indexComponents';
import { DashboardWrapper } from 'containers/indexContainers';
import illustration404 from 'images/404Not-Found.svg';

export default function Page404() {
  const navigate = useNavigate();

  const handlerGoToBack = () => {
    navigate(-1);
  };

  return (
    <>
      <MetaHead
        title="PetBook | Error 404 - Página no encontrada"
        description="Plataforma para el almacenamiento y gestión de hojas de vida de mascotas."
        name="petbook"
        type="article"
        url={document.location.href}
      />
      <DashboardWrapper>
        <section className="flex justify-center items-center w-full min-h-screen bg-slate-900">
          <div className="flex flex-col justify-center items-center gap-8 w-11/12 text-center">
            <img
              className="w-full max-w-sm aspect-square"
              src={illustration404}
              alt="Page not found"
            />
            <div className="flex flex-col justify-center items-center gap-3 w-full">
              <Typography
                variant="h2"
                value="😥 Hmmm! 😥"
                styles="font-semibold text-white"
              />
              <Typography
                variant="span_xl"
                value="No encontramos lo que estabas buscando."
                styles="font-medium text-sky-300"
              />
            </div>
            <Button
              type="button"
              variant="contained"
              styles=""
              value="Regresar"
              startIcon={<MdKeyboardArrowLeft />}
              handleOnClick={handlerGoToBack}
            />
          </div>
        </section>
      </DashboardWrapper>
    </>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { DashboardWrapper } from 'containers/indexContainers';
import { Typography, Button } from 'components/indexComponents';
import illustration404 from 'images/404Not-Found.svg';

export default function Page404() {
  const navigate = useNavigate();

  const handlerGoToBack = () => {
    navigate(-1);
  };

  return (
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
            handlerOnClick={handlerGoToBack}
          />
        </div>
      </section>
    </DashboardWrapper>
  );
}

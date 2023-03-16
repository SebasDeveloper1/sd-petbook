import React from 'react';
import { Typography, Button } from 'components/indexComponents';

export function GoToBackLayout({ handlerGoToBack, handlerGoToContinue }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 h-fit p-6 rounded-md max-w-sm text-center bg-white shadow-2xl">
      <div className="flex flex-col justify-center items-center gap-4">
        <Typography
          variant="p_base"
          styles="font-medium text-slate-600"
          value="Estás por abandonar esta página sin completar el proceso"
        />
        <span className="block text-5xl">😲</span>
        <Typography
          variant="p_lg"
          styles="font-medium text-slate-900"
          value="¿Realmente quieres salir?"
        />
      </div>
      <div className="w-full mx-w-4 space-y-4">
        <Button
          type="button"
          variant="contained"
          styles="w-full"
          value="Salir"
          handlerOnClick={handlerGoToBack}
        />
        <Button
          type="button"
          variant="text"
          styles="w-full text-sky-500 hover:bg-sky-100"
          value="Quedarse"
          handlerOnClick={handlerGoToContinue}
        />
      </div>
    </div>
  );
}

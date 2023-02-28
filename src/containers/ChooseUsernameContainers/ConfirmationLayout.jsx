import React from 'react';
import { Typography, Button } from 'components/indexComponents';

export function ConfirmationLayout({ handlerButton } = {}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 h-fit p-6 rounded-xl max-w-sm text-center bg-white shadow-2xl z-10">
      <div className="flex flex-col justify-center items-center space-y-4">
        <Typography
          variant="h4"
          styles="font-bold text-slate-900"
          value="Registro exitoso"
        />
        <span className="block text-5xl">🎉</span>
        <Typography
          variant="p_base"
          styles="font-medium text-slate-600"
          value="¡Felicidades! Has terminado el proceso de registro, presiona el botón para continuar."
        />
      </div>
      <Button
        type="button"
        variant="contained"
        styles="w-full mx-w-4"
        value="Continuar"
        onClick={handlerButton}
      />
    </div>
  );
}
